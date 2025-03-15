import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextBlock`.
 */
export type TextBlockProps = SliceComponentProps<Content.TextBlockSlice>;

/**
 * Component for "TextBlock" Slices.
 */
const TextBlock: FC<TextBlockProps> = ({ slice }) => {
  return (
    <div className="prose prose-invert max-w-prose">
    <PrismicRichText 
        field={slice.primary.text}
        components={{
          heading1: ({ children }) => <h1 className="text-5xl font-bold mt-6 mb-4">{children}</h1>,
          heading2: ({ children }) => <h2 className="text-2xl font-bold mt-5 mb-3">{children}</h2>,
          heading3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
          heading4: ({ children }) => <h4 className="text-lg font-semibold mt-3 mb-2">{children}</h4>,  
          paragraph: ({ children }) => <p className="my-4">{children}</p>,
        }}
      />
    </div>
  );
};

export default TextBlock;
