import React from "react"
import { NextPage } from 'next'
import moment from "moment"
import Layout from '../../components/ui/Layout'

function importAll(r: any) {
  return r.keys().map(r);
}
const previewItems = importAll(require.context("../../blog", false, /-preview\.mdx$/));

function dateSortDesc(a: any, b: any) {
  const date1 = moment(a.meta.date);
  const date2 = moment(b.meta.date);
  if (date1 > date2) return -1;
  if (date1 < date2) return 1;
  return 0;
}

const Home: NextPage = () => {
  const blogPreviews = previewItems.sort(dateSortDesc).map((props: any) => {
    const { default: Component, meta } = props;
    const { titleEn } = meta;
    return <Component key={titleEn} />;
  });
  return (
    <Layout className="blog">
      <div className="blog__header-bg" />
      <div className="blog__header">
        <h2>Blog index</h2>
      </div>
      <div className="blog__post-grid">
        {blogPreviews}
      </div>
    </Layout>
  )
};

export default Home;