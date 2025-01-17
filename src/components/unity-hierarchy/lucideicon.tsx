import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const LucideIconDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const displayName = props.name ?? "Lucide Icon";

  return {
    data: {
      title: "Lucide Icon",
      img: "/components/Lucide Icon.webp",
      href: "/vrc/monoui/lucideicon",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Lucide Icon.prefab",
      contextMenuPath: "GameObject/Mono UI/Lucide Icon",
      dependencies: [],
    },
    content: <Tree.Item name={displayName} type={Package} {...props} />,
  };
};

const LucideIcon: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: LucideIconDefault,
};

export default LucideIcon;
