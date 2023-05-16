import { Meta, StoryObj, moduleMetadata } from "@storybook/angular";
import { TooltipStoriesComponent } from "./components/tooltip.component";
import { GuitxoTooltipModule } from "@guitxo/elements/tooltip";

const meta: Meta<TooltipStoriesComponent> = {
  title: 'Tooltip Directive',
  component: TooltipStoriesComponent,
  tags: ['autodocs'],
  render: (args: TooltipStoriesComponent) => ({
    props: {
      ...args
    }
  }),
  argTypes: {
    guitxoTooltip: {
      control: 'text',
      description: 'Message to show in the tooltip',
      name: 'guitxo-tooltip'
    },
    guitxoTooltipPosition: {
      control: 'radio',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position where show the tooltip',
      name: 'guitxo-tooltip-position'
    },
    guitxoTooltipAlignment: {
      control: 'radio',
      options: ['start', 'center', 'end'],
      name: 'guitxo-tooltip-alignment'
    },
    guitxoTooltipBgColor: {
      control: 'color',
      name: 'guitxo-tooltip-background-color'
    },
    guitxoTooltipFgColor: {
      control: 'color',
      name: 'guitxo-tooltip-foreground-color'
    },
    guitxoTooltipDisabled: {
      control: 'boolean',
      name: 'guitxo-tooltip-disabled'
    }
  },
  args: {
    guitxoTooltip: 'Message for tooltip',
    guitxoTooltipPosition: 'top',
    guitxoTooltipAlignment: 'center',
    guitxoTooltipBgColor: '#566573',
    guitxoTooltipFgColor: '#FFFFFF',
    guitxoTooltipDisabled: false
  },
  decorators: [
    moduleMetadata({
      imports: [
        GuitxoTooltipModule
      ]
    })
  ]
};

export default meta;
type Story = StoryObj<TooltipStoriesComponent>;

export const Default: Story = {};
