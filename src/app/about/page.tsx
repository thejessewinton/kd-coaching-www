import { type Metadata } from "next";
import { getAbout } from "~/utils/content";

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
      <div className="relative z-50">
        <div
          className="space-y-4 font-light"
          dangerouslySetInnerHTML={{ __html: data.body.html }}
        />
      </div>
    </div>
  );
};

export default About;
