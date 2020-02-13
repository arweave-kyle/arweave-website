import * as React from "react"
import Cookies from "js-cookie"
import Link from "next/link"

function renderDefault(onApprove: () => void, onDeny: () => void) {
  return (
    <div className="cookies-banner__inner">
      <div className="cookies-banner__content">
        <h3>Cookie helps us improve your experience.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div>
          <Link href="/cookies-policy">
            <a>More about our cookies policy</a>
          </Link>
        </div>
      </div>
      <div className="cookies-banner__actions">
        <button className="primary" onClick={onApprove}>ACCEPT</button>
        <button className="secondary" onClick={onDeny}>NO COOKIES</button>
      </div>
    </div>
  )
}

const CookiesBanner: React.FunctionComponent = () => {
  const [shouldRender, setShouldRender] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const doesAllowCookiesUsage = Cookies.get("does_allow_cookies_usage")
    if (!doesAllowCookiesUsage) onOpen()
    else setShouldRender(false)
  }, []);

  function onOpen() {
    setIsOpen(true)
  }

  function onClose() {
    setIsOpen(false)
  }

  function onApprove() {
    Cookies.set('does_allow_cookies_usage', "true")
    onClose()
  }

  function onDeny() {
    Cookies.set('does_allow_cookies_usage', "false")
    onClose()
  }

  // user's already responsed, no need to show again
  if (!shouldRender) return null

  return (
    <div className={`cookies-banner ${!isOpen ? "closed" : ""}`}>
      {renderDefault(onApprove, onDeny)}
    </div>
  )
}

export default CookiesBanner