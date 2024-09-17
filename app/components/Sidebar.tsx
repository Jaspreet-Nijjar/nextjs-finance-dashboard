import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="sidebar p-4">
      <ul className="space-y-4 py-8">
        {SIDEBAR_LINKS.map((link) => {
          const LinkIcon = link.icon;

          return (
            <li key={link.label} className="w-full">
              <Link
                href={link.route}
                className="flex justify-between items-center hover:text-black hover:font-bold hover:bg-sidebarHoverBG hover:rounded-md  transition-all w-full"
              >
                <div className="flex items-center space-x-2 p-4">
                  <LinkIcon />
                  <span>{link.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
