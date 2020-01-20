import * as React from "react"
import { NextComponentType } from "next"
import Layout from "../UI/Layout"

type Props = {
  meta: object
}

export default function WithLayout<P extends Props>(WrappedComponent: NextComponentType<P>): React.ComponentType<P> {
  function WithLayoutWrapper(props: any) {
    const { children, meta } = props;
    const { title, desc } = meta || {};
    return (
      <Layout title={title || ""} desc={desc || ""}>
        <div className="md-content">
          {children}
        </div>
      </Layout>
    )
  }

  return WithLayoutWrapper
};