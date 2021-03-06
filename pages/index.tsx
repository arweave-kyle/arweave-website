import { useEffect } from 'react'
import { NextPage } from 'next'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from '../components/ui/Layout'
import CardLinkSection from '../components/CardLinkSection'
import TitleSection from '../components/TitleSection'
import NewsletterSignup from '../components/NewsletterSignup'

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout withHexagonBg>
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} title="Store data, permanently"
        desc="Arweave enables you to permanently host  your web apps and pages, simply and quickly."
        action="SEE DOCUMENTATION" />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="left" title="Feature Number One"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        action="DOWNLOAD NOW" />
      <CardLinkSection aosConfig={{ "data-aos": "fade-up", "data-aos-easing": "linear", "data-aos-duration": "500" }} align="right" title="Feature Number Two"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        action="GO TO THAT PAGE" />
      <NewsletterSignup />
      <TitleSection className="images-grid">
        <div><img src="https://via.placeholder.com/200x80.png" /></div>
        <div><img src="https://via.placeholder.com/100x80.png" /></div>
        <div><img src="https://via.placeholder.com/100x80.png" /></div>
        <div><img src="https://via.placeholder.com/100x80.png" /></div>
        <div><img src="https://via.placeholder.com/100x80.png" /></div>
      </TitleSection>
    </Layout>
  )
};

export default Home;