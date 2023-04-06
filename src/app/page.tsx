import { type Metadata } from "next";
import { getIndex } from "~/utils/content";

export const generateMetadata = (): Metadata => {
  const data = getIndex();

  return {
    title: data.title,
    description: data.description,
  };
};

const Index = () => {
  const data = getIndex();

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="relative z-50">
        <div className="py-20">
          <h1 className="font-serif text-4xl font-light">
            Learn the skills you need to succeed in the performing arts.
          </h1>
        </div>
        <div
          className="space-y-4 font-light"
          dangerouslySetInnerHTML={{ __html: data.body.html }}
        />
      </div>
    </div>
  );
};

export default Index;
