import * as React from "react"

const Footer: React.FunctionComponent = () => (
  <footer>
    <div className="footer__inner">
      <div className="footer__content">
        <div className="footer__section space">
          <a href="/"><img src="/footer-logo.svg" /></a>
          <div className="links">
            <a href="/mine/about">the permaweb</a>
            <a>our technology</a>
            <a>team</a>
            <a>faqs</a>
            <a>report a link</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>get started</h4>
          <div className="links space_more">
            <a>get free token</a>
            <a>start archiving</a>
            <a>start mining</a>
            <a>arweave js</a>
            <a>arweave deploy</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>documentation</h4>
          <div className="links space_more">
            <a>get free token</a>
            <a>start archiving</a>
            <a>start mining</a>
            <a>arweave js</a>
          </div>
        </div>
        <div className="footer__section space">
          <h4>community</h4>
          <div className="links">
            <a href="https://github.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>github</span>
              </div>
            </a>
            <a href="https://twitter.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>twitter</span>
              </div>
            </a>
            <a href="https://discord.com">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>discord</span>
              </div>
            </a>
            <a href="https://telegram.org">
              <div>
                <img src="/images/socials/medium.svg" />
                <span>telegram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__content__mobile">
        <hr />
        <p>© Copyrights 2020 Minimum Spanning Technologies Limited</p>
      </div>
    </div>
  </footer>
)

export default Footer;