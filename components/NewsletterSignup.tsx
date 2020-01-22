import * as React from "react"

const NewsletterSignup: React.FunctionComponent = ({
}) => {
  function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    // TODO
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-signup__inner">
        <h1>Stay up to date with arweave</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
        <form onSubmit={onSubmit}>
          <input type="email" placeholder="enter your email" />
          <button className="primary" type="submit" >Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterSignup