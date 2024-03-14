import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('My test',()=>{
  // test('Testcase-1',()=>{
  //   render(<App/>);
  //   var test=screen.getByTestId("MyName");
  //   expect(test).toBeInTheDocument();
  //   expect(test).toHaveTextContent('Sanjai-Trainee Software Engineer');

  //   });

  // // it or test  
  //   it('Testcase-2',()=>{
  //     render(<App/>);
  //     const test=screen.getByText('Working in Relevantz');
  //     expect(test).toBeInTheDocument();
    
  //   });

  test('Test case-1[Render all ui]',()=>{
    render(<App/>);
    const input1=screen.getByTestId( 'input1');
    const input2=screen.getByTestId( 'input2');
    const Button=screen.getByTestId( 'Button');

    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(Button).toBeInTheDocument();

  })

  test('Test case-2[Render All labels and text message]',()=>{
    render(<App />);

    const Heading=screen.getByTestId( "Heading");
    const Label1=screen.getByTestId( "Label1");
    const Label2=screen.getByTestId( "Label2");
    const Result=screen.getByTestId( "Result");

    expect(Heading).toBeInTheDocument();
    expect(Heading).toHaveTextContent('Adding two number')

    expect(Label1).toBeInTheDocument();
    expect(Label1).toHaveTextContent('Enter the number 1:')

    expect(Label2).toBeInTheDocument();
    expect(Label2).toHaveTextContent('Enter the number 2:')

    expect(Result).toBeInTheDocument();
    expect(Result).toHaveTextContent('sum:')

  });

  test('Test case-3[Testing Textboxes Initial value blank]',()=>{
  render(<App/>)
  const input1=screen.getByTestId( 'input1');
  const input2=screen.getByTestId( 'input2');
  expect(input1).toHaveTextContent('');
  expect(input2).toHaveTextContent('');
  });
  
  test('test case-4[Testing for no input error message]',()=>{
    render(<App/>);
    const Button=screen.getByTestId('Button');
    fireEvent.click(Button);
    const Result=screen.getByTestId("Result");
    expect(Result).toHaveTextContent('sum:NaN');
  
  })
  
test('test case-5 [Testing for success result]',()=>{
  render(<App/>);
  const input1=screen.getByTestId( 'input1');
  const input2=screen.getByTestId('input2');
  const button =screen.getByTestId('Button');

  fireEvent.change(input1,{target: {value:10}});
  fireEvent.change(input2,{target: {value:30}});
  fireEvent.click(button);

  const result= screen.getByTestId('Result');
  expect(result).toHaveTextContent("sum:40");

})


});




