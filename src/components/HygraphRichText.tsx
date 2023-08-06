import {
  astToHtmlString,
  type NodeRendererType,
} from "@graphcms/rich-text-html-renderer";
import { type RichTextContent } from "@graphcms/rich-text-types";

const sharedClasses = "dark:text-white";
const bodyClasses = "text-lg text-gray-700";

const renderers: NodeRendererType = {
  h1: ({ children }) =>
    `<h1 class="mb-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl  ${sharedClasses}">${children}</h1>`,
  h2: ({ children }) =>
    `<h1 class="mb-4 text-3xl text-gray-900 md:text-5xl lg:text-6xl ${sharedClasses}">${children}</h1>`,
  h3: ({ children }) =>
    `<h3 class="text-3xl ${sharedClasses}">${children}</h3>`,
  h4: ({ children }) =>
    `<h4 class="text-2xl ${sharedClasses}">${children}</h3>`,
  h5: ({ children }) => `<h5 class="text-xl ${sharedClasses}">${children}</h3>`,
  h6: ({ children }) =>
    `<h6 class="text-large ${sharedClasses}">${children}</h3>`,
  p: ({ children }) =>
    `<p class="my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</p>`,
  ul: ({ children }) =>
    `<ul class="list-disc list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</ul>`,
  ol: ({ children }) =>
    `<ol class="list-decimal list-inside my-4 text-lg ${bodyClasses} ${sharedClasses}">${children}</ol>`,
  li: ({ children }) =>
    `<li class="my-2 text-lg ${bodyClasses} ${sharedClasses}">${children}</li>`,
  code: ({ children }) =>
    `<code class="bg-gray-100 dark:bg-gray-800 rounded-md p-2 text-sm ${sharedClasses}">${children}</code>`,
  code_block: ({ children }) =>
    `<pre class="bg-gray-100 dark:bg-gray-800 overflow-y-scroll rounded-md p-2 text-sm ${sharedClasses}">${children}</pre>`,
};

const HygraphRichText = ({ content }: { content: RichTextContent }) => {
  const rendered = astToHtmlString({ content, renderers });
  return (
    <div
      className="text-white"
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
};

export default HygraphRichText;
