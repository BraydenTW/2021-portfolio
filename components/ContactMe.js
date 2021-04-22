import { ArrowRight } from 'react-feather';

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto py-36" id="contactme">
      <h1 className="text-4xl">Interested in working together?</h1>
      <a href="mailto:me@braydentw.com">
        <span className="mt-10 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3 ">Get in touch</span>
            <ArrowRight color="white" size={30} strokeWidth={3} />
          </div>
        </span>
      </a>
    </div>
  );
}
