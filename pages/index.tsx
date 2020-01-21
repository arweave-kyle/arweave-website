import { NextPage } from 'next'
import Layout from '../components/UI/Layout'
import CardLinkSection from '../components/CardLinkSection'
import TitleSection from '../components/TitleSection'
import NewsletterSignup from '../components/NewsletterSignup'
import HexagonBackground from '../components/HexagonBackground'

const Home: NextPage = () => (
  <Layout>
    <HexagonBackground />
    <CardLinkSection title="Store data, permanently"
      desc="Arweave enables you to permanently host  your web apps and pages, simply and quickly."
      action="SEE DOCUMENTATION" />
    <TitleSection title="Friends and partners">
      <img src="https://via.placeholder.com/200x80.png" />
      <img src="https://via.placeholder.com/100x80.png" />
      <img src="https://via.placeholder.com/100x80.png" />
      <img src="https://via.placeholder.com/100x80.png" />
      <img src="https://via.placeholder.com/100x80.png" />
    </TitleSection>
    <CardLinkSection align="left" title="Feature Number One"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      action="DOWNLOAD NOW" />
    <CardLinkSection align="right" title="Feature Number Two"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      action="GO TO THAT PAGE" />
    <TitleSection title="Latest from the team">
      <img src="https://via.placeholder.com/300x320.png" />
      <img src="https://via.placeholder.com/300x320.png" />
      <img src="https://via.placeholder.com/300x320.png" />
    </TitleSection>
    <NewsletterSignup />
  </Layout>
);

export default Home;