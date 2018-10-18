
class Customer_info extends React.Component {
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
        "Customer Info"
      ),
      React.createElement(
        "button",
        { id: "checkout_next", onClick: this.props.setInputField },
        "Next"
      )
    );
  }
}

export default Customer_info;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jdXN0b21lcl9pbmZvLmpzeCJdLCJuYW1lcyI6WyJDdXN0b21lcl9pbmZvIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwic2V0SW5wdXRGaWVsZCJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLGFBQU4sU0FBNEJDLE1BQU1DLFNBQWxDLENBQTRDO0FBQzFDQyxjQUFZQyxLQUFaLEVBQWtCO0FBQ2hCLFVBQU1BLEtBQU47QUFDRDtBQUNEQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BREY7QUFHRTtBQUFBO0FBQUEsVUFBUSxJQUFHLGVBQVgsRUFBMkIsU0FBUyxLQUFLRCxLQUFMLENBQVdFLGFBQS9DO0FBQUE7QUFBQTtBQUhGLEtBREY7QUFPRDtBQVp5Qzs7QUFlNUMsZUFBZU4sYUFBZiIsImZpbGUiOiJjdXN0b21lcl9pbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBDdXN0b21lcl9pbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5DdXN0b21lciBJbmZvPC9oMz5cblxuICAgICAgICA8YnV0dG9uIGlkPVwiY2hlY2tvdXRfbmV4dFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuc2V0SW5wdXRGaWVsZH0+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21lcl9pbmZvOyJdfQ==