import { render, fireEvent, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('todo input is empty', () => {
    render(<Input />);

    const inputTodo = screen.getByPlaceholderText('할 일을 입력해 주세요');

    expect(inputTodo.value).toBe('');
  });

  it('추가 button is displayed', () => {
    render(<Input />);

    const addButton = screen.getByText('추가');

    expect(addButton).toBeInTheDocument();
  });

  it('todo input is changed', () => {
    render(<Input />);

    const todo = '뭐라도 하기';

    const inputTodo = screen.getByPlaceholderText('할 일을 입력해 주세요');

    fireEvent.change(inputTodo, { target: { value: todo } });
    expect(inputTodo.value).toBe('뭐라도 하기');
  });

  it('Add button is working', () => {
    const handleClick = jest.fn();

    const { getByText } = render(<Input onClick={handleClick} />);

    expect(handleClick).not.toBeCalled();

    fireEvent.click(getByText('추가'));

    expect(handleClick).toBeCalled();
  });
});
