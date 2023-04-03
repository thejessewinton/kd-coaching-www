import { type Metadata } from "next";
import { getReviews } from "~/utils/content";

export const generateMetadata = (): Metadata => {
  const data = getReviews();

  return {
    title: data.title,
    description: data.description,
  };
};

const Reviews = () => {
  const data = getReviews();

  return (
    <div className="flex flex-col gap-2 pb-4">
      <div className="relative z-50">
        <div className="flex flex-col gap-8 pb-4">
          {data.reviews
            ? data.reviews.map((review) => {
                return (
                  <div className="flex flex-col gap-2" key={review.source}>
                    <div dangerouslySetInnerHTML={{ __html: review.copy }} />
                    <span className="font-bold text-neutral-600">
                      {review.source}
                    </span>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
