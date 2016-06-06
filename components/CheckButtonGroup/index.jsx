import '../../style/CheckButtonGroup/style.css';

import React from 'react';
import CheckButton from '../CheckButton';

const noop = () => {};

const CheckButtonGroup = React.createClass({
	propTypes: {
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		options: React.PropTypes.array,
		checkedValue: React.PropTypes.string,
		isTooltipVisible: React.PropTypes.bool,
		onChange: React.PropTypes.func,
	},
	getDefaultProps() {
		return {
			// properties for self
			options: [],
			checkedValue: null,
			onChange: noop,
			// properties for CheckButton
			width: 21,
			height: 21,
			isTooltipVisible: false,
		};
	},
	getInitialState() {
		return {
			checkedValue: this.props.checkedValue,
		};
	},
	componentWillReceiveProps(nextProps) {
		if ('checkedValue' in nextProps) {
			this.setState({
				checkedValue: nextProps.checkedValue,
			});
		}
	},
	onChange(value, isChecked) {
		let checkedValue = null;
		if (isChecked) {
			checkedValue = value;
		}
		this.setState({
			checkedValue: checkedValue,
		});
		this.props.onChange(checkedValue, isChecked);
	},
	render() {
		let index = 0;
		const {options, checkedValue, onChange, ...restProps} = this.props;
		return (
			<div className="rcc-CheckButtonGroup-container">
				{
					options.map(item => {
						let isChecked = this.state.checkedValue === item.value;
						return (
							<CheckButton
								key={index++}
								isChecked={isChecked}
								onChange={this.onChange}
								{...item} 
								{...restProps} />
						);
					})
				}
			</div>
		);
	}
});

module.exports = CheckButtonGroup;
