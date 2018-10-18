
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      name: '',
      email: ''
    };
    this.setInputField.bind(this);
  }

  // increment index to switch form
  setInputField(e) {
    e.preventDefault();
    if (this.state.index === 3) {
      alert('Purchase Complete! Hey, Thanks!!')
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1});
    }
  }

  // determine which form to render based on this.state.index
  render() {
    var inputField;
    switch (this.state.index) {
      case 0:
        inputField = < Cart setInputField={this.setInputField.bind(this)}/>;
        break;
      case 1:
        inputField = < Customer_info setInputField={this.setInputField.bind(this)} />;
        break;
      case 2:
        inputField = < Shipping_info setInputField={this.setInputField.bind(this)} />;
        break;
      case 3:
        inputField = < Payment_info setInputField={this.setInputField.bind(this)} />;
        break;
      default:
        inputField = < Cart setInputField={this.setInputField.bind(this)} />;
    }

    return (
      <div>
        <h3>App Component</h3>
        {inputField}
      </div>
    );
  }
}

// Cart /////////////////////////////////////////////////////////////////////////////
const Cart = (props) => (
  <div>
    <h3>My Cart</h3>
    <button onClick={props.setInputField}>Checkout</button>
  </div>
);

// class Cart extends React.Component {
//   constructor(props){
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>My Cart</h3>
//         <input type="text" value={this.state.name} onChange={this.changeValue.bind(this)}/>
//         <button onClick={this.setInputField}>Checkout</button>
//       </div>
//     );
//   }
// }

// Customer_info ////////////////////////////////////////////////////////////////////
class Customer_info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      pw: ''
    };
  }
  render() {
    return (
      <div>
        <h3>Customer Info</h3>
        <button onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

// Shipping_info ////////////////////////////////////////////////////////////////////
class Shipping_info extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Shipping Info</h3>
        <button onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

// Payment_info /////////////////////////////////////////////////////////////////////
class Payment_info extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Payment Info</h3>
        <button onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

export default App;