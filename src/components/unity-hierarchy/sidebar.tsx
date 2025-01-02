import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import ScrollView from "./scrollview";
import type { ComponentResult } from "./type";
import Button from "./button";

const createScrollView = (
  name: string,
  children?: React.ReactNode,
  childDependency?: ComponentResult
): ComponentResult => {
  const scrollView = ScrollView.Default({ name });
  return {
    ...scrollView,
    data: {
      ...scrollView.data,
      dependencies: childDependency ? [childDependency.data] : [],
    },
    content: (
      <Tree.Item name={name} type={Package}>
        <Tree.Item name="Viewport" type={Box}>
          <Tree.Item name="Content" type={Box}>
            {children}
          </Tree.Item>
        </Tree.Item>
        <Tree.Item name="Scrollbar Vertical" type={Box}>
          <Tree.Item name="Sliding Area" type={Box}>
            <Tree.Item name="Handle" type={Box} />
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const SidebarDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const displayName = props.name ?? "Sidebar";
  const leftHeaderText = Text.H2({ name: "Text h2 (TMP)" });
  const rightHeaderText = Text.H3({ name: "Text h3 (TMP)" });
  const buttonText = Text.H5({ name: "Text h5 (TMP)" });
  const button = Button.Default({ name: "Button (Page 1)" });
  button.data.dependencies = [buttonText.data];

  const leftScrollView = createScrollView(
    "Scroll View",
    button.content,
    button
  );
  const rightScrollView = createScrollView(
    "Scroll View (Page 1)",
    undefined,
    undefined
  );

  return {
    data: {
      title: "Sidebar",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/sidebar",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Sidebar.prefab",
      contextMenuPath: "GameObject/Mono UI/Sidebar",
      dependencies: [
        leftHeaderText.data,
        leftScrollView.data,
        rightHeaderText.data,
        rightScrollView.data,
      ],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Panel Left" type={Box}>
          <Tree.Item name="Top Bar" type={Box}>
            {leftHeaderText.content}
          </Tree.Item>
          {leftScrollView.content}
        </Tree.Item>
        <Tree.Item name="Panel Right" type={Box}>
          <Tree.Item name="Top Bar" type={Box}>
            {rightHeaderText.content}
          </Tree.Item>
          {rightScrollView.content}
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Sidebar: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: SidebarDefault,
};

export default Sidebar;
