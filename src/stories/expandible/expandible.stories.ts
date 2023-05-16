import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { ExpandibleStoriesComponent } from "./components/expandible.component";
import { GuitxoExpandibleComponent } from "@guitxo/elements/expandible";

const meta: Meta<ExpandibleStoriesComponent> = {
  title: 'Expandible',
  component: ExpandibleStoriesComponent,
  tags: ['autodocs'],
  render: (args: ExpandibleStoriesComponent) => ({}),
  decorators: [
    moduleMetadata({
      imports: [
        GuitxoExpandibleComponent
      ]
    })
  ]
};

export default meta;
type Story = StoryObj<ExpandibleStoriesComponent>;

export const Default: Story = {};
