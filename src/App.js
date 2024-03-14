
// function App() {
//   return (
//  <>
//  <h1 data-testid="MyName">Sanjai-Trainee Software Engineer</h1>
//  <h3 data-testid="Mycompany">Working in Relevantz</h3>
//  </>
//   );
// }
// export default App;
import React from 'react';
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={Num1:"",Num2:"",Result:""};
  }
  Add=()=>{
    var num1=parseInt(this.state.Num1);
    var num2=parseInt(this.state.Num2);
    var sum=num1+num2;
    this.setState({Result:sum});
  }
  render(){
    return(
<>
<h1 data-testid="Heading">Adding two number</h1>
<label data-testid="Label1">Enter the number 1:</label>
<input type="number"value={this.state.Num1} data-testid="input1"onChange={(e)=>{this.setState({Num1:e.target.value})}}/>
<br></br>
<label data-testid="Label2">Enter the number 2:</label>
<input type="number"value={this.state.Num2} data-testid="input2" onChange={(e)=>{this.setState({Num2:e.target.value})}}/>
<br></br>
<input type='button' value="Add" data-testid="Button"onClick={this.Add}/>
<br></br>
<b data-testid="Result">sum:<span Style={"color:red"}>{this.state.Result}</span></b>

</>
    );
  }
}

export default App;