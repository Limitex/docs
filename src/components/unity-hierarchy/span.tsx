import { Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type SpanProps = {
  name?: string;
};

const SpanDefault = (defaultExpanded: boolean = true, props: SpanProps = {}): ComponentResult => {
  const displayName = props.name ?? "Span";
  
  return {
    data: {
      title: "Span",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/span",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Span.prefab",
      dependencies: [],
    },
    content: <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded} />,
  };
};

const createSpanWithDefault = (
  spanFn: (defaultExpanded: boolean, props?: SpanProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: SpanProps) => spanFn(defaultExpanded, props);
};

const Span: Record<string, (defaultExpanded?: boolean, props?: SpanProps) => ComponentResult> = {
  Default: createSpanWithDefault(SpanDefault),
};

export default Span; 