
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
        "button",
        { id: "checkout_next", onClick: this.props.setInputField },
        "Checkout"
      )
    );
  }
}

export default Cart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jYXJ0LmpzeCJdLCJuYW1lcyI6WyJDYXJ0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwic2V0SW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLElBQU4sU0FBbUJDLE1BQU1DLFNBQXpCLENBQW1DO0FBQ2pDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDtBQUNEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxJQUFHLGVBQVgsRUFBMkIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLGFBQS9DO0FBQUE7QUFBQTtBQUZGLEtBREY7QUFNRDtBQVhnQzs7QUFjbkMsZUFBZU4sSUFBZiIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBDYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5NeSBDYXJ0PC9oMz5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNoZWNrb3V0X25leHRcIiBvbkNsaWNrPXt0aGlzLnByb3BzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcnQ7Il19