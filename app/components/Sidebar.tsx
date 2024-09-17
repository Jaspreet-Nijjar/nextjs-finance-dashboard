import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="sidebar">
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
