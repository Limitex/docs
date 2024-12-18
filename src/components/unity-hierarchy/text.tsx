import { Package, Box } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";
import type { TreeItemProps } from "../tree";

const TextDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const { name, ...restProps } = props;
  const displayName = name ?? "Text (TMP)";
  const assetsPath = `/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/${name}.prefab`;
  const contextMenuPath = "GameObject/Mono UI/Text/" + displayName;

  return {
    data: {
      title: "Text (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: assetsPath,
      contextMenuPath: contextMenuPath,
      dependencies: [],
    },
    content: (
      <Tree.Item 
        name={displayName}
        type={Package}
        {...restProps}
      >
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const Text: Record<string, (props?: Partial<TreeItemProps>) => ComponentResult> = {
  Default: TextDefault,
  H1: (props) => TextDefault({ name: "Text h1 (TMP)", ...props }),
  H2: (props) => TextDefault({ name: "Text h2 (TMP)", ...props }),
  H3: (props) => TextDefault({ name: "Text h3 (TMP)", ...props }),
  H4: (props) => TextDefault({ name: "Text h4 (TMP)", ...props }),
  H5: (props) => TextDefault({ name: "Text h5 (TMP)", ...props }),
  H6: (props) => TextDefault({ name: "Text h6 (TMP)", ...props }),
};

export default Text;
