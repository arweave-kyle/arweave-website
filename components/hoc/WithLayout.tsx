import * as React from "react"
import { NextComponentType } from "next"
import Layout from "../ui/Layout"

type Props = {
  meta: object
}

export default function WithLayout<P extends Props>(WrappedComponent: NextComponentType<P>): React.ComponentType<P> {
  function WithLayoutWrapper(props: any) {
    const { children, meta } = props;
    const { title, desc } = meta || {};
    return (
      <Layout title={title || ""} desc={desc || ""}>
        {children}
      </Layout>
    )
  }

  return WithLayoutWrapper
};