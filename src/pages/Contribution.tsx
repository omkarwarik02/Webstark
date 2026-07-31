import Sidebar from "../components/sidebar";

const contributionLinks = [
   { label: "Home", to: "/" },
  { label: "Getting Started", to: "/docs" },
  {label:"Contribution", to:"/contribution"},
  {label:"Components", to:"/component-list"}
]



export default function Contribution(){



    return (
        <>
        <div className="flex flex-col min-h-screen px-4 py-4 sm:px-6 lg:px-12 ">
            <Sidebar links={contributionLinks} />

            <div className="pl-[256px] pt-[90px]">
              <section id="contributing" className="mb-10">
                <h2 className="font-extrabold text-[48px] mb-2 mt-10">
                  Contributing to Stark
                </h2>
                <p className="text-gray-600 mb-4">
                  Thanks for your interest in contributing to Stark! This
                  guide covers everything you need to get started.
                </p>
              </section>

              <section id="prerequisites" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Prerequisites
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Node.js (LTS recommended)</li>
                  <li>npm</li>
                  <li>
                    React 19+ (peer dependency — the playground app already
                    has this set up)
                  </li>
                </ul>
              </section>

              <section id="setup" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">Setup</h2>
                <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                  <li>
                    Fork and clone the repo:
                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono mt-2">{`git clone https://github.com/omkarwarik02/stark.git
cd stark`}</pre>
                  </li>
                  <li>
                    Install dependencies:
                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono mt-2">
                      npm install
                    </pre>
                  </li>
                  <li>
                    Start the dev playground to preview components:
                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono mt-2">
                      npm run dev
                    </pre>
                  </li>
                </ol>
              </section>

              <section id="project-structure" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Project structure
                </h2>
                <p className="text-gray-600 mb-4">
                  Each component lives in its own folder under{" "}
                  <code className="bg-gray-100 px-1 rounded">src/</code>:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-sm font-mono">{`src/
  DropdownMenu/
    DropdownMenu.tsx
  DynamicIslandNavbar/
    DynamicIslandNavbar.tsx
  FAQAccordion/
    FAQAccordion.tsx
  FileDownloadButton/
    FileDownloadButton.tsx
  index.ts # exports all public components
  style.css`}</pre>
                <p className="text-gray-600 mt-4">
                  If you're adding a new component, follow this same pattern:
                  create a new folder under{" "}
                  <code className="bg-gray-100 px-1 rounded">src/</code>, and
                  export it from{" "}
                  <code className="bg-gray-100 px-1 rounded">
                    src/index.ts
                  </code>
                  .
                </p>
              </section>

              <section id="before-submitting" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Before submitting a change
                </h2>
                <p className="text-gray-600 mb-4">
                  Run these to make sure everything's clean:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-sm font-mono">{`npm run lint
npm run build`}</pre>
                <ul className="list-disc pl-5 text-gray-600 mt-4">
                  <li>
                    <code className="bg-gray-100 px-1 rounded">lint</code>{" "}
                    runs ESLint across the project — fix any errors it
                    reports.
                  </li>
                  <li>
                    <code className="bg-gray-100 px-1 rounded">build</code>{" "}
                    runs{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      tsc -b && vite build
                    </code>{" "}
                    — this must succeed without type errors, since it's what
                    gets published to npm.
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">
                  There's currently no automated test suite — if you're
                  adding one, feel free to propose it in an issue first.
                </p>
              </section>

              <section id="submitting-pr" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Submitting a pull request
                </h2>
                <ol className="list-decimal pl-5 text-gray-600 space-y-4">
                  <li>
                    Create a branch off{" "}
                    <code className="bg-gray-100 px-1 rounded">main</code>:
                    <pre className="bg-gray-100 p-3 rounded text-sm font-mono mt-2">
                      git checkout -b feature/your-component-name
                    </pre>
                  </li>
                  <li>
                    Make your changes, following the existing code style
                    (Tailwind for styling, TypeScript throughout).
                  </li>
                  <li>
                    Run{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      npm run lint
                    </code>{" "}
                    and{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      npm run build
                    </code>{" "}
                    to confirm everything passes.
                  </li>
                  <li>Commit with a clear message describing the change.</li>
                  <li>
                    Push your branch and open a PR against{" "}
                    <code className="bg-gray-100 px-1 rounded">main</code>.
                  </li>
                  <li>
                    In the PR description, explain what the component/fix
                    does and include a screenshot or short clip if it's a UI
                    change.
                  </li>
                </ol>
              </section>

              <section id="proposing-component" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Proposing a new component
                </h2>
                <p className="text-gray-600 mb-4">
                  Open an issue first describing the component, its use case,
                  and rough API (props) before submitting a PR — this avoids
                  wasted work if the direction needs discussion.
                </p>
              </section>

              <section id="style-guidelines" className="mb-10">
                <h2 className="text-xl font-semibold mb-2 mt-10">
                  Style guidelines
                </h2>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Use Tailwind utility classes for styling (see existing
                    components for patterns)
                  </li>
                  <li>
                    Keep components accessible (proper ARIA attributes,
                    keyboard navigation where relevant)
                  </li>
                  <li>
                    Export types alongside components so consumers get full
                    TypeScript support
                  </li>
                </ul>
              </section>
            </div>
        </div>
        </>
    )

    
}