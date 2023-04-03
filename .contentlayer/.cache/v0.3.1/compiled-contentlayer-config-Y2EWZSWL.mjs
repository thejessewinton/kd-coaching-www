// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
  }
};
var Index = defineDocumentType(() => ({
  name: "Index",
  filePathPattern: "index.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    bookingLink: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var About = defineDocumentType(() => ({
  name: "About",
  filePathPattern: "about.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    bookingLink: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var Reviews = defineDocumentType(() => ({
  name: "Reviews",
  filePathPattern: "reviews.md",
  contentType: "markdown",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string"
    },
    reviews: {
      type: "list",
      of: defineNestedType(() => ({
        name: "Review",
        fields: {
          copy: { type: "string", required: true },
          source: { type: "string", required: true }
        }
      }))
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Index, Reviews, About]
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-Y2EWZSWL.mjs.map
