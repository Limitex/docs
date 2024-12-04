import React from "react";
import Image from "next/image";
import { Tabs, Cards } from "nextra/components";
import { Package } from "lucide-react";
import { Code } from "@nextui-org/code";

type Dependency = {
  title: string;
  href: string;
};

type ComponentsTabsProps = {
  img?: string;
  assetsPath?: string;
  children?: React.ReactNode;
  dependencies?: Dependency[];
};

const ComponentsTabs: React.FC<ComponentsTabsProps> = ({
  img = "https://via.placeholder.com/500x400",
  assetsPath = "/",
  children = null,
  dependencies = [],
}) => {
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
          {children ? children : <p>No hierarchy provided.</p>}
        </Tabs.Tab>
        <Tabs.Tab className="w-full p-4 border rounded-lg lg:px-5 dark:border-neutral-800">
          {dependencies.length > 0 ? (
            <Cards className="m-0">
              {dependencies.map((dep) => (
                <Cards.Card
                  key={dep.href}
                  icon={<Package />}
                  title={dep.title}
                  href={dep.href}
                />
              ))}
            </Cards>
          ) : (
            <p>No dependencies found.</p>
          )}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default ComponentsTabs;
