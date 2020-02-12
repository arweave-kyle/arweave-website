import { createRef, useState, useEffect } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'
import ReCAPTCHA from "react-google-recaptcha";
import { authorizeAndGetProfile } from "../../libs/auth0";

const Tokens: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const recaptchaRef = createRef<ReCAPTCHA>();

  useEffect(() => {
    const recaptchaComp = recaptchaRef.current;
    if (recaptchaComp) recaptchaComp.execute();
  }, [])

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  async function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    const authResponse = await authorizeAndGetProfile("google");

    const recaptchaComp = recaptchaRef.current!;
    authResponse.captchaToken = recaptchaComp.getValue() || "";

    console.log(authResponse);
    const authResponseJsonStr = JSON.stringify(authResponse);
    const authResponseJsonB64 = btoa(authResponseJsonStr);
    console.log(authResponseJsonB64);
    Router.push(`/tokens/process?data=${authResponseJsonB64}`)
  }

  return (
    <Layout className="tokens">
      <div className="tokens__inner">
        <h1>Store data on the permaweb for free</h1>
        <p>You first need some Arweave tokens which we’d like to send you for free together with a wallet.</p>
        <p>You'll be amazed how far it'll go!</p>
        <form onSubmit={onSubmit}>
          <label>
            <input
              name="isGoing"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              required />
            I understand and agree to the privacy policy.
          </label>
          <button className="primary" type="submit" >sign up with Google</button>
          <ReCAPTCHA
            ref={recaptchaRef}
            size="invisible"
            sitekey={process.env.CAPTCHA_KEY!}
          />
        </form>
      </div>
    </Layout>
  )
};

export default Tokens;