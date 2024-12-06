import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type ScrollViewProps = {
  name?: string;
};

const ScrollViewDefault = (defaultExpanded: boolean = true, props: ScrollViewProps = {}): ComponentResult => {
  const displayName = props.name ?? "Scroll View";

  return {
    data: {
      title: "Scroll View",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/scrollview",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Scroll View.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Viewport" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Content" type={Box} />
        </Tree.Item>
        <Tree.Item name="Scrollbar Horizontal" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Sliding Area" type={Box} defaultExpanded={defaultExpanded}>
            <Tree.Item name="Handle" type={Box} />
          </Tree.Item>
        </Tree.Item>
        <Tree.Item name="Scrollbar Vertical" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Sliding Area" type={Box} defaultExpanded={defaultExpanded}>
            <Tree.Item name="Handle" type={Box} />
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createScrollViewWithDefault = (
  scrollViewFn: (defaultExpanded: boolean, props?: ScrollViewProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ScrollViewProps) => scrollViewFn(defaultExpanded, props);
};

const ScrollView: Record<string, (defaultExpanded?: boolean, props?: ScrollViewProps) => ComponentResult> = {
  Default: createScrollViewWithDefault(ScrollViewDefault),
};

export default ScrollView; 