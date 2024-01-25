import type { Meta, StoryObj } from '@storybook/vue3';

import ButtonIcon from './ButtonIcon.vue';

const meta: Meta<typeof ButtonIcon> = {
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    title: {control:'text'},
    role: {control:'select', options:['admin' , 'user' , 'superAdmin' , 'default']},
  },

};


export default meta;
type Story = StoryObj<typeof ButtonIcon>;

export const Primary: Story = {
  render: (args) => ({
    components: { ButtonIcon },
    setup() {
      return { args };
    },
    template: '<ButtonIcon v-bind="args" />',
  }),
  args: {
    //👇 The args you need here will depend on your component
    title: 'Example Text',
    role: 'default'
  },
};
