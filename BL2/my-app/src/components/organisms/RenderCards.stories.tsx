import { ComponentMeta, ComponentStory } from "@storybook/react";
import RenderCards from "./RenderCards";

export default {
  title: "organism/RenderCards",
  component: RenderCards,
} as ComponentMeta<typeof RenderCards>;

const Template: ComponentStory<typeof RenderCards> = () => <RenderCards />;

export const RenderCard = Template.bind({});