import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const SliderDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Slider";

  return {
    data: {
      title: "Slider",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/slider",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Slider.prefab",
      contextMenuPath: "GameObject/Mono UI/Slider",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Background" type={Box} />
        <Tree.Item name="Fill Area" type={Box}>
          <Tree.Item name="Fill" type={Box} />
        </Tree.Item>
        <Tree.Item name="Handle Slide Area" type={Box}>
          <Tree.Item name="Handle" type={Box}>
            <Tree.Item name="Outline" type={Box} />
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Slider: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: SliderDefault,
};

export default Slider;
