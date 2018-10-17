import Customer_info from './customer_info.js';
import Cart from './cart.js';
import Shipping_info from './shipping_info.js';
import Payment_info from './payment_info.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      allForms: ['cart', 'customer', 'shipping', 'payment'],
      index: 0
    };
    this.setInputField.bind(this);
  }

  setInputField(e) {
    if (this.state.index === 3) {
      alert('Purchase Complete! Hey, Thanks!!')
      this.setState({index: 0})
    } else {
      this.setState({index: this.state.index + 1});
    }
  }

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
        <h3>Hey cool, an App Component</h3>
        {inputField}
      </div>
    );
  }
}

export default App;