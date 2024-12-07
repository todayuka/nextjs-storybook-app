import { Meta, StoryObj } from "@storybook/react";
import { Circle } from "./Circle";

/**
 * ここにコンポーネントの説明が表示されます。
 *
 * コンポーネントのメタ情報を定義します。<br>
 * component: 対象のコンポーネント<br>
 * title: storybookの画面で表示する名前<br>
 * argTypes: コンポーネントに設定できるプロパティの設定
 */
const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Circle",
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["red", "blue", "green"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

/**
 * metaで設定した値を各ストーリーの型として定義
 */
type Story = StoryObj<typeof meta>;

/**
 * 各ストーリー（バリエーション）のコンポーネント定義
 *
 * ベーシックカラー（赤）
 */
export const BaseCircle: Story = { args: { variant: "red" } };

/**
 * カラー（青）〇〇の時に使用する
 */
export const GreenCircle: Story = { args: { variant: "blue" } };

/**
 * カラー（緑）〇〇の時に使用する
 */
export const BlueCircle: Story = { args: { variant: "green" } };

/**
 * 円のグループで使用する
 */
export const GroupedCircle: Story = {
  render: () => (
    <div className="flex gap-2">
      <Circle variant="red" />
      <Circle variant="blue" />
      <Circle variant="green" />
    </div>
  ),
};
