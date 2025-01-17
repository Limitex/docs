import { Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const SeparatorDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const displayName = props.name ?? "Separator";

  return {
    data: {
      title: "Separator",
      img: "/components/Separator.webp",
      href: "/vrc/monoui/separator",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Separator.prefab",
      contextMenuPath: "GameObject/Mono UI/Utility/Separator",
      dependencies: [],
    },
    content: <Tree.Item name={displayName} type={Package} {...props} />,
  };
};

const Separator: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: SeparatorDefault,
};

export default Separator;
