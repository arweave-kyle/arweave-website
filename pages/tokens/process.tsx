import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Fingerprint2 from 'fingerprintjs2';
import Layout from '../../components/ui/Layout'

const TokensProcess: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [d, setD] = useState("");

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const jsonB64 = urlParams.get('data') || "";
      const jsonStr = atob(jsonB64);
      const authResponse = JSON.parse(jsonStr);
      console.log(authResponse);

      Fingerprint2.get(function (components) {
        const values = components.map(function (component) { return component.value });
        const murmur = Fingerprint2.x64hash128(values.join(''), 31);
        setD(murmur);
      });
    } catch (err) {
      console.log(err);
    }

    setTimeout(() => { setIsLoading(false) }, 3000);
  }, []);

  function renderLoading() {
    return (
      <div className="tokens__inner">
        <div className="cp-spinner cp-skeleton"></div>
        <h1>Sending you some permaweb magic...</h1>
        <p>Wait few seconds. No need to refresh.</p>
      </div>
    )
  }

  return (
    <Layout className="tokens process">
      {isLoading ? renderLoading() : (
        <div className="tokens__inner">
          <h1>Check your email!</h1>
          <p>We've sent you an email with instruction and a wallet download link.</p>
          <p className="bold">From: team@arweave.org</p>
          <p className="bold">To: me@lililashka.com</p>
        </div>
      )}
    </Layout>
  )
};

export default TokensProcess;