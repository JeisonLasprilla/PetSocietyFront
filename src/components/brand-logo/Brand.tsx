import Image from 'next/image';

const Brand = () => {
  return (
    <div className="flex justify-center bg-white p-4">
      <Image src="/images/logo.png" alt="Logo" width={150} height={150} />
    </div>
  );
};

export default Brand;
