import React from "react"
import { NextComponentType } from "next"
import moment from "moment"

type Props = {
  meta: object
}

export default function WithBlogPreview<P extends Props>(WrappedComponent: NextComponentType<P>): React.ComponentType<P> {
  function WithBlogPreviewWrapper(props: any) {
    const { meta } = props;
    const { title, category, date, link } = meta || {};
    const dateFormat = moment(date).format("DD MMM YYYY")
    return (
      <div className="blog-preview">
        <a href={link}>
          <h1>{title}</h1>
        </a>
        <div className="blog-preview__info">
          <span>{`Published on ${dateFormat}`}</span>
          <span className={category}>{category}</span>
        </div>
      </div>
    )
  }

  return WithBlogPreviewWrapper
};