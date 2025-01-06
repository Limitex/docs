import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
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

const SwitchWithTextLeft = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const TextH4 = Text.H4();
  const displayName = props.name ?? "Switch with Text (Left)";

  return {
    data: {
      title: "Switch with Text (Left)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/switch",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Switch/Switch with Text (Left).prefab",
      contextMenuPath: "GameObject/Mono UI/Switch/Switch with Text (Left)",
      dependencies: [TextH4.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Switch" type={Box}>
          <Tree.Item name="Disabled" type={Box}>
            <Tree.Item name="Enabled" type={Box} />
          </Tree.Item>
        </Tree.Item>
        <Tree.Item name="Text h4 (TMP)" type={Box}>
          <Tree.Item name="Underline" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const SwitchWithTextRight = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const TextH4 = Text.H4();
  const displayName = props.name ?? "Switch with Text (Right)";

  return {
    data: {
      title: "Switch with Text (Right)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/switch",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Switch/Switch with Text (Right).prefab",
      contextMenuPath: "GameObject/Mono UI/Switch/Switch with Text (Right)",
      dependencies: [TextH4.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Text h4 (TMP)" type={Box}>
          <Tree.Item name="Underline" type={Box} />
        </Tree.Item>
        <Tree.Item name="Switch" type={Box}>
          <Tree.Item name="Disabled" type={Box}>
            <Tree.Item name="Enabled" type={Box} />
          </Tree.Item>
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
  WithTextLeft: SwitchWithTextLeft,
  WithTextRight: SwitchWithTextRight,
};

export default Switch;
