import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import Text from "./text";
import type { ComponentResult } from "./type";

const DropdownDefault = (
  props: Partial<TreeItemProps> = {}
): ComponentResult => {
  const TextH5 = Text.H5();
  const displayName = props.name ?? "Dropdown";

  return {
    data: {
      title: "Dropdown",
      img: "/components/Dropdown.webp",
      href: "/vrc/monoui/dropdown",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Dropdown.prefab",
      contextMenuPath: "GameObject/Mono UI/Input Controls/Dropdown",
      dependencies: [TextH5.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
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

const Dropdown: Record<
  string,
  (props?: Partial<TreeItemProps>) => ComponentResult
> = {
  Default: DropdownDefault,
};

export default Dropdown;
