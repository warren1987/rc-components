import '../../style/CheckButton/style.css';

import React from 'react';
import {Button, Icon, Input} from 'antd';
import classNames from 'classnames';

const noop = () => {};

const CheckButton = React.createClass({
	propTypes: {
		value: React.PropTypes.string,
		content: React.PropTypes.string,
		color: React.PropTypes.string,
		img: React.PropTypes.string,
		onChange: React.PropTypes.func,
	},
	getDefaultProps() {
		return {
			onChange: noop,
		};
	},
	getInitialState() {
		return {
			checked: false,
		};
	},
	onClick() {
		const checked = !this.state.checked;
		this.setState({
			checked: checked,
		});
		this.props.onChange(this.props.value, checked);
	},
	render() {
		const {onChange, color, img, style, ...restProps} = this.props;
		const checkCls = classNames({
			'rcc-CheckButton': true,
			'rcc-CheckButton-checked': this.state.checked,
		});
		let cs = {};
		if (color) {
			cs = {
				backgroundColor: color
			};
		} else if (img) {
			cs = {
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
			};
		}
		if (style) {
			cs = {
				...cs,
				...style,
			}
		}
		return (
			<a className={checkCls} onClick={this.onClick} title={this.props.value}>
				<div className="rcc-CheckButton-content" style={cs}>
					{this.props.content}
				</div>
			</a>
		);
	}
});

module.exports = CheckButton;
