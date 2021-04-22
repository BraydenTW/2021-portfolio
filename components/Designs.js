import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight } from 'react-feather';

const designs = [
  {
    key: 0,
    imgUrl: '/static/images/designs/dentista.png',
    url: 'https://dribbble.com/shots/14571857-The-Dentista-Logo-Design'
  },
  {
    key: 1,
    imgUrl: '/static/images/designs/yellow.png',
    url:
      'https://dribbble.com/shots/11555575-Classic-Paper-A-Newsletter-HTML-Theme'
  },
  {
    key: 2,
    imgUrl: '/static/images/designs/wallpapers.png',
    url: 'https://dribbble.com/shots/14077089-Free-iPhone-Wallpapers'
  },
  {
    key: 3,
    imgUrl: '/static/images/designs/purple.png',
    url: 'https://dribbble.com/shots/15485626-Modern-App-Design'
  },
  {
    key: 4,
    imgUrl: '/static/images/designs/landing-pages.png',
    url:
      'https://dribbble.com/shots/15485635-Landing-Pages-for-Startups-Concept'
  },
  {
    key: 5,
    imgUrl: '/static/images/designs/earbuds.png',
    url: 'https://dribbble.com/shots/9458498-Mobile-Shopping-App'
  }
];

export default function Designs() {
  return (
    <div id="mywork" className="w-full mb-10">
      <h2 className="text-3xl mt-10 mb-6">My Design Work</h2>
      <div className="mb-6 grid grid-flow-row grid-cols-1 auto-rows-auto gap-10 items-center justify-start md:justify-center md:grid-cols-2 lg:grid-cols-3">
        {designs.map(({ key, imgUrl, url }) => {
          return (
            <a key={key} href={url} target="_blank">
              <div className="relative w-full h-72 cursor-pointer">
                <Image src={imgUrl} layout="fill" objectFit="cover" />
              </div>
            </a>
          );
        })}
      </div>
      <p className="flex items-center">
        Like these? I've got more on&nbsp;
        <a href="https://dribbble.com/braydentw" className="text-pink-500">
          <span className="flex flex-row items-center">
            my Dribbble <ArrowRight size={20} />
          </span>
        </a>
      </p>
    </div>
  );
}
