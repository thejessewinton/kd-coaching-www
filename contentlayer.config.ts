import type { ComputedFields } from "contentlayer/source-files";
import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const Index = defineDocumentType(() => ({
  name: "Index",
  filePathPattern: "index.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    bookingLink: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

const About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    bookingLink: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

const Reviews = defineDocumentType(() => ({
  name: "Reviews",
  filePathPattern: "reviews.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    reviews: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Review",
        fields: {
          copy: { type: "string", required: true },
          source: { type: "string", required: true },
        },
      })),
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index, Reviews, About],
});
