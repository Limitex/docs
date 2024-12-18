import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const CardDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Card";

  return {
    data: {
      title: "Card",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/card",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Card.prefab",
      contextMenuPath: "GameObject/Mono UI/Card/Card",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Contents" type={Box} />
      </Tree.Item>
    ),
  };
};

const CardOutline = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Card Outline";

  return {
    data: {
      title: "Card Outline",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/card",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Card Outline.prefab",
      contextMenuPath: "GameObject/Mono UI/Card/Card Outline",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Contents" type={Box} />
      </Tree.Item>
    ),
  };
};

const Card: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: CardDefault,
  Outline: CardOutline,
};

export default Card; 