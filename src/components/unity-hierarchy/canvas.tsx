import { Package, Box } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";
import type { TreeItemProps } from "../tree";

const CanvasDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  return {
    data: {
      title: "Canvas",
      img: "/components/Canvas.webp",
      href: "/vrc/monoui/canvas",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Canvas.prefab",
      contextMenuPath: "GameObject/Mono UI/Layout/Canvas",
      dependencies: [],
    },
    content: (
      <Tree.Item name={props.name ?? "Canvas"} type={Package} {...props} />
    ),
  };
};

const CanvasOutline = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  return {
    data: {
      title: "Canvas Outline",
      img: "/components/Canvas Outline.webp",
      href: "/vrc/monoui/canvas",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Canvas Outline.prefab",
      contextMenuPath: "GameObject/Mono UI/Layout/Canvas Outline",
      dependencies: [],
    },
    content: (
      <Tree.Item
        name={props.name ?? "Canvas Outline"}
        type={Package}
        {...props}
      >
        <Tree.Item name="Outline" type={Box} />
      </Tree.Item>
    ),
  };
};

const Canvas: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: CanvasDefault,
  Outline: CanvasOutline,
};

export default Canvas;
