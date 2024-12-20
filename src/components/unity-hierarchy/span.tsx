import { Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const SpanDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Span";
  
  return {
    data: {
      title: "Span",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/span",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Span.prefab",
      contextMenuPath: "GameObject/Mono UI/Span",
      dependencies: [],
    },
    content: <Tree.Item name={displayName} type={Package} {...props} />,
  };
};

const Span: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: SpanDefault,
};

export default Span; 