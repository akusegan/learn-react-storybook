import Counter from "./Counter";

export default {
    title: 'Components/Counter',
    component: Counter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});