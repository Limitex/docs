import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import Button from "./button";
import type { ComponentResult } from "./type";

const ToastDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const TextH5 = Text.H5();
  const TextH6 = Text.H6();
  const ButtonOutline = Button.Outline();
  const displayName = props.name ?? "Toast Provider";

  return {
    data: {
      title: "Toast",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toast",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components 2/Toast.prefab",
      contextMenuPath: "GameObject/Mono UI/Provider/Toast",
      dependencies: [TextH5.data, TextH6.data, ButtonOutline.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Viewport" type={Box}>
          <Tree.Item name="Contents" type={Box}>
            <Tree.Item name="Outline" type={Box} />
            <Tree.Item name="Contents" type={Box}>
              <Tree.Item name="Text" type={Box}>
                {TextH5.content}
                {TextH6.content}
              </Tree.Item>
              <Tree.Item name="Button" type={Box}>
                {ButtonOutline.content}
              </Tree.Item>
            </Tree.Item>
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Toast: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: ToastDefault,
};

export default Toast;
