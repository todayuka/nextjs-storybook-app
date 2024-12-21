import type { Meta, StoryObj } from "@storybook/react";

import UserItem from "./UserItem";

const meta = {
  title: "UserItem",
  component: UserItem,
  tags: ["autodocs"],
  loaders: [
    async () => ({
      user: await (
        await fetch("https://jsonplaceholder.typicode.com/users/2")
      ).json(),
    }),
  ],
} satisfies Meta<typeof UserItem>;

export default meta;

type Story = StoryObj<typeof UserItem>;

export const FetchData: Story = {
  render: (args, { loaded: { user } }) => (
    <UserItem {...args} id={user.id} name={user.name} />
  ),
};

export const Default: Story = {
  render: (args) => <UserItem id={args.id} name={args.name} />,
  args: {
    id: "100",
    name: "John Doe",
  },
};
