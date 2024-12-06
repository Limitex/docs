import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import Button from "./button";
import type { ComponentResult } from "./type";

type ToastProps = {
  name?: string;
};

const ToastDefault = (defaultExpanded: boolean = true, props: ToastProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const TextH6 = Text.H6(defaultExpanded);
  const ButtonOutline = Button.Outline(defaultExpanded);
  const displayName = props.name ?? "Toast Provider";

  return {
    data: {
      title: "Toast",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/toast",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components 2/Toast.prefab",
      dependencies: [TextH5.data, TextH6.data, ButtonOutline.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Viewport" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Contents" type={Box} defaultExpanded={defaultExpanded}>
            <Tree.Item name="Outline" type={Box} />
            <Tree.Item name="Contents" type={Box} defaultExpanded={defaultExpanded}>
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

const createToastWithDefault = (
  toastFn: (defaultExpanded: boolean, props?: ToastProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: ToastProps) => toastFn(defaultExpanded, props);
};

const Toast: Record<string, (defaultExpanded?: boolean, props?: ToastProps) => ComponentResult> = {
  Default: createToastWithDefault(ToastDefault),
};

export default Toast; 