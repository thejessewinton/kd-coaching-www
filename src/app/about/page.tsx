import { type Metadata } from "next";
import { getAbout } from "~/utils/content";
import Image from "next/image";
import Headshot from "../../../public/headshot.jpg";

export const generateMetadata = (): Metadata => {
  const data = getAbout();

  return {
    title: data.title,
    description: data.description,
  };
};

const About = () => {
  const data = getAbout();

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="py-20">
        <h1 className="text-center font-serif text-4xl font-light">
          About KD Coaching
        </h1>
      </div>
      <div className="relative z-50 flex flex-col gap-8 md:flex-row">
        <Image
          src={Headshot}
          alt="Kelly Ann Dunn"
          className="w-full md:w-1/3"
        />
        <div
          className="space-y-4"
          dangerouslySetInnerHTML={{ __html: data.body.html }}
        />
      </div>
    </div>
  );
};

export default About;
