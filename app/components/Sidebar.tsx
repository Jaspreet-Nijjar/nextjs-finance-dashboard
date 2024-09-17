'use client';

import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';
import { AiOutlineStock } from 'react-icons/ai';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="sidebar p-4">
      <Link href="/" className="flex items-center gap-6">
        <AiOutlineStock size={60} className="bg-orange-500 rounded-full p-2" />
        <div>
          <h1 className="mt-4">
            Quick<span className="text-orange-500">Track</span>
          </h1>
          <p className="text-gray-400 text-sm text-center">Finance Manager</p>
        </div>
      </Link>

      <ul className="space-y-4 py-8">
        {SIDEBAR_LINKS.map((link) => {
          const LinkIcon = link.icon;

          return (
            <li key={link.label} className="w-full">
              <Link
                href={link.route}
                className="flex justify-between items-center hover:text-orange-500  transition-all w-full"
              >
                <div
                  className={`flex items-center space-x-2 p-3 ${
                    pathname === link.route
                      ? 'border-l text-orange-500 border-orange-500'
                      : ''
                  } `}
                >
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
