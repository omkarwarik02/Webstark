// components/Sidebar.tsx
import { NavLink } from "react-router-dom";

interface SidebarLink {
  label: string;
  to: string;
}

interface SidebarProps {
  links: SidebarLink[];
}

export default function Sidebar({ links }: SidebarProps) {
  return (
    <div className="w-[256px]  h-[704px] top-[90px] border border-gray-200 left-0 fixed p-4 flex flex-col gap-y-3 bg-white">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `font-mono text-sm cursor-pointer hover:text-blue-600 ${
              isActive ? "text-blue-600 font-semibold" : ""
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}