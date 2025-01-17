import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import Button from "./button";
import type { ComponentResult } from "./type";

const DialogDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const Title = Text.H4({ name: "Title - Text h4 (TMP)" });
  const Description = Text.H5({ name: "Description - Text h5 (TMP)" });
  const ContinueButton = Button.Default();
  const CancelButton = Button.Outline();
  const displayName = props.name ?? "Dialog Provider";

  return {
    data: {
      title: "Dialog",
      img: "/components/Dialog Provider.webp",
      href: "/vrc/monoui/dialog",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Providers/Dialog Provider.prefab",
      contextMenuPath: "GameObject/Mono UI/Provider/Dialog",
      dependencies: [
        Title.data,
        Description.data,
        CancelButton.data,
        ContinueButton.data,
      ],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Background" type={Box}>
          <Tree.Item name="Button" type={Box} />
        </Tree.Item>
        <Tree.Item name="Foreground" type={Box}>
          <Tree.Item name="Outline" type={Box} />
          <Tree.Item name="Container" type={Box}>
            {Title.content}
            {Description.content}
            <Tree.Item name="Button Container" type={Box}>
              {CancelButton.content}
              {ContinueButton.content}
            </Tree.Item>
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Dialog: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: DialogDefault,
};

export default Dialog;
