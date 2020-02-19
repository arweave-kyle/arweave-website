import * as React from "react"

type Props = {
  category: string,
  publishedDate: string
}

const BlogInfoBar: React.FunctionComponent<Props> = ({
  category = "",
  publishedDate = ""
}) => {
  return (
    <div className="blog-info-bar">
      <span className="date">{`Published on ${publishedDate}`}</span>
      <span className={`category ${category.toLowerCase()}`}>{category}</span>
    </div>
  )
}


export default BlogInfoBar