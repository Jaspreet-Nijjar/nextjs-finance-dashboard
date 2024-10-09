'use client';

import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="sidebar p-4">
      <Logo />

      <ul className="space-y-2 py-8">
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
                  <span className="text-[15px] hidden md:block">
                    {link.label}
                  </span>
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
