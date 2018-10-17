
class Cart extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>My Cart</h3>
        <button id="checkout_next" onClick={this.props.setInputField}>Checkout</button>
      </div>
    );
  }
}

export default Cart;