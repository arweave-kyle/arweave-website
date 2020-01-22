import * as React from "react"

type Props = {
  title?: string,
  className?: string
}

const CardLinkSection: React.FunctionComponent<Props> = ({
  title = "",
  className = "",
  children
}) => {
  return (
    <div className={`title-section ${className}`}>
      <div className="title-section__inner">
        <h2>{title}</h2>
        <div className="title-section__content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default CardLinkSection