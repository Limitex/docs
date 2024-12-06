import { Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type CanvasProps = {
  name?: string;
};

const CanvasDefault = (defaultExpanded: boolean = true, props: CanvasProps = {}): ComponentResult => {
  const displayName = props.name ?? "Canvas";

  return {
    data: {
      title: "Canvas",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/canvas",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Canvas.prefab",
      dependencies: [],
    },
    content: <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded} />,
  };
};

const createCanvasWithDefault = (
  canvasFn: (defaultExpanded: boolean, props?: CanvasProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: CanvasProps) => canvasFn(defaultExpanded, props);
};

const Canvas: Record<string, (defaultExpanded?: boolean, props?: CanvasProps) => ComponentResult> = {
  Default: createCanvasWithDefault(CanvasDefault),
};

export default Canvas; 