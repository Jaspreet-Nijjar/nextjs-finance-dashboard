import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      {SIDEBAR_LINKS.map((link) => {
        const LinkIcon = link.icon;

        return (
          <ul>
            <Link key={link.label} href={link.route}>
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
