import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { componentDocs } from "../data/components";

const componentsListLinks = [
  { label: "Home", to: "/" },
  { label: "Getting Started", to: "/docs" },
  { label: "Contribution", to: "/contribution" },
  { label: "Components", to: "/component-list" },
];

export default function ComponentsList() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-4 sm:px-6 lg:px-12">
      <Sidebar links={componentsListLinks} />

      <div className="pl-[256px] pt-[90px]">
        <section className="mb-10">
          <h2 className="font-extrabold text-[48px] mb-2 mt-10">
            Components
          </h2>
          <p className="text-gray-600 mb-4">
            All components available in the stark library.
          </p>
        </section>

        <ul className="divide-y divide-gray-200 border border-gray-200">
          {componentDocs.map((doc) => (
            <li key={doc.slug}>
              <Link
                to={`/components/${doc.slug}`}
                className="flex flex-col p-4 hover:bg-gray-50"
              >
                <span className="font-mono font-semibold">{doc.name}</span>
                <span className="text-gray-500 text-sm">
                  {doc.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
