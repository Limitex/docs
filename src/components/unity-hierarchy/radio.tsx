import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const RadioDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const TextH5 = Text.H5();
  const displayName = props.name ?? "Radio";

  return {
    data: {
      title: "Radio",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/radio",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Radio.prefab",
      contextMenuPath: "GameObject/Mono UI/Toggle/Radio Toggle",
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

const Radio: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: RadioDefault,
};

export default Radio; 