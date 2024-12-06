import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";
import type { ColorVariant } from "../tree";

const ButtonDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const TextH5 = Text.H5();
  const displayName = props.name ?? "Button";
  const variant = props.variant ?? "primary";

  return {
    data: {
      title: "Button",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath:"/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} variant={variant} {...props}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const Button: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: ButtonDefault,
  Secondary: (props) => ButtonDefault({ name: "Button Secondary", ...props }),
  Destructive: (props) => ButtonDefault({ name: "Button Destructive", ...props }),
  Outline: (props) => ButtonDefault({ name: "Button Outline", ...props }),
  Ghost: (props) => ButtonDefault({ name: "Button Ghost", ...props }),
};

export default Button;
