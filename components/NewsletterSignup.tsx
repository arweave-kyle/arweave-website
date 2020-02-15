import { createRef, useState } from "react"
import Validator from "validator"
import ReactTooltip from "react-tooltip"

const NewsletterSignup: React.FunctionComponent = ({
}) => {
  const [email, setEmail] = useState("");
  const [validationMessage, setValidationMessage] = useState("");
  const emailInputRef = createRef<HTMLInputElement>();

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setEmail(target.value);
  }

  function onFocus(evt: React.FocusEvent<HTMLInputElement>) {
    ReactTooltip.hide(emailInputRef.current!);
  }

  function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    const emailValidation = Validator.isEmail(email);
    if (!emailValidation) {
      setValidationMessage("Require a valid email to continue.");
      ReactTooltip.show(emailInputRef.current!);
      return;
    }
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-signup__inner">
        <div className="newsletter-signup__content">
          <h1>Stay up to date with arweave</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          <form onSubmit={onSubmit} noValidate>
            <input type="email" ref={emailInputRef} data-tip placeholder="enter email" value={email} onChange={onChange} onFocus={onFocus} />
            <ReactTooltip place="bottom" type="error" effect="solid" event="no-event">
              <span>{validationMessage}</span>
            </ReactTooltip>
            <button className="primary" type="submit" >Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup