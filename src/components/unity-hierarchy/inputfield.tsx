import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const InputFieldDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const InputText = Text.H5();
  const PlaceholderText = Text.H5({ name: "Placeholder - Text h5 (TMP)" });
  const displayName = props.name ?? "InputField";

  return {
    data: {
      title: "InputField",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/inputfield",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/InputField.prefab",
      dependencies: [InputText.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Text Area" type={Box}>
          {PlaceholderText.content}
          {InputText.content}
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const InputField: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: InputFieldDefault,
};

export default InputField;
