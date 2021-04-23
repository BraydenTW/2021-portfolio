import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import {
  GitHub as GithubIcon,
  Linkedin as LinkedinIcon,
  Dribbble as DribbbleIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  X as XIcon
} from 'react-feather';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div
      className={`w-full ${
        navOpen ? 'h-screen bg-white' : 'h-20'
      } fixed  z-30 navbar transition-navbar duration-700 ease-in-out overflow-hidden`}
    >
      <div className="m-auto w-full flex flex-col items-start">
        <div
          className="absolute top-5 right-5 z-50 cursor-pointer"
          onClick={toggleNav}
        >
          {navOpen ? (
            <XIcon size={36} color="black" />
          ) : (
            <MenuIcon size={36} strokeWidth={2} color="black" />
          )}
        </div>
        <div className="flex flex-col items-center p-5">
          <div className="flex items-center pb-5 mb-5 border-b-3/2 border-bluegray flex-shrink-0">
            <Image
              src="/static/images/logo.svg"
              alt="Picture of the author"
              width={45}
              height={45}
            />
            <div className="ml-3 text-black text-sm font-display leading-4">
              Brayden
              <div className="font-bold">TW</div>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <a className="mr-5" href="https://github.com/braydentw">
              <GithubIcon color="#9499a2" size={18} />
            </a>
            <a className="mr-5" href="https://linkedin.com/in/braydentw">
              <LinkedinIcon color="#9499a2" size={18} />
            </a>
            <a className="mr-5" href="https://dribbble.com/braydentw">
              <DribbbleIcon color="#9499a2" size={18} />
            </a>
            <a href="mailto:me@braydentw.com">
              <MailIcon color="#9499a2" size={18} />
            </a>
          </div>
        </div>
        <div className="h-full w-full font-display flex flex-col items-start justify-center p-5 text-2xl md:text-4xl">
          <div className="mb-6" onClick={toggleNav}>
            <Link href="#myskills">My Technical Skills</Link>
          </div>
          <div className="mb-6" onClick={toggleNav}>
            <Link href="#mywork">My Work</Link>
          </div>
          <div className="mb-6" onClick={toggleNav}>
            <Link href="#clients">My Clients</Link>
          </div>
          <div onClick={toggleNav}>
            <Link href="#contactme">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
