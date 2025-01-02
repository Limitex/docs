import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const ProgressDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const displayName = props.name ?? "Progress";

  return {
    data: {
      title: "Progress",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/progress",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Progress.prefab",
      contextMenuPath: "GameObject/Mono UI/Utility/Progress",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Fill Area" type={Box}>
          <Tree.Item name="Fill" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Progress: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: ProgressDefault,
};

export default Progress;
