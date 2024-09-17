import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="bg-black h-screen w-[20%] px-8 py-12 text-white flex flex-col text-lg gap-12">
      {SIDEBAR_LINKS.map((link) => {
        const LinkIcon = link.icon;

        return (
          <ul>
            <Link
              key={link.label}
              href={link.route}
              className="flex gap-4 items-center hover:text-orange-500 transition-all"
            >
              <LinkIcon />
              {link.label}
            </Link>
          </ul>
        );
      })}
    </nav>
  );
};

export default Sidebar;
