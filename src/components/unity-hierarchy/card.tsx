import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const CardDefault = (defaultExpanded: boolean = true): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Card",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/card",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Card.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name="Card" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Contents" type={Box} />
      </Tree.Item>
    ),
  };
};

const createCardWithDefault = (
  cardFn: (defaultExpanded: boolean) => ComponentResult
) => {
  return (defaultExpanded: boolean = true) => cardFn(defaultExpanded);
};

const Card: Record<string, (defaultExpanded?: boolean) => ComponentResult> = {
  Default: createCardWithDefault(CardDefault),
};

export default Card; 