import * as React from "react"
import Link from "next/link"

const Footer: React.FunctionComponent = () => (
  <footer>
    <hr />
    <div className="footer__inner">
      <Link href="/">
        <a className="brand"><h1>arweave.org</h1></a>
      </Link>
      <div className="links">
        <Link href="/mine/about">
          <a>about us</a>
        </Link>
        <Link href="/">
          <a>terms</a>
        </Link>
        <Link href="/">
          <a>privacy</a>
        </Link>
        <Link href="/">
          <a>policies</a>
        </Link>
        <Link href="/">
          <a>sitemap</a>
        </Link>
      </div>
      <div className="social-links">
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
        <Link href="/">
          <a><img src="/images/socials/medium.svg" /></a>
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer;