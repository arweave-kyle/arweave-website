import { FunctionComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { JSONCodeStyle } from "./JSONCodeStyle";
import { CopySnippet } from "./CopySnippet";

type APIBlockProps = {
  language?: string;
  code?: string;
  method?: "GET" | "POST";
  endpoint?: string;
  responses: APIResponses;
  parameters: APIParameters;
};

interface APIParameters {
  [key: string]: string;
}

interface APIResponseHeaders {
  [key: string]: string;
}
interface APIResponse {
  status: number;
  headers?: APIResponseHeaders;
  body?: any;
}

type APIResponses = APIResponse[];

const statuses: {
  [key: number]: {
    color: string;
    statusText: string;
  };
} = {
  200: {
    color: "#009688",
    statusText: "OK"
  },
  202: {
    color: "#f00",
    statusText: "Accepted"
  },
  208: {
    color: "#f00",
    statusText: "Already Reported"
  },
  400: {
    color: "#e80505",
    statusText: "Bad Request"
  },
  404: {
    color: "#f00",
    statusText: "Not found"
  },
  500: {
    color: "#f00",
    statusText: "Internal Server Error"
  }
};

export const APIBlock: FunctionComponent<APIBlockProps> = ({
  children,
  method,
  endpoint,
  responses,
  parameters
}) => {
  return (
    <div className="api-code-block">
      <div className="api-code-block__endpoint">
        <span className="method">{method}</span>
        <span className="endpoint">{endpoint}</span>
      </div>
      <div className="api-code-block__description">{children}</div>

      {parameters && getParametersSection(parameters)}

      {responses.map(({ status, headers, body }) => {
        return (
          <div className={`api-code-block__response`} key={status}>
            {getResponseStatusSection(status)}
            {headers && getResponseHeadersSection(headers)}
            {body && getResponseBodySection(body)}
          </div>
        );
      })}
    </div>
  );
};

function getParametersSection(parameters: APIParameters): JSX.Element {
  return (
    <div className="api-code-block__parameters">
      <div className="label">Request Parameters</div>
      {Object.keys(parameters).map(parameter => {
        return (
          <p className="parameter" key={parameter}>
            <code className="parameter-name">{parameter}</code>
            <span className="parameter-detail">{parameters[parameter]}</span>
          </p>
        );
      })}
    </div>
  );
}

function getResponseStatusSection(status: number): JSX.Element {
  const { color, statusText } = statuses[status];
  return (
    <div className="response-status">
      <div className="label">RESPONSE</div>
      <div className="content">
        <span className="response-color" style={{ background: color }}></span>
        <span className="response-status-code">{status}</span>
        <span className="response-status-text">{statusText}</span>
      </div>
    </div>
  );
}

function getResponseHeadersSection(headers: APIResponseHeaders): JSX.Element {
  return (
    <div className="response-headers">
      <div className="label">HEADERS</div>
      <div className="content">
        {Object.keys(headers).map(header => {
          const value = headers[header];
          return (
            <div className="header" key={header}>
              {header}: {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getResponseBodySection(body: any): JSX.Element {
  const formattedBody = JSON.stringify(body, null, 2);
  return (
    <div className="response-body">
      <div className="label">BODY</div>
      <div className="content">
        <SyntaxHighlighter
          className="response-prism"
          language="json"
          style={JSONCodeStyle}
          code={formattedBody}
        />
        {/* Only show the snippet copy option when there's more than one line */}
        {formattedBody.match(/\n/) && <CopySnippet data={formattedBody} />}
      </div>
    </div>
  );
}
