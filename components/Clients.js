import Image from 'next/image';

export default function Clients() {
  return (
    <div className="my-20">
      <h2 className="text-3xl mb-10 text-center">Clients I've worked with</h2>
      <div className="hidden md:block relative w-full h-40 cursor-pointer">
        <Image
          src="/static/images/clients.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="block md:hidden relative w-full h-40 cursor-pointer">
        <Image
          src="/static/images/clients-mobile.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
