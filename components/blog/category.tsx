import * as React from "react"

type Props = {
  name: string
}

const BlogCategory: React.FunctionComponent<Props> = ({
  name = ""
}) => {
  return (
    <span className={`blog-category ${name.toLowerCase()}`}>{name}</span>
  )
}


export default BlogCategory