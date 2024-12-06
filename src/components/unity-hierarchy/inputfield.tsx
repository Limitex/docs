import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type InputFieldProps = {
  name?: string;
};

const InputFieldDefault = (defaultExpanded: boolean = true, props: InputFieldProps = {}): ComponentResult => {
  const InputText = Text.H5(defaultExpanded);
  const PlaceholderText = Text.H5(defaultExpanded, { name: "Placeholder - Text h5 (TMP)" });
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
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Text Area" type={Box} defaultExpanded={defaultExpanded}>
          {PlaceholderText.content}
          {InputText.content}
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createInputFieldWithDefault = (
  inputFieldFn: (defaultExpanded: boolean, props?: InputFieldProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: InputFieldProps) => inputFieldFn(defaultExpanded, props);
};

const InputField: Record<string, (defaultExpanded?: boolean, props?: InputFieldProps) => ComponentResult> = {
  Default: createInputFieldWithDefault(InputFieldDefault),
};

export default InputField;
