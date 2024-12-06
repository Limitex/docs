import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const ToggleDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const TextH5 = Text.H5();
  const displayName = props.name ?? "Toggle";

  return {
    data: {
      title: "Toggle",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toggle",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Toggle/Toggle.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Background" type={Box}>
          <Tree.Item name="Checkmark" type={Box} />
        </Tree.Item>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const Toggle: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: ToggleDefault,
  Outline: (props) => ToggleDefault({ name: "Toggle Outline", ...props }),
};

export default Toggle; 