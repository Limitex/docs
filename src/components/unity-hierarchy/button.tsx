import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type ButtonProps = {
  name?: string;
};

const ButtonDefault = (defaultExpanded: boolean = true, props: ButtonProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Button";

  return {
    data: {
      title: "Button",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath:"/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonSecondary = (defaultExpanded: boolean = true, props: ButtonProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Button Secondary";

  return {
    data: {
      title: "Button Secondary",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Secondary.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonDestructive = (defaultExpanded: boolean = true, props: ButtonProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Button Destructive";

  return {
    data: {
      title: "Button Destructive",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button", 
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Destructive.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonOutline = (defaultExpanded: boolean = true, props: ButtonProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Button Outline";

  return {
    data: {
      title: "Button Outline",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Outline.prefab", 
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonGhost = (defaultExpanded: boolean = true, props: ButtonProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Button Ghost";

  return {
    data: {
      title: "Button Ghost",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Ghost.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const createButtonWithDefault = (
  buttonFn: (defaultExpanded: boolean, props?: ButtonProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ButtonProps) => buttonFn(defaultExpanded, props);
};

const Button: Record<string, (defaultExpanded?: boolean, props?: ButtonProps) => ComponentResult> = {
  Default: createButtonWithDefault(ButtonDefault),
  Secondary: createButtonWithDefault(ButtonSecondary),
  Destructive: createButtonWithDefault(ButtonDestructive),
  Outline: createButtonWithDefault(ButtonOutline),
  Ghost: createButtonWithDefault(ButtonGhost),
};

export default Button;
