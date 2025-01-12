import { provideAnimations } from '@angular/platform-browser/animations';
import { Meta, StoryObj, applicationConfig } from '@storybook/angular';
import { ExpandibleStoriesComponent } from './components/expandible.component';

const meta: Meta<ExpandibleStoriesComponent> = {
  title: 'Expandible',
  component: ExpandibleStoriesComponent,
  tags: ['autodocs'],
  render: (args: ExpandibleStoriesComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export default meta;
type Story = StoryObj<ExpandibleStoriesComponent>;

export const Default: Story = {};
