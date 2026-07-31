import { componentDocs, type ComponentDoc } from "../data/components";
import CodeBlock from "./CodeBlock";
import Sidebar from "../components/sidebar";



const compLinks = [
  { label: "Home", to: "/" },
  { label: "Getting Started", to: "/docs" },
  {label:"Contribution", to:"/contribution"},
  {label:"Components", to:"/component-list"},
...componentDocs.map((d) => ({label:d.name, to:`/components/${d.slug}`})),
];



export default function ComponentDocPage({ doc }: { doc:ComponentDoc}) {
    return (
        <div className="flex min-h-screen pt-[90px]">
        <Sidebar links={compLinks} />
        <div className="flex-1 min-w-0 px-4 py-10 sm:px-6 lg:px-12 max-w-4xl mx-auto mt-10">
       
            <h1 className="font-extrabold text-3xl">{doc.name}</h1>
            <p className="text-gray-500 mt-2">{doc.description}</p>

            <h2 className="font-mono font-bold mt-8 mb-2">PREVIEW</h2>
            <div className="border border-dotted border-gray-300 p-6 flex items-center justify-center">{doc.preview()}
            </div>

            <h2 className="font-mono font-bold mt-8 mb-2">IMPORT</h2>
            <CodeBlock code={doc.importCode} />

            <h2 className="font-mono font-bold mt-8 mb-2">USAGE</h2>
            <CodeBlock code={doc.usageCode} />

             <h2 className="font-mono font-bold mt-8 mb-2">PROPS</h2>
             <table className="w-full text-sm border border-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left p-2 border-b border-gray-200">Name</th>
            <th className="text-left p-2 border-b border-gray-200">Type</th>
            <th className="text-left p-2 border-b border-gray-200">Required</th>
            <th className="text-left p-2 border-b border-gray-200">Description</th>
                    </tr>
                </thead>
                <tbody>
                    {doc.props.map((p)=>(
                        <tr key={p.name}>
                            <td className="p-2 border-b border-gray-200 font-mono">{p.name}</td>
                             <td className="p-2 border-b border-gray-200 font-mono text-gray-500">{p.type}</td>
                            <td className="p-2 border-b border-gray-200">{p.required ? "Yes" : "No" }</td>
                            <td className="p-2 border-b border-gray-200">{p.description}</td>
                        </tr>
                        
                    ))}
                </tbody>
             </table>
        </div>
        </div>
    )
}