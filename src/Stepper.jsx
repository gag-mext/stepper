import '../style';
import React from 'react';
import classNames from 'classnames';
import RcInputNumber from 'rc-input-number';
import Icon from '@gag/icon';

export default class Stepper extends React.Component {

  render() {
    const { className, showNumber, ...restProps } = this.props;
    const stepperClass = classNames({
      [className]: !!className,
      ['showNumber']: !!showNumber,
    });

    return (
      <RcInputNumber
        upHandler={<Icon type={require('../style/assets/plus.svg')} size="xxs" />}
        downHandler={<Icon type={require('../style/assets/minus.svg')} size="xxs" />}
        useTouch
        {...restProps}
        ref="inputNumber"
        className={stepperClass}
      />
    );
  }
}
Stepper.defaultProps = {
  prefixCls: 'am-stepper',
  step: 1,
  readOnly: false,
  showNumber: false,
  focusOnUpDown: false,
};
Stepper.propTypes = {
  min:React.PropTypes.number,
  max:React.PropTypes.number,
  step:React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.string
  ]),
  readOnly: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  autoFocus: React.PropTypes.bool,
  value:React.PropTypes.number,
  defaultValue:React.PropTypes.number,
  onChange:React.PropTypes.func,
  style:React.PropTypes.object,
  /* web only */
  prefixCls: React.PropTypes.string,
  name: React.PropTypes.string,
  showNumber: React.PropTypes.bool,
  className: React.PropTypes.string,



    type:React.PropTypes.oneOf(['primary', 'warning','ghost']),
    size:React.PropTypes.oneOf(['large','small']),
    activeStyle:React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.object
    ]),
    disabled:React.PropTypes.bool,
    onClick:React.PropTypes.func,
    style:React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.array
    ]),
    /** web only */
    inline: React.PropTypes.bool,
    across: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    icon: React.PropTypes.any,
    prefixCls: React.PropTypes.string,
    className: React.PropTypes.string
};
Stepper.displayName = "Stepper";
module.exports=Stepper;
