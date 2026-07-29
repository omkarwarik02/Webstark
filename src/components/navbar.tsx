import { Link } from "react-router-dom";


export default function Navbar () {





    return (
        <nav className="h-[90px] w-full border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-12 flex items-center justify-between fixed top-0 left-0 bg-white z-50">
            <div className="font-extrabold text-[30px]">
                stark.
            </div>
            <div className="flex items-center gap-x-8">
                <a>
                   <small className="font-mono cursor-pointer">components</small> 
                </a>
               <Link to="/docs"><small className="font-mono cursor-pointer">docs</small></Link>
                <a
                href="https://github.com/omkarwarik02/stark"
                >
                   <small className="font-mono cursor-pointer">github</small> 
                </a>
                <button className=" flex items-center h-[44px] bg-[#0058BC] text-amber-50 px-10 py-5 cursor-pointer">get started</button>
            </div>
        </nav>
    )
}