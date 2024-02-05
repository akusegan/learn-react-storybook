import Rating from "./Rating";

export default {
    title: 'Components/Rating',
    component: Rating,
};

// add template to Rating component
const Template = (args) => <Rating {...args} />;

// bind the template to the args
export const FiveStars = Template.bind({});
FiveStars.args = {
    number: 5,
};
