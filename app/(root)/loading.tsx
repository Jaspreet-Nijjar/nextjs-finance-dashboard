import Loader from '../components/common/Loader';

const loading = () => {
  return (
    <main className="flex items-center justify-center min-h-screen ml-[250px] md:ml-[550px] lg:ml-[800px]">
      <Loader />
    </main>
  );
};

export default loading;
