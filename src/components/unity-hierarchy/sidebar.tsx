import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import ScrollView from "./scrollview";
import type { ComponentResult } from "./type";
import Button from "./button";

const createScrollView = (
  name: string,
  children?: React.ReactNode,
  childDependency?: ComponentResult,
  props?: Partial<TreeItemProps>
): ComponentResult => {
  const scrollView = ScrollView.Default({ name, ...props });
  return {
    ...scrollView,
    data: {
      ...scrollView.data,
      dependencies: childDependency ? [childDependency.data] : [],
    },
    content: (
      <Tree.Item name={name} type={Package} {...props}>
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

  const buttonText1 = Text.H5({ name: "Text h5 (TMP)" });
  const buttonText2 = Text.H5({ name: "Text h5 (TMP)" });
  const buttonText3 = Text.H5({ name: "Text h5 (TMP)" });

  const button1 = Button.Default({ name: "Button (Page 1)" });
  const button2 = Button.Default({ name: "Button (Page 2)" });
  const button3 = Button.Default({ name: "Button (Page 3)" });

  button1.data.dependencies = [buttonText1.data];
  button2.data.dependencies = [buttonText2.data];
  button3.data.dependencies = [buttonText3.data];

  const leftScrollView1 = createScrollView(
    "Scroll View (Page 1)",
    button1.content,
    button1
  );
  const leftScrollView2 = createScrollView(
    "Scroll View (Page 2)",
    button2.content,
    button2,
    { defaultExpanded: false }
  );
  const leftScrollView3 = createScrollView(
    "Scroll View (Page 3)",
    button3.content,
    button3,
    { defaultExpanded: false }
  );

  const rightScrollView1 = createScrollView(
    "Scroll View (Page 1)",
    undefined,
    undefined
  );
  const rightScrollView2 = createScrollView(
    "Scroll View (Page 2)",
    undefined,
    undefined,
    { defaultExpanded: false }
  );
  const rightScrollView3 = createScrollView(
    "Scroll View (Page 3)",
    undefined,
    undefined,
    { defaultExpanded: false }
  );

  return {
    data: {
      title: "Sidebar",
      img: "/components/Sidebar.webp",
      href: "/vrc/monoui/sidebar",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Layout/Sidebar.prefab",
      contextMenuPath: "GameObject/Mono UI/Layout/Sidebar",
      dependencies: [
        leftHeaderText.data,
        leftScrollView1.data,
        leftScrollView2.data,
        leftScrollView3.data,
        rightHeaderText.data,
        rightScrollView1.data,
        rightScrollView2.data,
        rightScrollView3.data,
      ],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Panel Left" type={Box}>
          <Tree.Item name="Top Bar" type={Box}>
            {leftHeaderText.content}
          </Tree.Item>
          {leftScrollView1.content}
          {leftScrollView2.content}
          {leftScrollView3.content}
        </Tree.Item>
        <Tree.Item name="Panel Right" type={Box}>
          <Tree.Item name="Top Bar" type={Box}>
            {rightHeaderText.content}
          </Tree.Item>
          {rightScrollView1.content}
          {rightScrollView2.content}
          {rightScrollView3.content}
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
