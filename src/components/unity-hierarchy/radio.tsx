import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type RadioProps = {
  name?: string;
};

const RadioDefault = (defaultExpanded: boolean = true, props: RadioProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Radio";

  return {
    data: {
      title: "Radio",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/radio",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Radio.prefab",
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

const createRadioWithDefault = (
  radioFn: (defaultExpanded: boolean, props?: RadioProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: RadioProps) => radioFn(defaultExpanded, props);
};

const Radio: Record<string, (defaultExpanded?: boolean, props?: RadioProps) => ComponentResult> = {
  Default: createRadioWithDefault(RadioDefault),
};

export default Radio; 