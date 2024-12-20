import { Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";
import type { TreeItemProps } from "../tree";

const CanvasDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  return {
    data: {
      title: "Canvas",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/canvas",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Canvas.prefab",
      contextMenuPath: "GameObject/Mono UI/Canvas",
      dependencies: [],
    },
    content: (
      <Tree.Item 
        name={props.name ?? "Canvas"}
        type={Package}
        {...props}
      />
    ),
  };
};

const CanvasOutline = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  return {
    data: {
      title: "Canvas Outline",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/canvas",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Canvas Outline.prefab",
      contextMenuPath: "GameObject/Mono UI/Canvas Outline",
      dependencies: [],
    },
    content: (
      <Tree.Item name={props.name ?? "Canvas Outline"} type={Package} {...props} />
    ),
  };
};

const Canvas: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: CanvasDefault,
  Outline: CanvasOutline,
};

export default Canvas; 