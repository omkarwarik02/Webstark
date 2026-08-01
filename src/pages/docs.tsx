import Sidebar from "../components/sidebar";


const docsLinks = [
  { label: "Home", to: "/" },
  { label: "Getting Started", to: "/docs" },
  {label:"Contribution", to:"/contribution"},
  {label:"Components", to:"/component-list"}
];



export default function Docs() {
  return (
    <>
      <div className="flex min-h-screen pt-[90px]">
         <Sidebar links={docsLinks} />

        <div className="flex-1 min-w-0 px-4 py-4 sm:px-6 lg:px-12">
          <section id="introduction" className="mb-10">
            <h2 className="font-extrabold text-[48px] mb-2 mt-10">
              Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              stark is a minimalist React component library built for clean UIs
              and zero bundle bloat. It provides production-ready, accessible UI
              primitives — no unnecessary runtime dependencies, no heavy CSS,
              and no configuration headaches. Every component is written in
              TypeScript and ships pre-styled, so you can drop it into your
              project and start building right away.
            </p>
          </section>
          <section id="prerequisites" className="mb-10">
            <h2 className="text-xl font-semibold mb-2 mt-10 ">Prerequisites</h2>
            <p className="text-gray-600 mb-4">
              Stark is compatible with React 19 and above. It uses Tailwind CSS
              classes internally, but components ship pre-styled — so you don't
              need Tailwind installed in your own project.
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Node.js 18+</li>
              <li>React 19+</li>
            </ul>
          </section>

          <section id="installation" className="mb-10">
            <h2 className="text-xl font-semibold mb-2 mt-10 ">Installation</h2>
            <p className="text-gray-600 mb-4">
              {" "}
              Run the following command in your project's root directory to
              install stark. This adds the package as a dependency in your
              package.json and downloads the components into node_modules.
            </p>
            <pre className="bg-gray-100 p-3 rounded text-sm font-mono w-100">
              npm install @omkarwarik1204/stark
            </pre>
          </section>

          <section id="styles" className="mb-10">
            <h2 className="text-xl font-semibold mb-2 mt-10">
              Importing styles
            </h2>
            <p className="text-gray-600 mb-4">
              Component styles live in a seperate css file. Import this file
              once at your app's entry point (such as{" "}
              <code className="bg-gray-100 px-1 rounded">main.tsx</code> or{" "}
              <code className="bg-gray-100 px-1 rounded">App.tsx</code>). This
              makes the styles available across your entire app — there's no
              need to re-import them in every component file.
            </p>
          </section>
          <section id="usage" className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Usage</h2>
            <p className="text-gray-600 mb-4">
              Once the styles are imported, you can import any component
              directly and start using it. Below is a basic example using{" "}
              <code className="bg-gray-100 px-1 rounded">LikeButton</code>.
            </p>
            <pre className="bg-gray-100 p-3 rounded text-sm font-mono">{`import { LikeButton } from "@omkarwarik1204/stark";
import "@omkarwarik1204/stark/style.css";

function App() {
  return <LikeButton />;
}`}</pre>
          </section>

          <section id="props" className="mb-10">
            <h2 className="text-xl font-semibold mb-2">Props</h2>
            <p className="text-gray-600 mb-4">
              The table below lists the available props for this component,
              their expected types, default values, and a short description of
              what each one controls.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-3 border-b border-gray-200 font-mono">
                      Prop
                    </th>
                    <th className="p-3 border-b border-gray-200 font-mono">
                      Type
                    </th>
                    <th className="p-3 border-b border-gray-200 font-mono">
                      Default
                    </th>
                    <th className="p-3 border-b border-gray-200">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      liked
                    </td>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      boolean
                    </td>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      false
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Controls the initial liked state of the button.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      onLikeChange
                    </td>
                    <td className="p-3 border-b border-gray-200 font-mono">{`(liked: boolean) => void`}</td>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      —
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Callback fired whenever the liked state changes.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      size
                    </td>
                    <td className="p-3 border-b border-gray-200 font-mono">{`"sm" | "md" | "lg"`}</td>
                    <td className="p-3 border-b border-gray-200 font-mono">
                      "md"
                    </td>
                    <td className="p-3 border-b border-gray-200">
                      Sets the size of the button.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono">className</td>
                    <td className="p-3 font-mono">string</td>
                    <td className="p-3 font-mono">—</td>
                    <td className="p-3">
                      Adds custom Tailwind classes to override default styling.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
