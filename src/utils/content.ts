import {
  type Index,
  allIndices,
  allReviews,
  type Reviews,
  allAbouts,
  type About,
} from "content";

export const getIndex = () => {
  return allIndices.find((doc) => doc.slug === "/") as Index;
};

export const getReviews = () => {
  return allReviews.find((doc) => doc.slug === "/reviews") as Reviews;
};

export const getAbout = () => {
  return allAbouts.find((doc) => doc.slug === "/about") as About;
};
