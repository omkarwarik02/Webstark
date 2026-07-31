import { Highlight, themes } from "prism-react-renderer";

export default function CodeBlock({ code }: { code: string }) {
  return (
    <Highlight code={code} language="jsx" theme={themes.vsLight}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} font-mono text-xs whitespace-pre-wrap p-4 bg-gray-50 border border-gray-200 rounded`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}