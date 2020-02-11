import { useState } from 'react'
import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'

const Tokens: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  function onCheckboxChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setIsChecked(target.checked);
  }

  function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    Router.push("/tokens/auth")
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
        </form>
      </div>
    </Layout>
  )
};

export default Tokens;