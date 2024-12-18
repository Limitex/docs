import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";
import type { ColorVariant } from "../tree";

const ButtonDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const { name, ...restProps } = props;
  const TextH5 = Text.H5();
  const displayName = ("Button " + (name ?? "")).trim();
  const contextMenuPath = "GameObject/Mono UI/Button/" + (name ?? "Primary");
  
  return {
    data: {
      title: "Button",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath:"/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button.prefab",
      contextMenuPath: contextMenuPath,
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...restProps}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const Button: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: ButtonDefault,
  Secondary: (props) => ButtonDefault({ name: "Secondary", ...props }),
  Destructive: (props) => ButtonDefault({ name: "Destructive", ...props }),
  Outline: (props) => ButtonDefault({ name: "Outline", ...props }),
  Ghost: (props) => ButtonDefault({ name: "Ghost", ...props }),
};

export default Button;
