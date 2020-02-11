import { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../../components/ui/Layout'

const TokensAuth: NextPage = () => {

  return (
    <Layout className="tokens">
      <div className="tokens__inner">
        <h1>User Authentication</h1>
      </div>
    </Layout>
  )
};

export default TokensAuth;