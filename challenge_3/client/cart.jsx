
class Cart extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>My Cart</h3>
        <form onSubmit={this.handleSubmit}>
          <input id="currItem" onChange={this.handleInputChange} value={this.state.currItem} />
          <input id="currQuantity" onChange={this.handleInputChange} value={this.state.currQuantity} />
          <button id="checkout_next" onClick={this.props.setInputField}>Checkout</button>
        </form>
      </div>
    );
  }
}

export default Cart;