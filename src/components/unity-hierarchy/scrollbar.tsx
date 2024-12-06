import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type ScrollbarProps = {
  name?: string;
};

const ScrollbarDefault = (defaultExpanded: boolean = true, props: ScrollbarProps = {}): ComponentResult => {
  const displayName = props.name ?? "Scrollbar";

  return {
    data: {
      title: "Scrollbar",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/scrollbar",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Scrollbar.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Sliding Area" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Handle" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createScrollbarWithDefault = (
  scrollbarFn: (defaultExpanded: boolean, props?: ScrollbarProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ScrollbarProps) => scrollbarFn(defaultExpanded, props);
};

const Scrollbar: Record<string, (defaultExpanded?: boolean, props?: ScrollbarProps) => ComponentResult> = {
  Default: createScrollbarWithDefault(ScrollbarDefault),
};

export default Scrollbar; 