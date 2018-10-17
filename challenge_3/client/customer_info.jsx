
class Customer_info extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Customer Info</h3>
        <button id="checkout_next" onClick={this.props.setInputField}>Next</button>
      </div>
    );
  }
}

export default Customer_info;