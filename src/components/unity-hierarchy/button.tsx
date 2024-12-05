import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const ButtonDefault = (
  defaultExpanded: boolean = true
): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Button",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name="Button" type={Box} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonSecondary = (defaultExpanded: boolean = true): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Button Secondary",
      img: "https://via.placeholder.com/500x400", 
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Secondary.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name="Button Secondary" type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonDestructive = (defaultExpanded: boolean = true): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Button Destructive",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button", 
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Destructive.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name="Button Destructive" type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonOutline = (defaultExpanded: boolean = true): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Button Outline",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Outline.prefab", 
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name="Button Outline" type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ButtonGhost = (defaultExpanded: boolean = true): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);

  return {
    data: {
      title: "Button Ghost",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/button",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Button/Button Ghost.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name="Button Ghost" type={Package} defaultExpanded={defaultExpanded}>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const createButtonWithDefault = (
  buttonFn: (defaultExpanded: boolean) => ComponentResult
) => {
  return (defaultExpanded: boolean = true) => buttonFn(defaultExpanded);
};

const Button: Record<string, (defaultExpanded?: boolean) => ComponentResult> = {
  Default: createButtonWithDefault(ButtonDefault),
  Secondary: createButtonWithDefault(ButtonSecondary),
  Destructive: createButtonWithDefault(ButtonDestructive),
  Outline: createButtonWithDefault(ButtonOutline),
  Ghost: createButtonWithDefault(ButtonGhost),
};

export default Button;
