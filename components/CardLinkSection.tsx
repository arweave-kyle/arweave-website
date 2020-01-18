import * as React from "react"
import Link from "next/link"

type Props = {
  align?: string,
  title: string,
  desc: string,
  action?: string,
  url?: string
}

const CardLinkSection: React.FunctionComponent<Props> = ({
  align = "center",
  title = "",
  desc = "",
  action = "see document",
  url = "#"
}) => {
  const formatDesc = desc.split('  ').map((item, i) => {
    return <p key={i}>{item}</p>
  });
  return (
    <div className="card-link-section">
      <div className={`card-link-section__inner ${align}`}>
        <div className={`card-link-section__content ${align}`}>
          <h1>{title}</h1>
          {formatDesc}
          <Link href={url}>
            <a className="btn">{action}</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CardLinkSection