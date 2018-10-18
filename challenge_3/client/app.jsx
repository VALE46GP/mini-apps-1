
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
    this.setInputField.bind(this);
  }

  // increment index to switch form
  setInputField(updates) {
    console.log(updates);
    if (this.state.index === 3) {
      alert('Purchase Complete\nHey, thanks!!');
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

// Customer_info ////////////////////////////////////////////////////////////////////
class Customer_info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      pw: ''
    };
    this.submit = this.submit.bind(this);
  }

  // handleSubmit() {
  //   this.props.handleSubmit(this.state);
  // }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  // update db & invoke setInputField (the cb from App)
  submit() {
    console.log(this.state);
    $.ajax('/customer_info', {
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(this.state),     // this.state is undefined!!
      success: (data) => {
        this.props.setInputField();
      }
    });

  }

  render() {
    return (
      <div>
        <h3>Customer Info</h3>
        <input
          id="first_name"
          type="text"
          placeholder="first name"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="last_name"
          type="text"
          placeholder="last name"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="email"
          type="text"
          placeholder="email"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="pw"
          type="text"
          placeholder="password"
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.submit}>Checkout</button>
      </div>
    );
  }
}

// Shipping_info ////////////////////////////////////////////////////////////////////
class Shipping_info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      ship_zip: '',
      phone: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit() {
  //   this.props.handleSubmit(this.state);
  // }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Shipping Info</h3>
        <input
          id="line1"
          type="text"
          placeholder="address -- line 1"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="line2"
          type="text"
          placeholder="address -- line 2"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="city"
          type="text"
          placeholder="city"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="state"
          type="text"
          placeholder="state"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="ship_zip"
          type="text"
          placeholder="zip code"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="phone"
          type="text"
          placeholder="phone"
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

// Payment_info /////////////////////////////////////////////////////////////////////
class Payment_info extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      card_number: '',
      exp: '',
      cvv: '',
      bill_zip: '',
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit() {
  //   this.props.handleSubmit(this.state);
  // }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Payment Info</h3>
        <input
          id="card_number"
          type="text"
          placeholder="card number"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="exp"
          type="text"
          placeholder="expiration date"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="cvv"
          type="text"
          placeholder="cvv"
          onChange={this.handleInputChange.bind(this)}
        />
        <input
          id="bill_zip"
          type="text"
          placeholder="zip code"
          onChange={this.handleInputChange.bind(this)}
        />
        <button onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

export default App;
/*
$.ajax('/customer_info', {
  method: 'POST',
  contentType: 'application/json',
  data: JSON.stringify({
    item: this.state.currItem,
    quantity: this.state.currQuantity
  }),
  success: (data) => {
    this.setState({currItem: '', currQuantity: ''});
    this.props.onsuccess();
  }
});
 */