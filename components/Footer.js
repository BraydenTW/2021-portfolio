import Image from 'next/image';

import {
  GitHub as GithubIcon,
  Linkedin as LinkedinIcon,
  Dribbble as DribbbleIcon,
  Mail as MailIcon
} from 'react-feather';

export default function Footer() {
  return (
    <div className="py-5 border-t-3/2 ">
      <div className="flex justify-center items-center mb-5 flex-shrink-0">
        <Image
          src="/static/images/logo.svg"
          alt="Picture of the author"
          width={45}
          height={45}
        />
        <div className="ml-3 text-bluegray text-sm font-display leading-4">
          Brayden
          <div className="font-bold">TW</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <a className="mr-5" href="https://github.com/braydentw">
          <GithubIcon color="#9499a2" size={18} />
        </a>
        <a className="mr-5" href="https://linkedin.com/in/braydentw">
          <LinkedinIcon color="#9499a2" size={18} />
        </a>
        <a className="mr-5" href="https://dribbble.com/braydentw">
          <DribbbleIcon color="#9499a2" size={18} />
        </a>
        <a href="mailto:brayden45.dev@gmail.com">
          <MailIcon color="#9499a2" size={18} />
        </a>
      </div>
    </div>
  );
}
