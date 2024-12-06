import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type ToggleProps = {
  name?: string;
};

const ToggleDefault = (defaultExpanded: boolean = true, props: ToggleProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
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
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Background" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Checkmark" type={Box} />
        </Tree.Item>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const ToggleOutline = (defaultExpanded: boolean = true, props: ToggleProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Toggle Outline";

  return {
    data: {
      title: "Toggle Outline",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toggle",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Toggle/Toggle Outline.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Outline" type={Box}/>
        <Tree.Item name="Background" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Checkmark" type={Box} />
        </Tree.Item>
        {TextH5.content}
      </Tree.Item>
    ),
  };
};

const createToggleWithDefault = (
  toggleFn: (defaultExpanded: boolean, props?: ToggleProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ToggleProps) => toggleFn(defaultExpanded, props);
};

const Toggle: Record<string, (defaultExpanded?: boolean, props?: ToggleProps) => ComponentResult> = {
  Default: createToggleWithDefault(ToggleDefault),
  Outline: createToggleWithDefault(ToggleOutline),
};

export default Toggle; 