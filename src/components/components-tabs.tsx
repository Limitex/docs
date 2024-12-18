import React from "react";
import Image from "next/image";
import { Tabs, Cards } from "nextra/components";
import { Box, Package } from "lucide-react";
import { Code } from "@nextui-org/code";
import type { ComponentData, ComponentResult } from "./unity-hierarchy/type";
import Tree from "./tree";
import { Card, CardBody, Chip } from "@nextui-org/react";
import { FolderOpen, Menu } from "lucide-react";

type ComponentsTabsProps = {
  component: ComponentResult;
  showCanvas?: boolean;
};

const DependencyCard: React.FC<{ dependency: ComponentData }> = ({
  dependency,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <Cards.Card
        icon={<Package />}
        title={dependency.title}
        href={dependency.href}
      />
      {dependency.dependencies && dependency.dependencies.length > 0 && (
        <div className="ml-4 pl-4 border-l dark:border-neutral-800">
          <div className="flex flex-col gap-2">
            {dependency.dependencies.map((dep) => (
              <DependencyCard key={dep.href} dependency={dep} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const PathDisplay = ({ assetsPath, contextMenuPath }) => {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-2 flex-shrink-0 w-[100px]">
          <Menu className="w-4 h-4 text-neutral-500" />
          <span className="text-sm text-neutral-500 font-medium">Context</span>
        </div>
        <div className="overflow-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Code className="text-md bg-neutral-100 dark:bg-neutral-900 w-full whitespace-nowrap">
            {contextMenuPath || "Not specified"}
          </Code>
        </div>
      </div>
      <div className="flex items-center gap-2 min-w-0">
        <div className="flex items-center gap-2 flex-shrink-0 w-[100px]">
          <FolderOpen className="w-4 h-4 text-neutral-500" />
          <span className="text-sm text-neutral-500 font-medium">Assets</span>
        </div>
        <div className="overflow-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Code className="text-md bg-neutral-100 dark:bg-neutral-900 w-full whitespace-nowrap">
            {assetsPath || "Not specified"}
          </Code>
        </div>
      </div>
    </div>
  );
};

const ComponentsTabs: React.FC<ComponentsTabsProps> = ({
  component = undefined,
  showCanvas = true,
}) => {
  const { data, content } = component ?? {
    data: undefined,
    content: undefined,
  };
  const {
    img,
    assetsPath,
    contextMenuPath,
    dependencies = [],
  } = data ?? {
    img: undefined,
    assetsPath: undefined,
    contextMenuPath: undefined,
    dependencies: [],
  };

  return (
    <div className="py-5">
      <PathDisplay assetsPath={assetsPath} contextMenuPath={contextMenuPath} />
      <Tabs items={["Preview", "Hierarchy", "Dependencies"]}>
        <Tabs.Tab className="flex justify-center w-full p-4 border rounded-lg lg:px-5 dark:border-neutral-800">
          <Image
            src={img}
            alt="Component Preview"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </Tabs.Tab>
        <Tabs.Tab className="w-full p-4 border rounded-lg lg:px-5 dark:border-neutral-800">
          {content ? (
            <Tree.Root defaultExpanded>
              {showCanvas ? (
                <Tree.Item name="Canvas (Environment)" type={Box}>
                  {content}
                </Tree.Item>
              ) : (
                content
              )}
            </Tree.Root>
          ) : (
            <p>No hierarchy provided.</p>
          )}
        </Tabs.Tab>
        <Tabs.Tab className="w-full p-4 border rounded-lg lg:px-5 dark:border-neutral-800">
          {dependencies.length > 0 ? (
            <div className="flex flex-col gap-2">
              {dependencies.map((dep) => (
                <DependencyCard key={dep.href} dependency={dep} />
              ))}
            </div>
          ) : (
            <p>No dependencies found.</p>
          )}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default ComponentsTabs;
