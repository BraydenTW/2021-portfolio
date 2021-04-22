import Link from 'next/link';
import { ArrowDown } from 'react-feather';

export default function Hero() {
  return (
    <div className="w-full mt-28 mb-24 md:my-0 flex flex-col md:min-h-screen items-start justify-start md:justify-center">
      <p className="text-2xl md:text-4xl leading-10 md:leading-tight max-w-2xl">
        Hi, I’m Brayden - a <strong>Frontend Developer</strong> and{' '}
        <strong>Designer</strong> who loves React.js, the world of open source,
        and solving developers’ everyday problems.
      </p>
      <Link href="#mywork">
        <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Check out my work</span>
            <ArrowDown color="white" size={30} strokeWidth={3} />
          </div>
        </span>
      </Link>
    </div>
  );
}
