import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { ExpandibleStoriesComponent } from "./components/expandible.component";
import { GuitxoExpandibleModule } from "@guitxo/elements/expandible";

const meta: Meta<ExpandibleStoriesComponent> = {
  title: 'Expandible',
  component: ExpandibleStoriesComponent,
  tags: ['autodocs'],
  render: (args: ExpandibleStoriesComponent) => ({}),
  decorators: [
    moduleMetadata({
      imports: [
        GuitxoExpandibleModule
      ]
    })
  ]
};

export default meta;
type Story = StoryObj<ExpandibleStoriesComponent>;

export const Default: Story = {};
