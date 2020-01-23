import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Controlled as CodeMirror } from 'react-codemirror2'
import Layout from '../components/UI/Layout'

const codePlaceholder = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello Arweave</title>
</head>
<body>
    <h1>Hello world!</h1>
</body>
</html>
`
const Playground: NextPage = () => {
  const [isReady, setIsReady] = useState(false)
  const [code, setCode] = useState(codePlaceholder)

  useEffect(() => {
    setIsReady(true);
  }, [])

  // use stub to load extra libs, to ensure they are only loaded on client side
  const CodeEditor = () => {
    if (typeof window !== 'undefined') {
      require('codemirror/lib/codemirror.css')
      require('codemirror/theme/material.css')
      require('codemirror/mode/htmlmixed/htmlmixed.js')
    }

    return null
  }

  return (
    <Layout className="code-playground">
      <div className="code-playground__inner">
        <h1>code playground</h1>
        {isReady && <CodeEditor />}
        {isReady && <CodeMirror
          value={code}
          options={{
            mode: 'htmlmixed',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
          onChange={(editor, data, value) => {
          }}
        />}
      </div>
    </Layout>
  )
};

export default Playground;