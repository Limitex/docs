import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const SwitchDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Switch";

  return {
    data: {
      title: "Switch",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/switch",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Switch/Switch.prefab",
      contextMenuPath: "GameObject/Mono UI/Switch/Switch",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Disabled" type={Box}>
          <Tree.Item name="Enabled" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Switch: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: SwitchDefault,
};

export default Switch;
