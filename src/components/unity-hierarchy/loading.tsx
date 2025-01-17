import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const LoadingBarDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Loading Bar";

  return {
    data: {
      title: "Loading Bar",
      img: "/components/Loading Bar.webp",
      href: "/vrc/monoui/loadingbar",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Loading/Loading Bar.prefab",
      contextMenuPath: "GameObject/Mono UI/Loading/Loading Bar",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Field" type={Box} />
      </Tree.Item>
    ),
  };
};

const LoadingCircleDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Loading Circle";

  return {
    data: {
      title: "Loading Circle",
      img: "/components/Loading Circle.webp",
      href: "/vrc/monoui/loadingcircle",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Loading/Loading Circle.prefab",
      contextMenuPath: "GameObject/Mono UI/Loading/Loading Circle",
      dependencies: [],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Disabled" type={Box} >
          <Tree.Item name="Enabled" type={Box} />
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Loading = {
  Bar: LoadingBarDefault,
  Circle: LoadingCircleDefault,
};

export default Loading; 