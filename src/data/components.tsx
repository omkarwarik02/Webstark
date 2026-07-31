import type { ReactNode } from "react";
import { LikeButton, DropdownMenu, DynamicIslandNavbar,FAQAccordion, FileDownloadButton } from "@omkarwarik1204/stark";

export interface PropDef {
    name:string;
    type:string;
    required?:boolean;
    description:string;
}

export interface ComponentDoc {
    slug: string;
    name:string;
    description:string;
    importCode:string;
    usageCode:string;
    props:PropDef[];
    preview:() => ReactNode;
}

export const componentDocs: ComponentDoc[] = [
  {
    slug:"file-download-button",
    name:"FileDownloadButton",
    description:"A minimal button component for file downloads with customizable labels and styling.",
    importCode:`import { FileDownloadButton } from "@omkarwarik1204/stark";`,
    usageCode:`<FileDownloadButton
  href="/sample_text.pdf"
  download="sample_text.pdf"
  label="Download PDF"
/>

// Example with custom styling
<FileDownloadButton
  href="/document.pdf"
  download="my_document.pdf"
  label="Get Document"
  className="bg-blue-600 hover:bg-blue-700"
/>`,
    props:[
      { name: "href", type: "string", required: true, description: "Path or URL to the file being downloaded." },
      { name: "download", type: "string", required: true, description: "Filename that will be used when downloading." },
      { name: "label", type: "string", description: 'Text displayed on the button. Default: "Download File".' },
      { name: "className", type: "string", description: 'Extra classes for custom styling. Default: "".' },
    ],
    preview: () => (
      <FileDownloadButton
        href="/sample_text.pdf"
        download="sample_text.pdf"
        label="Download PDF"
      />
    ),
},
  {
    slug:"faqaccordion",
    name:"FAQAccordion",
    description:"An accordion where one item is open at a time, with a smooth height animation and full keyboard/screen-reader accessibility (aria-expanded, aria-controls).",
    importCode:`import {  FAQAccordion } from "@omkarwarik1204/stark";`,
    usageCode:`<FAQAccordion
  items={[
    { question: "Do you ship internationally?", answer: "Yes, worldwide." },
    { question: "What is your return policy?", answer: "30-day returns." },
  ]}
/>`,
    props:[
     { name: "items", type: " question: string; answer: React.ReactNode }[]",required:true, description: "The list of question/answer pairs." },
      { name: "className", type: "string", required: true, description: "Extra classes merged onto the container." },
    
    ],
    preview: () => <FAQAccordion
  items={[
    { question: "Do you ship internationally?", answer: "Yes, worldwide." },
    { question: "What is your return policy?", answer: "30-day returns." },
  ]}
/>,
},
  {
    slug:"dynamicisland-navbar",
    name:"DynamicIslandNavbar",
    description:"A floating, Apple-style navbar that stretches smoothly on hover.",
    importCode:`import {DynamicIslandNavbar} from "@omkarwarik1204/stark";`,
    usageCode:`<DynamicIslandNavbar
  brand="Omkar"
  links={[
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
  ]}
  ctaHref="https://github.com/omkarwarik02"
/>`,
    props:[
      { name: "brand", type: "string", description: 'Text shown on the left of the pill (your name/logo). Default: "Brand".' },
      { name: "links", type: "{ label: string; href: string }[]", description: "The center navigation links. Default: 4 sample links." },
      { name: "ctaHref", type: "string", description: 'URL for the right-side action item. Default: "#".' },
      { name: "ctaLabel", type: "React.ReactNode", description: 'Content shown on the right (text, icon, etc.). Default: "→".' },
      { name: "className", type: "string", description: 'Extra classes merged onto the pill — use this to override background, text color, or any other style. Default: "".' },
    ],
    preview: () => (
      <div className="relative w-full h-24 overflow-hidden" style={{ transform: "translateZ(0)" }}>
        <DynamicIslandNavbar
          brand="Omkar"
          links={[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#projects" },
          ]}
          ctaHref="https://github.com/omkarwarik02"
        />
      </div>
    ),
},
{
    slug:"like-button",
    name:"LikeButton",
    description:"An animated like button with a filled/outline heart icon and live count tracking — fully controlled via props, so you decide the initial state (e.g. from your backend).",
    importCode:`import { LikeButton } from "@omkarwarik1204/stark";`,
    usageCode:`<LikeButton initialCount={245} initialIsLiked={false} />`,
    props:[
     { name: "initialCount", type: "number", required: true, description: "Starting like count." },
      { name: "initialIsLiked", type: "boolean", required: true, description: "Initial liked state." },
    
    ],
    preview: () => <LikeButton initialCount={245} initialIsLiked={false} />,
},
{
    slug: "dropdown-menu",
    name: "DropdownMenu",
    description: "A customizable dropdown with keyboard support, click-outside detection, and smooth animations.",
    importCode: `import { DropdownMenu } from "@omkarwarik1204/stark";`,
    usageCode: `<DropdownMenu label="Choose" options={[{ value: "a", label: "Option A" }]} />`,
    props: [
      { name: "label", type: "string", required: true, description: "Label shown above the dropdown." },
      { name: "options", type: "{ value, label }[]", description: "List of selectable options." },
      { name: "handleChange", type: "(value) => void", description: "Callback on selection change." },
    ],
    preview: () => (
      <DropdownMenu label="Choose" options={[{ value: "a", label: "Option A" }]} />
    ),
  },
    
]

