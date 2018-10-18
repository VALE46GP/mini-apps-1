
class App extends React.Component {
  constructor(props) {
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
      alert('Purchase Complete! Hey, Thanks!!');
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

  // determine which form to render based on this.state.index
  render() {
    var inputField;
    switch (this.state.index) {
      case 0:
        inputField = React.createElement(Cart, { setInputField: this.setInputField.bind(this) });
        break;
      case 1:
        inputField = React.createElement(Customer_info, { setInputField: this.setInputField.bind(this) });
        break;
      case 2:
        inputField = React.createElement(Shipping_info, { setInputField: this.setInputField.bind(this) });
        break;
      case 3:
        inputField = React.createElement(Payment_info, { setInputField: this.setInputField.bind(this) });
        break;
      default:
        inputField = React.createElement(Cart, { setInputField: this.setInputField.bind(this) });
    }

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'App Component'
      ),
      inputField
    );
  }
}

// Cart /////////////////////////////////////////////////////////////////////////////
const Cart = props => React.createElement(
  'div',
  null,
  React.createElement(
    'h3',
    null,
    'My Cart'
  ),
  React.createElement(
    'button',
    { onClick: props.setInputField },
    'Checkout'
  )
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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      pw: ''
    };
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Customer Info'
      ),
      React.createElement(
        'button',
        { onClick: this.props.setInputField },
        'Checkout'
      )
    );
  }
}

// Shipping_info ////////////////////////////////////////////////////////////////////
class Shipping_info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Shipping Info'
      ),
      React.createElement(
        'button',
        { onClick: this.props.setInputField },
        'Checkout'
      )
    );
  }
}

// Payment_info /////////////////////////////////////////////////////////////////////
class Payment_info extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h3',
        null,
        'Payment Info'
      ),
      React.createElement(
        'button',
        { onClick: this.props.setInputField },
        'Checkout'
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaW5kZXgiLCJuYW1lIiwiZW1haWwiLCJzZXRJbnB1dEZpZWxkIiwiYmluZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpbnB1dEZpZWxkIiwiQ2FydCIsIkN1c3RvbWVyX2luZm8iLCJwdyIsIlNoaXBwaW5nX2luZm8iLCJQYXltZW50X2luZm8iXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFrQjtBQUNoQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sQ0FESTtBQUVYQyxZQUFNLEVBRks7QUFHWEMsYUFBTztBQUhJLEtBQWI7QUFLQSxTQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQUNEOztBQUVEO0FBQ0FELGdCQUFjRSxDQUFkLEVBQWlCO0FBQ2ZBLE1BQUVDLGNBQUY7QUFDQSxRQUFJLEtBQUtQLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF6QixFQUE0QjtBQUMxQk8sWUFBTSxrQ0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDUixPQUFPLENBQVIsRUFBZDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtRLFFBQUwsQ0FBYyxFQUFDUixPQUFPLEtBQUtELEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUEzQixFQUFkO0FBQ0Q7QUFDRjs7QUFFRDtBQUNBUyxXQUFTO0FBQ1AsUUFBSUMsVUFBSjtBQUNBLFlBQVEsS0FBS1gsS0FBTCxDQUFXQyxLQUFuQjtBQUNFLFdBQUssQ0FBTDtBQUNFVSxxQkFBYSxvQkFBRSxJQUFGLElBQU8sZUFBZSxLQUFLUCxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF0QixHQUFiO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRU0scUJBQWEsb0JBQUUsYUFBRixJQUFnQixlQUFlLEtBQUtQLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQS9CLEdBQWI7QUFDQTtBQUNGLFdBQUssQ0FBTDtBQUNFTSxxQkFBYSxvQkFBRSxhQUFGLElBQWdCLGVBQWUsS0FBS1AsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBL0IsR0FBYjtBQUNBO0FBQ0YsV0FBSyxDQUFMO0FBQ0VNLHFCQUFhLG9CQUFFLFlBQUYsSUFBZSxlQUFlLEtBQUtQLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQTlCLEdBQWI7QUFDQTtBQUNGO0FBQ0VNLHFCQUFhLG9CQUFFLElBQUYsSUFBTyxlQUFlLEtBQUtQLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQXRCLEdBQWI7QUFkSjs7QUFpQkEsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFR007QUFGSCxLQURGO0FBTUQ7QUFoRCtCOztBQW1EbEM7QUFDQSxNQUFNQyxPQUFRYixLQUFELElBQ1g7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGO0FBRUU7QUFBQTtBQUFBLE1BQVEsU0FBU0EsTUFBTUssYUFBdkI7QUFBQTtBQUFBO0FBRkYsQ0FERjs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTVMsYUFBTixTQUE0QmpCLE1BQU1DLFNBQWxDLENBQTRDO0FBQzFDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEUsWUFBTSxFQURLO0FBRVhDLGFBQU8sRUFGSTtBQUdYVyxVQUFJO0FBSE8sS0FBYjtBQUtEO0FBQ0RKLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFRLFNBQVMsS0FBS1gsS0FBTCxDQUFXSyxhQUE1QjtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUQ7QUFoQnlDOztBQW1CNUM7QUFDQSxNQUFNVyxhQUFOLFNBQTRCbkIsTUFBTUMsU0FBbEMsQ0FBNEM7QUFDMUNDLGNBQVlDLEtBQVosRUFBa0I7QUFDaEIsVUFBTUEsS0FBTjtBQUNEO0FBQ0RXLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFRLFNBQVMsS0FBS1gsS0FBTCxDQUFXSyxhQUE1QjtBQUFBO0FBQUE7QUFGRixLQURGO0FBTUQ7QUFYeUM7O0FBYzVDO0FBQ0EsTUFBTVksWUFBTixTQUEyQnBCLE1BQU1DLFNBQWpDLENBQTJDO0FBQ3pDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDtBQUNEVyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxTQUFTLEtBQUtYLEtBQUwsQ0FBV0ssYUFBNUI7QUFBQTtBQUFBO0FBRkYsS0FERjtBQU1EO0FBWHdDOztBQWMzQyxlQUFlVCxHQUFmIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IDAsXG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJ1xuICAgIH07XG4gICAgdGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBpbmNyZW1lbnQgaW5kZXggdG8gc3dpdGNoIGZvcm1cbiAgc2V0SW5wdXRGaWVsZChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmluZGV4ID09PSAzKSB7XG4gICAgICBhbGVydCgnUHVyY2hhc2UgQ29tcGxldGUhIEhleSwgVGhhbmtzISEnKVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5kZXg6IDB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDF9KTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hpY2ggZm9ybSB0byByZW5kZXIgYmFzZWQgb24gdGhpcy5zdGF0ZS5pbmRleFxuICByZW5kZXIoKSB7XG4gICAgdmFyIGlucHV0RmllbGQ7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IENhcnQgc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9Lz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBDdXN0b21lcl9pbmZvIHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IFNoaXBwaW5nX2luZm8gc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9IC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgUGF5bWVudF9pbmZvIHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBDYXJ0IHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkFwcCBDb21wb25lbnQ8L2gzPlxuICAgICAgICB7aW5wdXRGaWVsZH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gQ2FydCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgQ2FydCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMz5NeSBDYXJ0PC9oMz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuLy8gY2xhc3MgQ2FydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKXtcbi8vICAgICBzdXBlcihwcm9wcyk7XG4vLyAgIH1cbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8ZGl2PlxuLy8gICAgICAgICA8aDM+TXkgQ2FydDwvaDM+XG4vLyAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVZhbHVlLmJpbmQodGhpcyl9Lz5cbi8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIEN1c3RvbWVyX2luZm8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNsYXNzIEN1c3RvbWVyX2luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHB3OiAnJ1xuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+Q3VzdG9tZXIgSW5mbzwvaDM+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zZXRJbnB1dEZpZWxkfT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBTaGlwcGluZ19pbmZvIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jbGFzcyBTaGlwcGluZ19pbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TaGlwcGluZyBJbmZvPC9oMz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIFBheW1lbnRfaW5mbyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNsYXNzIFBheW1lbnRfaW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGF5bWVudCBJbmZvPC9oMz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=