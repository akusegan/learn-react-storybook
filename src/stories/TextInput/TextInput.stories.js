import TextInput from "./TextInput";

export default {
    title: "Components/TextInput",
    component: TextInput,
    argTypes: {
        type: {
            options: ["text", "password", "email", "number", "date"],
            control: { type: 'select'},
        },
    }
}

// create a template function 
const Template = (args) => <TextInput {...args} />;

// create a default story 
export const Default = Template.bind({});
Default.args = {
    name: "name",
    type: "text",
    label: "First Name",
    placeholder: "Enter your name",
    id: "name",
};

export const Password = Template.bind({});
Password.args = {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    id: "password",
};

