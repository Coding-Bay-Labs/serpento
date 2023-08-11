import { type RichTextContent } from "@graphcms/rich-text-types";

export type HygraphClass = {
  __typename: "Class";
  id: string;
  name: string;
  description: {
    __typename: "ClassDescriptionRichText";
    json: RichTextContent;
  };
  extension: {
    __typename: "Extension";
    id: string;
    name: string;
  };
  hpDice: {
    __typename: "Dice";
    id: string;
    facets: number;
    modifier: number;
    count: number;
  };
  hpScalingCharacteristic: string;
  listingImage: {
    __typename: "Asset";
    url: string;
    width: number;
    height: number;
  };
};
