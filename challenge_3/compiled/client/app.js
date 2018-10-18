
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
    this.setInputField.bind(this);
  }

  // increment index to switch form
  setInputField(updates) {
    //   if (this.state.index !== 0) {
    //     // update database with new values
    //     console.log(updates);
    //   }
    if (this.state.index === 3) {
      alert('Purchase Complete\nHey, thanks!!');
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

// Customer_info ////////////////////////////////////////////////////////////////////
class Customer_info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      pw: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
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
      React.createElement('input', {
        id: 'first_name',
        type: 'text',
        placeholder: 'first name',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'last_name',
        type: 'text',
        placeholder: 'last name',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'email',
        type: 'text',
        placeholder: 'email',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'pw',
        type: 'text',
        placeholder: 'password',
        onChange: this.handleInputChange.bind(this)
      }),
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
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      ship_zip: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
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
      React.createElement('input', {
        id: 'line1',
        type: 'text',
        placeholder: 'address -- line 1',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'line2',
        type: 'text',
        placeholder: 'address -- line 2',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'city',
        type: 'text',
        placeholder: 'city',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'state',
        type: 'text',
        placeholder: 'state',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'ship_zip',
        type: 'text',
        placeholder: 'zip code',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'phone',
        type: 'text',
        placeholder: 'phone',
        onChange: this.handleInputChange.bind(this)
      }),
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
    this.state = {
      card_number: '',
      exp: '',
      cvv: '',
      bill_zip: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    this.props.handleSubmit(this.state);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
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
      React.createElement('input', {
        id: 'card_number',
        type: 'text',
        placeholder: 'card number',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'exp',
        type: 'text',
        placeholder: 'expiration date',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'cvv',
        type: 'text',
        placeholder: 'cvv',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement('input', {
        id: 'bill_zip',
        type: 'text',
        placeholder: 'zip code',
        onChange: this.handleInputChange.bind(this)
      }),
      React.createElement(
        'button',
        { onClick: this.props.setInputField },
        'Checkout'
      )
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaW5kZXgiLCJzZXRJbnB1dEZpZWxkIiwiYmluZCIsInVwZGF0ZXMiLCJhbGVydCIsInNldFN0YXRlIiwicmVuZGVyIiwiaW5wdXRGaWVsZCIsIkNhcnQiLCJDdXN0b21lcl9pbmZvIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicHciLCJoYW5kbGVTdWJtaXQiLCJlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInZhbHVlIiwiU2hpcHBpbmdfaW5mbyIsImxpbmUxIiwibGluZTIiLCJjaXR5Iiwic2hpcF96aXAiLCJwaG9uZSIsIlBheW1lbnRfaW5mbyIsImNhcmRfbnVtYmVyIiwiZXhwIiwiY3Z2IiwiYmlsbF96aXAiXSwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQ0MsY0FBWUMsS0FBWixFQUFrQjtBQUNoQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBR0EsU0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFDRDs7QUFFRDtBQUNBRCxnQkFBY0UsT0FBZCxFQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNFLFFBQUksS0FBS0osS0FBTCxDQUFXQyxLQUFYLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCSSxZQUFNLGtDQUFOO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUNMLE9BQU8sQ0FBUixFQUFkO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsV0FBS0ssUUFBTCxDQUFjLEVBQUNMLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLENBQTNCLEVBQWQ7QUFDRDtBQUNGOztBQUVEO0FBQ0FNLFdBQVM7QUFDUCxRQUFJQyxVQUFK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QUssTUFGUDtBQUdFLHFCQUFZLGFBSGQ7QUFJRSxrQkFBVSxLQUFLVSxpQkFBTCxDQUF1QmQsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixRQUZGO0FBUUU7QUFDRSxZQUFHLEtBREw7QUFFRSxjQUFLLE1BRlA7QUFHRSxxQkFBWSxpQkFIZDtBQUlFLGtCQUFVLEtBQUtjLGlCQUFMLENBQXVCZCxJQUF2QixDQUE0QixJQUE1QjtBQUpaLFFBUkY7QUFjRTtBQUNFLFlBQUcsS0FETDtBQUVFLGNBQUssTUFGUDtBQUdFLHFCQUFZLEtBSGQ7QUFJRSxrQkFBVSxLQUFLYyxpQkFBTCxDQUF1QmQsSUFBdkIsQ0FBNEIsSUFBNUI7QUFKWixRQWRGO0FBb0JFO0FBQ0UsWUFBRyxVQURMO0FBRUUsY0FBSyxNQUZQO0FBR0UscUJBQVksVUFIZDtBQUlFLGtCQUFVLEtBQUtjLGlCQUFMLENBQXVCZCxJQUF2QixDQUE0QixJQUE1QjtBQUpaLFFBcEJGO0FBMEJFO0FBQUE7QUFBQSxVQUFRLFNBQVMsS0FBS0osS0FBTCxDQUFXRyxhQUE1QjtBQUFBO0FBQUE7QUExQkYsS0FERjtBQThCRDtBQXJEd0M7O0FBd0QzQyxlQUFlUCxHQUFmIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gaW5jcmVtZW50IGluZGV4IHRvIHN3aXRjaCBmb3JtXG4gIHNldElucHV0RmllbGQodXBkYXRlcykge1xuICAvLyAgIGlmICh0aGlzLnN0YXRlLmluZGV4ICE9PSAwKSB7XG4gIC8vICAgICAvLyB1cGRhdGUgZGF0YWJhc2Ugd2l0aCBuZXcgdmFsdWVzXG4gIC8vICAgICBjb25zb2xlLmxvZyh1cGRhdGVzKTtcbiAgLy8gICB9XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5kZXggPT09IDMpIHtcbiAgICAgIGFsZXJ0KCdQdXJjaGFzZSBDb21wbGV0ZVxcbkhleSwgdGhhbmtzISEnKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiAwfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIGZvcm0gdG8gcmVuZGVyIGJhc2VkIG9uIHRoaXMuc3RhdGUuaW5kZXhcbiAgcmVuZGVyKCkge1xuICAgIHZhciBpbnB1dEZpZWxkO1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5pbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBDYXJ0IHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfS8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgQ3VzdG9tZXJfaW5mbyBzZXRJbnB1dEZpZWxkPXt0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKX0gLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBTaGlwcGluZ19pbmZvIHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IFBheW1lbnRfaW5mbyBzZXRJbnB1dEZpZWxkPXt0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKX0gLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgQ2FydCBzZXRJbnB1dEZpZWxkPXt0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKX0gLz47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5BcHAgQ29tcG9uZW50PC9oMz5cbiAgICAgICAge2lucHV0RmllbGR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbi8vIENhcnQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNvbnN0IENhcnQgPSAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8aDM+TXkgQ2FydDwvaDM+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5zZXRJbnB1dEZpZWxkfT5DaGVja291dDwvYnV0dG9uPlxuICA8L2Rpdj5cbik7XG5cbi8vIEN1c3RvbWVyX2luZm8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbmNsYXNzIEN1c3RvbWVyX2luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmaXJzdF9uYW1lOiAnJyxcbiAgICAgIGxhc3RfbmFtZTogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwdzogJydcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+Q3VzdG9tZXIgSW5mbzwvaDM+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmlyc3QgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhc3QgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicHdcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gU2hpcHBpbmdfaW5mbyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY2xhc3MgU2hpcHBpbmdfaW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpbmUxOiAnJyxcbiAgICAgIGxpbmUyOiAnJyxcbiAgICAgIGNpdHk6ICcnLFxuICAgICAgc3RhdGU6ICcnLFxuICAgICAgc2hpcF96aXA6ICcnLFxuICAgICAgcGhvbmU6ICcnLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5TaGlwcGluZyBJbmZvPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsaW5lMVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiYWRkcmVzcyAtLSBsaW5lIDFcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwibGluZTJcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3MgLS0gbGluZSAyXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImNpdHlcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwic3RhdGVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInN0YXRlXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInNoaXBfemlwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ6aXAgY29kZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJwaG9uZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGhvbmVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5zZXRJbnB1dEZpZWxkfT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBQYXltZW50X2luZm8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jbGFzcyBQYXltZW50X2luZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXJkX251bWJlcjogJycsXG4gICAgICBleHA6ICcnLFxuICAgICAgY3Z2OiAnJyxcbiAgICAgIGJpbGxfemlwOiAnJyxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGF5bWVudCBJbmZvPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJjYXJkX251bWJlclwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2FyZCBudW1iZXJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZXhwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY3Z2XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdnZcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiYmlsbF96aXBcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInppcCBjb2RlXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==