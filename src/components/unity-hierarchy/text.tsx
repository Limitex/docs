import { Box, Package } from "lucide-react";
import Tree from "../tree";
import type { ComponentResult } from "./type";

const TextDefault = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH1 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h1 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h1 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h1 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH2 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h2 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h2 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h2 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH3 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h3 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h3 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h3 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH4 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h4 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h4 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h4 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH5 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h5 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h5 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h5 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const TextH6 = (defaultExpanded: boolean = true): ComponentResult => {
  return {
    data: {
      title: "Text h6 (TMP)",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/text",
      assetsPath: "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Text/Text h6 (TMP).prefab",
    },
    content: (
      <Tree.Item name="Text h6 (TMP)" type={Package} defaultExpanded={defaultExpanded}>
        <Tree.Item name="Underline" type={Box} />
      </Tree.Item>
    ),
  };
};

const createTextWithDefault = (
  textFn: (defaultExpanded: boolean) => ComponentResult
) => {
  return (defaultExpanded: boolean = true) => textFn(defaultExpanded);
};

const Text: Record<string, (defaultExpanded?: boolean) => ComponentResult> = {
  Default: createTextWithDefault(TextDefault),
  H1: createTextWithDefault(TextH1),
  H2: createTextWithDefault(TextH2),
  H3: createTextWithDefault(TextH3),
  H4: createTextWithDefault(TextH4),
  H5: createTextWithDefault(TextH5),
  H6: createTextWithDefault(TextH6),
};

export default Text;
