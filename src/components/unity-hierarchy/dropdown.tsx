import { Box, Package } from "lucide-react";
import Tree from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

type DropdownProps = {
  name?: string;
};

const DropdownDefault = (defaultExpanded: boolean = true, props: DropdownProps = {}): ComponentResult => {
  const TextH5 = Text.H5(defaultExpanded);
  const displayName = props.name ?? "Dropdown";

  return {
    data: {
      title: "Dropdown",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/dropdown",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Dropdown.prefab",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Outline" type={Box} />
        {TextH5.content}
        <Tree.Item name="Template" type={Box}>
          <Tree.Item name="Outline" type={Box} />
          <Tree.Item name="Viewport" type={Box}>
            <Tree.Item name="Content" type={Box}>
              <Tree.Item name="Item" type={Box}>
                <Tree.Item name="Item Background" type={Box} />
                <Tree.Item name="Item Checkmark" type={Box} />
                {TextH5.content}
              </Tree.Item>
            </Tree.Item>
          </Tree.Item>
          <Tree.Item name="Scrollbar" type={Box}>
            <Tree.Item name="Sliding Area" type={Box}>
              <Tree.Item name="Handle" type={Box} />
            </Tree.Item>
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const createDropdownWithDefault = (
  dropdownFn: (defaultExpanded: boolean, props?: DropdownProps) => ComponentResult
) => {
  return (defaultExpanded: boolean = true, props?: DropdownProps) => dropdownFn(defaultExpanded, props);
};

const Dropdown: Record<string, (defaultExpanded?: boolean, props?: DropdownProps) => ComponentResult> = {
  Default: createDropdownWithDefault(DropdownDefault),
};

export default Dropdown;
