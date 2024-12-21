import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { userEvent, within } from "@storybook/test";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { actions: { argTypesRegex: "^handle[A-Z].*" } },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const Danger: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole("button");
    // console.log(canvasElement, "canvasElement");
    // console.log(button, "button");
    await userEvent.click(button);
  },
  args: {
    children: "Danger",
    color: "danger",
    handleClick: () => alert("click"),
  },
};

export const PrimarySmall: Story = {
  args: {
    ...Primary.args,
    size: "sm",
  },
};

export const PrimaryLarge: Story = {
  args: {
    ...Primary.args,
    size: "lg",
  },
};
