import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import Button from "./button";
import type { ComponentResult } from "./type";

type DialogProps = {
  name?: string;
};

const DialogDefault = (defaultExpanded: boolean = true, props: DialogProps = {}): ComponentResult => {
  const Title = Text.H4(defaultExpanded, { name: "Title - Text h4 (TMP)" });
  const Description = Text.H5(defaultExpanded, { name: "Description - Text h5 (TMP)" });
  const ContinueButton = Button.Default(defaultExpanded);
  const CancelButton = Button.Outline(defaultExpanded);
  const displayName = props.name ?? "Dialog Provider";

  return {
    data: {
      title: "Dialog",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/dialog",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components 2/Dialog.prefab",
      dependencies: [Title.data, Description.data, CancelButton.data, ContinueButton.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Background" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Button" type={Box} />
        </Tree.Item>
        <Tree.Item name="Foreground" type={Box} defaultExpanded={defaultExpanded}>
          <Tree.Item name="Outline" type={Box} />
          <Tree.Item name="Container" type={Box} defaultExpanded={defaultExpanded}>
            {Title.content}
            {Description.content}
            <Tree.Item name="Button Container" type={Box} defaultExpanded={defaultExpanded}>
              {CancelButton.content}
              {ContinueButton.content}
            </Tree.Item>
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createDialogWithDefault = (
  dialogFn: (defaultExpanded: boolean, props?: DialogProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: DialogProps) => dialogFn(defaultExpanded, props);
};

const Dialog: Record<string, (defaultExpanded?: boolean, props?: DialogProps) => ComponentResult> = {
  Default: createDialogWithDefault(DialogDefault),
};

export default Dialog; 