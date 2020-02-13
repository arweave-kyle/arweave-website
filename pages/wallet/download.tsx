import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { saveAs } from 'file-saver';
import { TokenApi } from "../../libs/token-api";
import Router from 'next/router'
import Layout from '../../components/ui/Layout'

const WalletDownload: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [token, setToken] = useState("");
  const tokenApi = new TokenApi();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token') || "";
    setToken(token);
    console.log(token);
  }, []);

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  async function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    try {
      const response = await tokenApi.redeem(token);
      console.log(response);
      const wallet = response.data.data.wallet;
      const blob = new Blob([wallet.jwk], {
        type: "text/json;charset=utf-8;"
      });
      saveAs(blob, `arweave-keyfile-${wallet.address}.json`);
      Router.push("/wallet/complete")
    } catch (err) {
      console.log(err);
      // Todo: handle error
    }
  }

  return (
    <Layout className="tokens download">
      <div className="tokens__inner">
        <h1>Download your key file</h1>
        <p>Nobody (including the arweave project) can help you recover your wallet if the key file is lost.</p>
        <p className="bold">So, remember to keep it safe!</p>
        <form onSubmit={onSubmit}>
          <label>
            <input
              name="isGoing"
              type="checkbox"
              checked={isChecked}
              onChange={onCheckboxChange}
              required />
            I understand that I am responsible for my key file.
          </label>
          <button className="primary" type="submit" >download key</button>
        </form>
      </div>
    </Layout>
  )
};

export default WalletDownload;