
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
    console.log(updates);
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
      data: JSON.stringify(this.state), // this.state is undefined!!
      success: data => {
        this.props.setInputField();
      }
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
        { onClick: this.submit },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiaW5kZXgiLCJzZXRJbnB1dEZpZWxkIiwiYmluZCIsInVwZGF0ZXMiLCJjb25zb2xlIiwibG9nIiwiYWxlcnQiLCJzZXRTdGF0ZSIsInJlbmRlciIsImlucHV0RmllbGQiLCJDYXJ0IiwiQ3VzdG9tZXJfaW5mbyIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJlbWFpbCIsInB3Iiwic3VibWl0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwiY29udGVudFR5cGUiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInN1Y2Nlc3MiLCJTaGlwcGluZ19pbmZvIiwibGluZTEiLCJsaW5lMiIsImNpdHkiLCJzaGlwX3ppcCIsInBob25lIiwiUGF5bWVudF9pbmZvIiwiY2FyZF9udW1iZXIiLCJleHAiLCJjdnYiLCJiaWxsX3ppcCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFHQSxTQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QjtBQUNEOztBQUVEO0FBQ0FELGdCQUFjRSxPQUFkLEVBQXVCO0FBQ3JCQyxZQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxRQUFJLEtBQUtKLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixDQUF6QixFQUE0QjtBQUMxQk0sWUFBTSxrQ0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDUCxPQUFPLENBQVIsRUFBZDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtPLFFBQUwsQ0FBYyxFQUFD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O0FBQ0UsWUFBRyxhQURMO0FBRUUsY0FBSyxNQUZQO0FBR0UscUJBQVksYUFIZDtBQUlFLGtCQUFVLEtBQUtTLGlCQUFMLENBQXVCZixJQUF2QixDQUE0QixJQUE1QjtBQUpaLFFBRkY7QUFRRTtBQUNFLFlBQUcsS0FETDtBQUVFLGNBQUssTUFGUDtBQUdFLHFCQUFZLGlCQUhkO0FBSUUsa0JBQVUsS0FBS2UsaUJBQUwsQ0FBdUJmLElBQXZCLENBQTRCLElBQTVCO0FBSlosUUFSRjtBQWNFO0FBQ0UsWUFBRyxLQURMO0FBRUUsY0FBSyxNQUZQO0FBR0UscUJBQVksS0FIZDtBQUlFLGtCQUFVLEtBQUtlLGlCQUFMLENBQXVCZixJQUF2QixDQUE0QixJQUE1QjtBQUpaLFFBZEY7QUFvQkU7QUFDRSxZQUFHLFVBREw7QUFFRSxjQUFLLE1BRlA7QUFHRSxxQkFBWSxVQUhkO0FBSUUsa0JBQVUsS0FBS2UsaUJBQUwsQ0FBdUJmLElBQXZCLENBQTRCLElBQTVCO0FBSlosUUFwQkY7QUEwQkU7QUFBQTtBQUFBLFVBQVEsU0FBUyxLQUFLSixLQUFMLENBQVdHLGFBQTVCO0FBQUE7QUFBQTtBQTFCRixLQURGO0FBOEJEO0FBckR3Qzs7QUF3RDNDLGVBQWVQLEdBQWY7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgICB0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8vIGluY3JlbWVudCBpbmRleCB0byBzd2l0Y2ggZm9ybVxuICBzZXRJbnB1dEZpZWxkKHVwZGF0ZXMpIHtcbiAgICBjb25zb2xlLmxvZyh1cGRhdGVzKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5pbmRleCA9PT0gMykge1xuICAgICAgYWxlcnQoJ1B1cmNoYXNlIENvbXBsZXRlXFxuSGV5LCB0aGFua3MhIScpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5kZXg6IDB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDF9KTtcbiAgICB9XG4gIH1cblxuICAvLyBkZXRlcm1pbmUgd2hpY2ggZm9ybSB0byByZW5kZXIgYmFzZWQgb24gdGhpcy5zdGF0ZS5pbmRleFxuICByZW5kZXIoKSB7XG4gICAgdmFyIGlucHV0RmllbGQ7XG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IENhcnQgc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9Lz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBDdXN0b21lcl9pbmZvIHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IFNoaXBwaW5nX2luZm8gc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9IC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgUGF5bWVudF9pbmZvIHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBDYXJ0IHNldElucHV0RmllbGQ9e3RoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpfSAvPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPkFwcCBDb21wb25lbnQ8L2gzPlxuICAgICAgICB7aW5wdXRGaWVsZH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gQ2FydCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY29uc3QgQ2FydCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxoMz5NeSBDYXJ0PC9oMz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLnNldElucHV0RmllbGR9PkNoZWNrb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuLy8gQ3VzdG9tZXJfaW5mbyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY2xhc3MgQ3VzdG9tZXJfaW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpcnN0X25hbWU6ICcnLFxuICAgICAgbGFzdF9uYW1lOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHB3OiAnJ1xuICAgIH07XG4gICAgdGhpcy5zdWJtaXQgPSB0aGlzLnN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy8gaGFuZGxlU3VibWl0KCkge1xuICAvLyAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMuc3RhdGUpO1xuICAvLyB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIC8vIHVwZGF0ZSBkYiAmIGludm9rZSBzZXRJbnB1dEZpZWxkICh0aGUgY2IgZnJvbSBBcHApXG4gIHN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICAkLmFqYXgoJy9jdXN0b21lcl9pbmZvJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSksICAgICAvLyB0aGlzLnN0YXRlIGlzIHVuZGVmaW5lZCEhXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnNldElucHV0RmllbGQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+Q3VzdG9tZXIgSW5mbzwvaDM+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZmlyc3RfbmFtZVwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmlyc3QgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJsYXN0X25hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImxhc3QgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicHdcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc3VibWl0fT5DaGVja291dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyBTaGlwcGluZ19pbmZvIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5jbGFzcyBTaGlwcGluZ19pbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGluZTE6ICcnLFxuICAgICAgbGluZTI6ICcnLFxuICAgICAgY2l0eTogJycsXG4gICAgICBzdGF0ZTogJycsXG4gICAgICBzaGlwX3ppcDogJycsXG4gICAgICBwaG9uZTogJycsXG4gICAgfTtcbiAgICAvLyB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXQoKSB7XG4gIC8vICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4gIC8vIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+U2hpcHBpbmcgSW5mbzwvaDM+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwibGluZTFcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImFkZHJlc3MgLS0gbGluZSAxXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImxpbmUyXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJhZGRyZXNzIC0tIGxpbmUgMlwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJjaXR5XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjaXR5XCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInN0YXRlXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJzdGF0ZVwiXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJzaGlwX3ppcFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiemlwIGNvZGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBob25lXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gUGF5bWVudF9pbmZvIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuY2xhc3MgUGF5bWVudF9pbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2FyZF9udW1iZXI6ICcnLFxuICAgICAgZXhwOiAnJyxcbiAgICAgIGN2djogJycsXG4gICAgICBiaWxsX3ppcDogJycsXG4gICAgfTtcbiAgICAvLyB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXQoKSB7XG4gIC8vICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZSk7XG4gIC8vIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGF5bWVudCBJbmZvPC9oMz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJjYXJkX251bWJlclwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiY2FyZCBudW1iZXJcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiZXhwXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJleHBpcmF0aW9uIGRhdGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY3Z2XCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjdnZcIlxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiYmlsbF96aXBcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInppcCBjb2RlXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+Q2hlY2tvdXQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuLypcbiQuYWpheCgnL2N1c3RvbWVyX2luZm8nLCB7XG4gIG1ldGhvZDogJ1BPU1QnLFxuICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgaXRlbTogdGhpcy5zdGF0ZS5jdXJySXRlbSxcbiAgICBxdWFudGl0eTogdGhpcy5zdGF0ZS5jdXJyUXVhbnRpdHlcbiAgfSksXG4gIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3Vyckl0ZW06ICcnLCBjdXJyUXVhbnRpdHk6ICcnfSk7XG4gICAgdGhpcy5wcm9wcy5vbnN1Y2Nlc3MoKTtcbiAgfVxufSk7XG4gKi8iXX0=