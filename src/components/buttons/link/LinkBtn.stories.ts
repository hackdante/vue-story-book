import type { Meta, StoryObj } from '@storybook/vue3';

import LinkBtn from './LinkBtn.vue';

const meta: Meta<typeof LinkBtn> = {
  component: LinkBtn,
  tags: ['autodocs'],
  argTypes: {
    label: {control:'text'},
    goURL: {control:'text'},
    typeStyle: {control:'select', options:['light' , 'dark' , 'flat' , 'default']},
  },

};


export default meta;
type Story = StoryObj<typeof LinkBtn>;

export const Primary: Story = {
  render: (args) => ({
    components: { LinkBtn },
    setup() {
      return { args };
    },
    template: '<LinkBtn v-bind="args" />',
  }),
  args: {
    label: 'Example Text',
    goURL: 'default',
    typeStyle:'default'
  },
};