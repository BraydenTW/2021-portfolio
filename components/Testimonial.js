import Image from 'next/image';

export default function Testimonial() {
  return (
    <div className="w-full bg-bluegray-light py-20 px-5 flex flex-col items-center justify-center flex-shrink-0">
      <p className="text-xl md:text-3xl text-center max-w-4xl">
        “Brayden is quick to iterate on feedback and has a knack for
        understanding the genre you expect in design. I would highly recommend
        him to anyone who is looking to build a great website.”
      </p>
      <div className="mt-10 flex flex-col-reverse md:flex-row items-center justify-center font-display text-bluegray flex-shrink-0">
        <div className="relative overflow-hidden rounded-full w-12 h-12 mt-4 md:mr-4 shadow-xl shadow-bluegray">
          <Image
            src="/static/images/wilson.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <p className="text-center">
          <a
            className="font-bold"
            href="https://twitter.com/wlsnbr"
            target="_blank"
          >
            Wilson Bright
          </a>{' '}
          Co-Founder of BlockSurvey
        </p>
      </div>
    </div>
  );
}
