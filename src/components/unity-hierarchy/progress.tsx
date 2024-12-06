import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

type ProgressProps = {
  name?: string;
};

const ProgressDefault = (defaultExpanded: boolean = true, props: ProgressProps = {}): ComponentResult => {
  const displayName = props.name ?? "Progress";

  return {
    data: {
      title: "Progress",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/progress",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Progress.prefab",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Fill Area" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Fill" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createProgressWithDefault = (
  progressFn: (defaultExpanded: boolean, props?: ProgressProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ProgressProps) => progressFn(defaultExpanded, props);
};

const Progress: Record<string, (defaultExpanded?: boolean, props?: ProgressProps) => ComponentResult> = {
  Default: createProgressWithDefault(ProgressDefault),
};

export default Progress;
