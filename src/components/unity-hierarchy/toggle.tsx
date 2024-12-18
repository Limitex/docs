import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const ToggleDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const TextH5 = Text.H5();
  const displayName = props.name ?? "Toggle";
  const assetsPath = `/Packages/Mono UI/Runtime/Assets/Prefab/Components/Toggle/${displayName}.prefab`;
  const contextMenuPath = "GameObject/Mono UI/Toggle/" + displayName;

  return {
    data: {
      title: "Toggle",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toggle",
      assetsPath: assetsPath,
      contextMenuPath: contextMenuPath,
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

const ToggleGroup = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Toggle Group";
  const toggle1 = ToggleDefault({ name: "Toggle (0)" });
  const toggle2 = ToggleDefault({ name: "Toggle (1)" });
  const toggle3 = ToggleDefault({ name: "Toggle (2)" });

  return {
    data: {
      title: "Toggle Group",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toggle",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Toggle/Toggle Group.prefab",
      contextMenuPath: "GameObject/Mono UI/Toggle/Toggle Group",
      dependencies: [toggle1.data, toggle2.data, toggle3.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        {toggle1.content}
        {toggle2.content}
        {toggle3.content}
      </Tree.Item>
    ),
  };
};

const Toggle: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: ToggleDefault,
  Outline: (props) => ToggleDefault({ name: "Toggle Outline", ...props }),
  Group: ToggleGroup,
};

export default Toggle;
