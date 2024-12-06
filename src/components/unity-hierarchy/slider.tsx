import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type SliderProps = {
  name?: string;
};

const SliderDefault = (defaultExpanded: boolean = true, props: SliderProps = {}): ComponentResult => {
  const displayName = props.name ?? "Slider";

  return {
    data: {
      title: "Slider",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/slider",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Slider.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Background" type={Box} />
        <Tree.Item name="Fill Area" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Fill" type={Box} />
        </Tree.Item>
        <Tree.Item name="Handle Slide Area" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Handle" type={Box} defaultExpanded={defaultExpanded}>
            <Tree.Item name="Outline" type={Box} />
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createSliderWithDefault = (
  sliderFn: (defaultExpanded: boolean, props?: SliderProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: SliderProps) => sliderFn(defaultExpanded, props);
};

const Slider: Record<string, (defaultExpanded?: boolean, props?: SliderProps) => ComponentResult> = {
  Default: createSliderWithDefault(SliderDefault),
};

export default Slider; 