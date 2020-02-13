import { useState } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'

const WalletDownload: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  async function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    Router.push("/wallet/complete")
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