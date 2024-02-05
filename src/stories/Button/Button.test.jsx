import { render, screen } from '@testing-library/react';
import Button from './Button';
import { expect } from '@storybook/test';

test("should render Button", () => { 
    const label = 'Submit';
    render(<Button label={label}/>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("Submit");
 })