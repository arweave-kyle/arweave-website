import Axios, { AxiosInstance, AxiosResponse } from "axios";
import getDeviceId from './fingerprint';

declare var process: { env: { [key: string]: string; } };

export class TokenApi {

  protected endpoints = {
    signup: process.env.TOKEN_API_SIGNUP,
    redeem: process.env.TOKEN_API_REDEEM,
  };

  protected timeout: number = 30000;

  async signup(auth0AccessToken: string, captchaToken: string, apollo: string | null, referrer: string | null): Promise<AxiosResponse> {
    return this.request().post(this.endpoints.signup, {
      token: auth0AccessToken,
      captchaToken: captchaToken,
      d: getDeviceId(),
      apollo: apollo,
      referrer: referrer
    });
  }

  async redeem(arweaveEmailToken: string): Promise<AxiosResponse> {
    return this.request().post(this.endpoints.redeem, {
      token: arweaveEmailToken,
      d: getDeviceId()
    });
  }

  private request(): AxiosInstance {
    return Axios.create({
      timeout: this.timeout
    });
  }
}
