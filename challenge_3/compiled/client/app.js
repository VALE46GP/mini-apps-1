import Customer_info from './customer_info.js';
import Cart from './cart.js';
import Shipping_info from './shipping_info.js';
import Payment_info from './payment_info.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allForms: ['cart', 'customer', 'shipping', 'payment'],
      index: 0
    };
    this.setInputField.bind(this);
  }

  setInputField(e) {
    if (this.state.index === 3) {
      alert('Purchase Complete! Hey, Thanks!!');
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }

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
        'Hey cool, an App Component'
      ),
      inputField
    );
  }
}

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkN1c3RvbWVyX2luZm8iLCJDYXJ0IiwiU2hpcHBpbmdfaW5mbyIsIlBheW1lbnRfaW5mbyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwiYWxsRm9ybXMiLCJpbmRleCIsInNldElucHV0RmllbGQiLCJiaW5kIiwiZSIsImFsZXJ0Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJpbnB1dEZpZWxkIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxhQUFQLE1BQTBCLG9CQUExQjtBQUNBLE9BQU9DLElBQVAsTUFBaUIsV0FBakI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLG9CQUExQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsbUJBQXpCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsQ0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixVQUFyQixFQUFpQyxTQUFqQyxDQURDO0FBRVhDLGFBQU87QUFGSSxLQUFiO0FBSUEsU0FBS0MsYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEI7QUFDRDs7QUFFREQsZ0JBQWNFLENBQWQsRUFBaUI7QUFDZixRQUFJLEtBQUtMLEtBQUwsQ0FBV0UsS0FBWCxLQUFxQixDQUF6QixFQUE0QjtBQUMxQkksWUFBTSxrQ0FBTjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxPQUFPLENBQVIsRUFBZDtBQUNELEtBSEQsTUFHTztBQUNMLFdBQUtLLFFBQUwsQ0FBYyxFQUFDTCxPQUFPLEtBQUtGLEtBQUwsQ0FBV0UsS0FBWCxHQUFtQixDQUEzQixFQUFkO0FBQ0Q7QUFDRjs7QUFFRE0sV0FBUztBQUNQLFFBQUlDLFVBQUo7QUFDQSxZQUFRLEtBQUtULEtBQUwsQ0FBV0UsS0FBbkI7QUFDRSxXQUFLLENBQUw7QUFDRU8scUJBQWEsb0JBQUUsSUFBRixJQUFPLGVBQWUsS0FBS04sYUFBTCxDQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBdEIsR0FBYjtBQUNBO0FBQ0YsV0FBSyxDQUFMO0FBQ0VLLHFCQUFhLG9CQUFFLGFBQUYsSUFBZ0IsZUFBZSxLQUFLTixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUEvQixHQUFiO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRUsscUJBQWEsb0JBQUUsYUFBRixJQUFnQixlQUFlLEtBQUtOLGFBQUwsQ0FBbUJDLElBQW5CLENBQXdCLElBQXhCLENBQS9CLEdBQWI7QUFDQTtBQUNGLFdBQUssQ0FBTDtBQUNFSyxxQkFBYSxvQkFBRSxZQUFGLElBQWUsZUFBZSxLQUFLTixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE5QixHQUFiO0FBQ0E7QUFDRjtBQUNFSyxxQkFBYSxvQkFBRSxJQUFGLElBQU8sZUFBZSxLQUFLTixhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUF0QixHQUFiO0FBZEo7O0FBaUJBLFdBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBRUdLO0FBRkgsS0FERjtBQU1EO0FBNUMrQjs7QUErQ2xDLGVBQWVkLEdBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEN1c3RvbWVyX2luZm8gZnJvbSAnLi9jdXN0b21lcl9pbmZvLmpzJztcbmltcG9ydCBDYXJ0IGZyb20gJy4vY2FydC5qcyc7XG5pbXBvcnQgU2hpcHBpbmdfaW5mbyBmcm9tICcuL3NoaXBwaW5nX2luZm8uanMnO1xuaW1wb3J0IFBheW1lbnRfaW5mbyBmcm9tICcuL3BheW1lbnRfaW5mby5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFsbEZvcm1zOiBbJ2NhcnQnLCAnY3VzdG9tZXInLCAnc2hpcHBpbmcnLCAncGF5bWVudCddLFxuICAgICAgaW5kZXg6IDBcbiAgICB9O1xuICAgIHRoaXMuc2V0SW5wdXRGaWVsZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc2V0SW5wdXRGaWVsZChlKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaW5kZXggPT09IDMpIHtcbiAgICAgIGFsZXJ0KCdQdXJjaGFzZSBDb21wbGV0ZSEgSGV5LCBUaGFua3MhIScpXG4gICAgICB0aGlzLnNldFN0YXRlKHtpbmRleDogMH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiB0aGlzLnN0YXRlLmluZGV4ICsgMX0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaW5wdXRGaWVsZDtcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuaW5kZXgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgQ2FydCBzZXRJbnB1dEZpZWxkPXt0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKX0vPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IEN1c3RvbWVyX2luZm8gc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9IC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgaW5wdXRGaWVsZCA9IDwgU2hpcHBpbmdfaW5mbyBzZXRJbnB1dEZpZWxkPXt0aGlzLnNldElucHV0RmllbGQuYmluZCh0aGlzKX0gLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBpbnB1dEZpZWxkID0gPCBQYXltZW50X2luZm8gc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9IC8+O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlucHV0RmllbGQgPSA8IENhcnQgc2V0SW5wdXRGaWVsZD17dGhpcy5zZXRJbnB1dEZpZWxkLmJpbmQodGhpcyl9IC8+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+SGV5IGNvb2wsIGFuIEFwcCBDb21wb25lbnQ8L2gzPlxuICAgICAgICB7aW5wdXRGaWVsZH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==