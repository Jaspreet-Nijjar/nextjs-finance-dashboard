'use client';

import { Button } from '@/components/ui/button';
import { MdError } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen ml-[80px] md:ml-[550px]">
      <h1 className="text-8xl font-extrabold">404</h1>
      <h3 className="text-3xl mt-8 text-gray-600">Page Not Found</h3>
      <p className="text-[14px] text-gray-600 px-2 mt-2 mb-4">
        Sorry, we can't seem to find this page. The page may not exist or an
        error has occurred.
      </p>

      <MdError size={150} className="text-red-500 mx-auto mb-6" />

      <Button className="bg-gray-200" variant="secondary" onClick={handleClick}>
        Back To Dashboard
      </Button>
    </main>
  );
}
