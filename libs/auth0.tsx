import * as Auth0 from 'auth0-js';

export interface AuthProvider {
  name: string
  connection: string
}

export interface Auth0Response {
  accessToken: string
  expiresIn: string
  tokenType: string
  state: string
}

export interface Auth0Error {
  code: string
  description: string
  original: string
}

export interface AuthorizeProfileResponse {
  response: Auth0Response
  profile: Auth0.Auth0UserProfile
  provider: AuthProvider
  captchaToken: string
}

// export { Auth0UserProfile } from 'auth0-js';


const auth0: Auth0.WebAuth = new Auth0.WebAuth({
  domain: process.env.AUTH0_DOMAIN || '',
  clientID: process.env.AUTH0_CLIENT_ID || ''
});

const providers: { [key: string]: AuthProvider } = {
  google: {
    name: 'Google',
    connection: 'google-oauth2'
  }
};

function getProviderConfig(id: string): AuthProvider {
  return providers[id];
}

async function authorize(connection: string): Promise<Auth0Response> {
  return new Promise((resolve: Function, reject: Function) => {
    auth0
      .popup
      .authorize({
        domain: process.env.AUTH0_DOMAIN || '',
        redirectUri: process.env.AUTH0_REDIRECT_URI || '',
        connection: getProviderConfig(connection).connection,
        responseType: 'token',
        scope: 'openid profile email',
        owp: true
      }, (error: any, response: Auth0.Auth0Result) => {
        if (error) {
          reject(error);
        }
        resolve(response);
      });
  });
};

async function getProfile(accessToken: string): Promise<Auth0.Auth0UserProfile> {
  return new Promise((resolve: Function, reject: Function) => {
    auth0.client.userInfo(accessToken, (error: any, profile: Auth0.Auth0UserProfile) => {
      if (error) {
        reject(error);
      }
      resolve(profile);
    })
  })
}

async function authorizeAndGetProfile(connection: string): Promise<AuthorizeProfileResponse> {
  const provider = getProviderConfig(connection);
  const response = await authorize(connection);
  const profile = await getProfile(response.accessToken);
  return {
    response,
    profile,
    provider,
    captchaToken: ''
  };
}

export {
  authorize,
  getProfile,
  authorizeAndGetProfile,
  getProviderConfig
};