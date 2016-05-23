import '../../style/InputNumber/style.css';

import React from 'react';
import {Button, Icon, Input} from 'antd';

const noop = () => {};

const InputNumber = React.createClass({
	propTypes: {
		onChange: React.PropTypes.func,
	},
	getDefaultProps() {
		return {
			onChange: noop,
		};
	},
	getInitialState() {
		return {
			value: 1,
			minusStatus: true,
			plusStatus: false,
		};
	},
	onInputChange(e) {
		const value = e.target.value;
		const reg = new RegExp("^[0-9]*$");
		if (reg.test(value)) {
			this.setState({
				value: value,
			});
			this.props.onChange(value);
		}
	},
	onBlur(e) {
		const value = e.target.value;
		if (value === "") {
			this.setState({
				value: 1,
			});
			this.props.onChange(1);
		}
	},
	onPlus() {
		let value = this.state.value;
		this.setState({
			value: ++value,
			minusStatus: false,
		});
		this.props.onChange(value);
	},
	onMinus() {
		let value = this.state.value;
		if (value > 1) {
			this.setState({
				value: --value,
			});
			this.props.onChange(value);
		} else {
			this.setState({
				minusStatus: true,
			});
		}
	},
	render() {
		return (
			<div className="rcc-inputNumber">
				<Button className="rcc-inputNumber-minus"
					onClick={this.onMinus}
					disabled={this.state.minusStatus}>
					<Icon type="minus" />
				</Button>
				<Input
					className="rcc-inputNumber-input"
					value={this.state.value}
					onChange={this.onInputChange}
					onBlur={this.onBlur} />
				<Button className="rcc-inputNumber-plus"
					onClick={this.onPlus}
					disabled={this.state.plusStatus}>
					<Icon type="plus" />
				</Button>
			</div>
		);
	}
});

module.exports = InputNumber;
