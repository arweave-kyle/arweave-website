import { useState } from "react"
import Validator from "validator"

const NewsletterSignup: React.FunctionComponent = ({
}) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  function onChange(evt: React.ChangeEvent<HTMLInputElement>) {
    const target = evt.target;
    setEmail(target.value);

    const emailValidation = Validator.isEmail(email);
    if (emailValidation !== isValidEmail) setIsValidEmail(emailValidation);
  }

  function onFocus(evt: React.FocusEvent<HTMLInputElement>) {
    setValidationMessage("");
  }

  function onSubmit(evt: React.FormEvent) {
    if (evt) evt.preventDefault();

    const emailValidation = Validator.isEmail(email);
    if (!emailValidation) {
      setValidationMessage("! Require a valid email to continue.");
      return;
    }
  }

  return (
    <div className="newsletter-signup">
      <div className="newsletter-signup__inner">
        <div className="newsletter-signup__content">
          <h1>Stay up to date with arweave</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          <form className={validationMessage !== "" ? "error" : ""} onSubmit={onSubmit} noValidate>
            <div className="input-container">
              <input type="email" placeholder="enter email" value={email} onChange={onChange} onFocus={onFocus} />
              {isValidEmail && <img src="/images/icons/check-circle.svg" />}
            </div>
            <button className="primary" type="submit" >Subscribe</button>
            {validationMessage !== "" && <p className="error">{validationMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewsletterSignup