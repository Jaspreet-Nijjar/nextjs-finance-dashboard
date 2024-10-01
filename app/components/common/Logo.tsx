import Link from 'next/link';
import { AiOutlineStock } from 'react-icons/ai';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-6 mt-8">
      <AiOutlineStock size={60} className="bg-orange-500 rounded-full p-2" />
      <div>
        <h1 className="mt-4 text-3xl text-center">
          Quick<span className="text-orange-500">Track</span>
        </h1>
        <p className="text-gray-400 text-sm text-center">Finance Manager</p>
      </div>
    </Link>
  );
};

export default Logo;
