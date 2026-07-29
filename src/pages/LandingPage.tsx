import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {DynamicIslandNavbar,LikeButton,DropdownMenu,FileDownloadButton} from "@omkarwarik1204/stark";
import '@omkarwarik1204/stark/style.css'
import { Highlight, themes } from "prism-react-renderer";

const showcaseItems = [
  {
    id: 1,
    label: "DynamicIslandNavbar",
    render: () => (
      <DynamicIslandNavbar
        brand="Omkar"
        links={[
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
        ]}
        className="relative  items-center"
      />
    ),
    code: `<DynamicIslandNavbar
  brand="Omkar"
  links={[
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
  ]}
/>`,
  },
  {
    id: 2,
    label: "LikeButton",
    render: () => <LikeButton initialCount={245} initialIsLiked={false} />,
    code: `<LikeButton initialCount={245} initialIsLiked={false} />`,
  },
  {
    id: 3,
    label: "DropdownMenu",
    render: () => (
      <DropdownMenu
        label="Choose an option"
        options={[
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
        ]}
      />
    ),
    code: `<DropdownMenu
  label="Choose an option"
  options={[
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
  ]}
/>`,
  },
  {
    id: 4,
    label: "FileDownloadButton",
    render: () => (
    <FileDownloadButton
    href="demo"
    download="download"

    />
    ),
    code: `<FileDownloadButton
  href="demo"
  download="download"
/>`,
  },
];

export default function Landing() {
    const [copied, setCopied] = useState(false);
    const installCommand = "  npm install @omkarwarik1204/stark";
    
  return (
    <>
      <div className="flex flex-col h-[406px]  px-4 py-4 sm:px-6 lg:px-12 mt-25 ">
        <div className="flex flex-col h-[156px]  mt-25">
          <h1 className="font-extrabold text-[30px]">stark.</h1>
          <small className="flex mt-3 text-[#6B7280] text-[18px]">
            Engineering-grade ui primitives. Zero abstractions, pure logic built
            for <br></br>systems demand precision, performance, and
            deterministic <br></br> behaviour.
          </small>
        </div>
        <div className="flex h-[74px] w-[768px] bg-[#F9FAFB] border border-gray-200 mt-3 justify-between">
            <code className="font-mono text-sm text-gray-800 px-6 py-6">
            ${installCommand}
          </code>
          <CopyToClipboard  text={installCommand}
          onCopy={()=> {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          >
           <button className="font-mono text-xs px-5 py-5 cursor-pointer">
              {copied ? "Copied!" : "Copy"}
            </button>
          </CopyToClipboard>
        </div>
      </div>
   <div className="flex flex-col px-4 py-4 sm:px-6 lg:px-12">
  <div className="flex items-center w-full gap-4 mt-5">
    <h1 className="font-mono font-bold whitespace-nowrap">SHOWCASE_MANIFEST</h1>
    <span className="flex-1 border-b border-gray-200"></span>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-10 py-10 max-w-[1284px] mx-auto mt-5">
    
  {showcaseItems.map(( item) => (
    <div key={item.id} className="border border-gray-200 p-4 w-[592px] h-[451px] ">
      <div className="font-mono text-sm text-gray-500 mb-2">{item.label}</div>
      <div
        className="flex relative overflow-hidden  justify-center items-center border border-dotted border-gray-300 p-4 mb-4 w-full h-[216px] "
        style={{ transform: "translateZ(0)" }}
      >
         {item.render()}
      </div>

      <div className="flex overflow-auto border border-gray-200 p-4 w-full h-[126px] mb-10">
        <Highlight code={item.code} language="jsx" theme={themes.vsLight}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} font-mono text-xs whitespace-pre-wrap`} style={style}>
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
      </div>
    </div>
  ))}
</div>
</div>
<hr className="border border-gray-100 mt-20"></hr>
    </>
  );
}
