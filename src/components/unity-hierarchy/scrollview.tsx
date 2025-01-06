import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const ScrollViewDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const displayName = props.name ?? "Scroll View";

  return {
    data: {
      title: "Scroll View",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/scrollview",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Scroll View.prefab",
      contextMenuPath: "GameObject/Mono UI/Navigation/Scroll View",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Viewport" type={Box}>
          <Tree.Item name="Content" type={Box} />
        </Tree.Item>
        <Tree.Item name="Scrollbar Horizontal" type={Box}>
          <Tree.Item name="Sliding Area" type={Box}>
            <Tree.Item name="Handle" type={Box} />
          </Tree.Item>
        </Tree.Item>
        <Tree.Item name="Scrollbar Vertical" type={Box}>
          <Tree.Item name="Sliding Area" type={Box}>
            <Tree.Item name="Handle" type={Box} />
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const ScrollView: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: ScrollViewDefault,
};

export default ScrollView;
