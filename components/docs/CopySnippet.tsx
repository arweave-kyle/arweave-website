import { FunctionComponent, useState } from "react";

type CopySnippetProps = {
  data: string;
};

export const CopySnippet: FunctionComponent<CopySnippetProps> = ({ data }) => {
  const [label, setLabel] = useState("Copy");

  const copy = () => {
    const input = document.createElement("textarea");
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.value = data;
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setLabel("Copied!");
  };

  const reset = () => {
    setLabel("Copy");
  };

  return (
    <a className="docs-copy-snippet" onClick={copy} onTransitionEnd={reset}>
      <span className="docs-copy-snippet__label">{label}</span>
      <span className="docs-copy-snippet__icon">
        <span className="docs-copy-snippet__rect-1"></span>
        <span className="docs-copy-snippet__rect-2"></span>
      </span>
    </a>
  );
};
