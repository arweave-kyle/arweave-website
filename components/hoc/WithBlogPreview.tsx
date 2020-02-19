import React from "react"
import { NextComponentType } from "next"
import moment from "moment"

type Props = {
  meta: object
}

export default function WithBlogPreview<P extends Props>(WrappedComponent: NextComponentType<P>): React.ComponentType<P> {
  function WithBlogPreviewWrapper(props: any) {
    const { children, meta } = props;
    const { title, category, date, link } = meta || {};
    const dateFormat = moment(date).format("DD MMM YYYY")
    return (
      <div className={`blog-preview ${category}`}>
        <a href={link}>
          {title}
        </a>
        <div className="blog-preview__info">
          <span>{`Published on ${dateFormat}`}</span>
          <span className="category">{category}</span>
        </div>
        {children}
      </div>
    )
  }

  return WithBlogPreviewWrapper
};