import { SIDEBAR_LINKS } from '@/constants';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      {SIDEBAR_LINKS.map((link) => {
        const LinkIcon = link.icon;

        return <Link href={link.route}>{link.label}</Link>;
      })}
    </nav>
  );
};

export default Sidebar;
