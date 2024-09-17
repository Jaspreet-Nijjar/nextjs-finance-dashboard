import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="bg-black h-screen w-[20%] p-8 text-white flex flex-col text-xl gap-6">
      {SIDEBAR_LINKS.map((link) => {
        const LinkIcon = link.icon;

        return (
          <ul>
            <Link
              key={link.label}
              href={link.route}
              className="flex gap-4 items-center mt-8"
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
