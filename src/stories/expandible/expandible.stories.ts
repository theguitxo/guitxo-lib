import { Meta, StoryObj } from "@storybook/angular";
import { GuitxoExpandibleComponent } from "@guitxo/elements/expandible";

const meta: Meta<GuitxoExpandibleComponent> = {
  title: 'Expandible',
  component: GuitxoExpandibleComponent,
  tags: ['autodocs'],
  render: (args: GuitxoExpandibleComponent) => ({}),
};

export default meta;
type Story = StoryObj<GuitxoExpandibleComponent>;

export const Default: Story = {};
