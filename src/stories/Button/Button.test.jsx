import { render, screen } from '@testing-library/react';
import Button from './Button';
import { expect } from '@storybook/test';
import { Primary, Red } from './Button.stories';

test("should render Button", () => { 
     const label = 'Submit';
     render(<Button label={label}/>);
     const buttonElement = screen.getByRole('button');
     expect(buttonElement).toBeInTheDocument();
     expect(buttonElement).toHaveTextContent("Submit");
 })

 test("should render primary button", () => { 
     render(<Primary {...Primary.args} />);
     const buttonElement = screen.getByRole('button');
     expect(buttonElement).toHaveClass("storybook-button--primary");
 })

 test("should render red button", () => { 
    render(<Red {...Red.args} />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle("background-color: red");
})