import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const ScrollbarDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Scrollbar";

  return {
    data: {
      title: "Scrollbar",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/scrollbar",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Scrollbar.prefab",
      contextMenuPath: "GameObject/Mono UI/Scrollbar",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Sliding Area" type={Box}>
          <Tree.Item name="Handle" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Scrollbar: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: ScrollbarDefault,
};

export default Scrollbar; 