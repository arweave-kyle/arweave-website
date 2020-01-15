import { NextPage } from 'next';

const Error: NextPage<{ statusCode: number }> = ({ statusCode }) => {
  return (
    <p>
      {`An error ${statusCode} occurred`}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const errorCode = err ? err.statusCode || 500 : 404;
  const statusCode = res ? res.statusCode || 500 : errorCode;
  return { statusCode }
}

export default Error