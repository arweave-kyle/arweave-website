import { NextPage } from 'next'
import Layout from '../components/UI/Layout'
import CardLinkSection from '../components/CardLinkSection'
import HexagonBackground from '../components/HexagonBackground'

const Home: NextPage = () => (
  <Layout>
    <HexagonBackground />
    <CardLinkSection title="Store data, permanently"
      desc="Arweave enables you to permanently host  your web apps and pages, simply and quickly."
      action="see documentation" />
    <CardLinkSection align="left" title="Feature Number One"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      action="see documentation" />
    <CardLinkSection align="right" title="Feature Number Two"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      action="see documentation" />
  </Layout>
);

export default Home;