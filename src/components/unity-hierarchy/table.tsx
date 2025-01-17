import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";

const TableDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Table";

  return {
    data: {
      title: "Table",
      img: "/components/Table.webp",
      href: "/vrc/monoui/table",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Table.prefab",
      contextMenuPath: "GameObject/Mono UI/Utility/Table",
      dependencies: [],
    },
    content: null,
  };
};

const Table = {
  Default: TableDefault,
};

export default Table; 