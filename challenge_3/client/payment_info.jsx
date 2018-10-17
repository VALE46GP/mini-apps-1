
class Payment_info extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Payment Info</h3>
        <button id="checkout_next" onClick={this.props.setInputField}>Purchase!</button>
      </div>
    );
  }
}

export default Payment_info;