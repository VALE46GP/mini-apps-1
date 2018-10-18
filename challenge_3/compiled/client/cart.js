
class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h3",
        null,
        "My Cart"
      ),
      React.createElement(
        "form",
        { onSubmit: this.handleSubmit },
        React.createElement("input", { id: "currItem", onChange: this.handleInputChange, value: this.state.currItem }),
        React.createElement("input", { id: "currQuantity", onChange: this.handleInputChange, value: this.state.currQuantity }),
        React.createElement(
          "button",
          { id: "checkout_next", onClick: this.props.setInputField },
          "Checkout"
        )
      )
    );
  }
}

export default Cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jYXJ0LmpzeCJdLCJuYW1lcyI6WyJDYXJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJzdGF0ZSIsImN1cnJJdGVtIiwiY3VyclF1YW50aXR5Iiwic2V0SW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLElBQU4sU0FBbUJDLE1BQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDtBQUNEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBTSxVQUFVLEtBQUtDLFlBQXJCO0FBQ0UsdUNBQU8sSUFBRyxVQUFWLEVBQXFCLFVBQVUsS0FBS0MsaUJBQXBDLEVBQXVELE9BQU8sS0FBS0MsS0FBTCxDQUFXQyxRQUF6RSxHQURGO0FBRUUsdUNBQU8sSUFBRyxjQUFWLEVBQXlCLFVBQVUsS0FBS0YsaUJBQXhDLEVBQTJELE9BQU8sS0FBS0MsS0FBTCxDQUFXRSxZQUE3RSxHQUZGO0FBR0U7QUFBQTtBQUFBLFlBQVEsSUFBRyxlQUFYLEVBQTJCLFNBQVMsS0FBS04sS0FBTCxDQUFXTyxhQUEvQztBQUFBO0FBQUE7QUFIRjtBQUZGLEtBREY7QUFVRDtBQWZnQzs7QUFrQm5DLGVBQWVYLElBQWYiLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+TXkgQ2FydDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IGlkPVwiY3Vyckl0ZW1cIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX0gdmFsdWU9e3RoaXMuc3RhdGUuY3Vyckl0ZW19IC8+XG4gICAgICAgICAgPGlucHV0IGlkPVwiY3VyclF1YW50aXR5XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJRdWFudGl0eX0gLz5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwiY2hlY2tvdXRfbmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJ0OyJdfQ==