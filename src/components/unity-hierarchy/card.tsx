import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type CardProps = {
  name?: string;
};

const CardDefault = (defaultExpanded: boolean = true, props: CardProps = {}): ComponentResult => {
  const displayName = props.name ?? "Card";

  return {
    data: {
      title: "Card",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/card",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Card.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Contents" type={Box} />
      </Tree.Item>
    ),
  };
};

const createCardWithDefault = (
  cardFn: (defaultExpanded: boolean, props?: CardProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: CardProps) => cardFn(defaultExpanded, props);
};

const Card: Record<string, (defaultExpanded?: boolean, props?: CardProps) => ComponentResult> = {
  Default: createCardWithDefault(CardDefault),
};

export default Card; 