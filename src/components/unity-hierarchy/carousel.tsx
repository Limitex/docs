import { Box, Package } from "lucide-react";
import Tree, { TreeItemProps } from "../tree";
import type { ComponentResult } from "./type";
import Text from "./text";
import Card from "./card";
import Button from "./button";
import LucideIcon from "./lucideicon";

const CarouselButtonOutline = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Button Outline";
  const lucideIcon = LucideIcon.Default();
  
  const buttonOutline = Button.Outline();
  
  return {
    data: {
      ...buttonOutline.data,
      dependencies: [lucideIcon.data],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        <Tree.Item name="Outline" type={Box} />
        {lucideIcon.content}
      </Tree.Item>
    ),
  };
};

const CarouselDefault = (props: Partial<TreeItemProps> = {}): ComponentResult => {
  const displayName = props.name ?? "Carousel";
  const textH1 = Text.H1();
  const card = Card.Default();
  const buttonOutline = CarouselButtonOutline();

  return {
    data: {
      title: "Carousel",
      img: "https://via.placeholder.com/500x400",
      href: "/vrc/monoui/carousel",
      assetsPath:
        "/Packages/Mono UI/Runtime/Assets/Prefab/Components/Carousel.prefab",
      contextMenuPath: "GameObject/Mono UI/Navigation/Carousel",
      dependencies: [
        textH1.data,
        card.data,
        buttonOutline.data
      ],
    },
    content: (
      <Tree.Item name={displayName} type={Package} {...props}>
        {card.content}
        <Tree.Item name="Images" type={Box}>
          <Tree.Item name="Image (0)" type={Box}>
            {textH1.content}
          </Tree.Item>
          <Tree.Item name="Image (1)" type={Box}>
            {textH1.content}
          </Tree.Item>
          <Tree.Item name="Image (2)" type={Box}>
            {textH1.content}
          </Tree.Item>
        </Tree.Item>
        <Tree.Item name="Outline" type={Box} />
        <Tree.Item name="Contents" type={Box}>
          <Tree.Item name="Control" type={Box}>
            <Tree.Item name="Left Control" type={Box}>
              {buttonOutline.content}
            </Tree.Item>
            <Tree.Item name="Right Control" type={Box}>
              {buttonOutline.content}
            </Tree.Item>
          </Tree.Item>
          <Tree.Item name="Status" type={Box}>
            <Tree.Item name="Navigation (0)" type={Box}>
              <Tree.Item name="Navigation Enabled (0)" type={Box} />
            </Tree.Item>
            <Tree.Item name="Navigation (1)" type={Box}>
              <Tree.Item name="Navigation Enabled (1)" type={Box} />
            </Tree.Item>
            <Tree.Item name="Navigation (2)" type={Box}>
              <Tree.Item name="Navigation Enabled (2)" type={Box} />
            </Tree.Item>
          </Tree.Item>
        </Tree.Item>
      </Tree.Item>
    ),
  };
};

const Carousel = {
  Default: CarouselDefault,
};

export default Carousel; 