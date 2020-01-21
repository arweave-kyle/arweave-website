import * as React from "react"

type Props = {
  title?: string
}

const CardLinkSection: React.FunctionComponent<Props> = ({
  title = "",
  children
}) => {
  return (
    <div className="title-section">
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