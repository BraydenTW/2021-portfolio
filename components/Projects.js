import Image from 'next/image';

import { ExternalLink } from 'react-feather';

const projects = [
  {
    key: 0,
    title: 'BuildFaster',
    description: 'Simple HTML+CSS templates for your next project.',
    tools: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Git', 'Vercel'],
    link: 'https://buildfaster.co',
    linkDisplay: 'buildfaster.co',
    imgUrl: '/static/images/projects/buildfaster.png'
  },
  {
    key: 1,
    title: 'Emoji Search',
    description: 'A way to search and copy+paste emojis built with React!',
    tools: ['React', 'JavaScript', 'CSS', 'JSON', 'Git', 'GH Pages'],
    link: 'https://braydentw.github.io/react-emoji-search',
    linkDisplay: 'braydentw.github.io',
    imgUrl: '/static/images/projects/emoji-search.png'
  },
  {
    key: 2,
    title: 'HTML Boilerplate',
    description: 'A CLI that setups a vanilla HTML/CSS project in seconds.',
    tools: ['JavaScript', 'NodeJS', 'NPM', 'Git', 'FS', 'Prompts'],
    link: 'https://github.com/BraydenTW/create-html-boilerplate',
    linkDisplay: 'github.com',
    imgUrl: '/static/images/projects/create-html-boilerplate.png'
  },
  {
    key: 3,
    title: 'FinancePond',
    description: 'Your own finance specialists, every step of the way.',
    tools: ['HTML', 'CSS', 'JavaScript', 'SCSS', 'Git', 'Figma'],
    link: 'https://financepond.com',
    linkDisplay: 'financepond.com',
    imgUrl: '/static/images/projects/financepond.png'
  },
  {
    key: 4,
    title: 'Tailwind Portfolio',
    description: 'A simple, open-source, React+TailwindCSS portfolio.',
    tools: ['React', 'JavaScript', 'TailwindCSS', 'Git', 'GH Pages'],
    link: 'https://braydentw.github.io/react-tailwind-portfolio/',
    linkDisplay: 'braydentw.github.io',
    imgUrl: '/static/images/projects/tailwind-port.png'
  },
  {
    key: 5,
    title: 'FIWL.js',
    description: 'Arrange your web app layout as efficiently as possible.',
    tools: ['React', 'JavaScript', 'TailwindCSS', 'Git', 'GH Pages'],
    link: 'https://github.com/fiwl-js/fiwl-js',
    linkDisplay: 'github.com',
    imgUrl: '/static/images/projects/fiwl.png'
  }
];

export default function Projects() {
  return (
    <div id="mywork" className="w-full">
      <h2 className="text-3xl mt-10 mb-6">Projects I've worked on</h2>
      <div className="grid grid-flow-row grid-cols auto-rows-auto gap-10 items-center justify-start md:justify-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          ({ key, title, description, tools, link, linkDisplay, imgUrl }) => {
            return (
              <div key={key}>
                <div className="relative w-full h-60 overflow-hidden">
                  <Image src={imgUrl} layout="fill" objectFit="cover" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl">{title}</h3>
                  <p className="text-xl">{description}</p>
                  <div className="text-bluegray flex flex-row flex-wrap mt-4 mb-2">
                    {tools.map((tool, index) => {
                      return (
                        <span
                          key={index}
                          className="border-3/2 border-bluegray-light px-3 py-1 rounded-lg bg-white mb-2 mr-2"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                  <a href={link} target="_blank">
                    <span className="flex items-center justify-start text-bluegray font-bold">
                      <ExternalLink />
                      <span className="pl-2">{linkDisplay}</span>
                    </span>
                  </a>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
