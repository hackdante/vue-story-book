import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './Card.vue';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    pType: {control:'select', options:['dark', 'light']},
    pTitle: {control: 'text'},
    pDescription: {control:'text'},
    pGoTo: {control:'text'}, 
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => ({
    components: { Card },
    setup() {
      return { args };
    },
    template: '<Card v-bind="args" />',
  }),
  args: {
    pType: 'light',
    pTitle: 'StoryTitle',
    pDescription: 'Story description',
    pGoTo: '/story-url'
  },
};
