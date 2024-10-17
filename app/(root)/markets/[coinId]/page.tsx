import { getSingleCoin } from '@/actions/markets';

const SingleCoinPage = async () => {
  const coin = await getSingleCoin();

  return (
    <main className="flex flex-col p-4 mt-12 ml-[70px] md:ml-[250px]">
      Page
    </main>
  );
};

export default SingleCoinPage;
