import React from "react";
import Image from "next/image";
import { Tabs, Cards } from "nextra/components";
import { Box, Package } from "lucide-react";
import { Code } from "@nextui-org/code";
import type { ComponentData, ComponentResult } from "./unity-hierarchy/type";
import Tree from "./tree";

type ComponentsTabsProps = {
  component: ComponentResult;
  showCanvas?: boolean;
};

const DependencyCard: React.FC<{ dependency: ComponentData }> = ({ dependency }) => {
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

const ComponentsTabs: React.FC<ComponentsTabsProps> = ({
  component,
  showCanvas = true
}) => {
  const { data, content } = component;
  const { img, assetsPath, dependencies = [] } = data;

  return (
    <div className="py-5">
      <Code>{assetsPath}</Code>
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
