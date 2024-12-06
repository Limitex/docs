import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type SwitchProps = {
  name?: string;
};

const SwitchDefault = (defaultExpanded: boolean = true, props: SwitchProps = {}): ComponentResult => {
  const displayName = props.name ?? "Switch";

  return {
    data: {
      title: "Switch",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/switch",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Switch.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Disabled" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Enabled" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createSwitchWithDefault = (
  switchFn: (defaultExpanded: boolean, props?: SwitchProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: SwitchProps) => switchFn(defaultExpanded, props);
};

const Switch: Record<string, (defaultExpanded?: boolean, props?: SwitchProps) => ComponentResult> = {
  Default: createSwitchWithDefault(SwitchDefault),
};

export default Switch; 