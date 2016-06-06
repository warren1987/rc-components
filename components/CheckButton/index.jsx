import '../../style/CheckButton/style.css';

import React from 'react';
import {Button, Icon, Input, Popover} from 'antd';
import classNames from 'classnames';

const noop = () => {};

const CheckButton = React.createClass({
	propTypes: {
		isChecked : React.PropTypes.bool,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		value: React.PropTypes.string,
		content: React.PropTypes.string,
		popContent: React.PropTypes.object,
		color: React.PropTypes.string,
		img: React.PropTypes.string,
		onChange: React.PropTypes.func,
		isTooltipVisible: React.PropTypes.bool,
	},
	getDefaultProps() {
		return {
			isChecked: false,
			width: 21,
			height: 21,
			color: "#FFF",
			onChange: noop,
			isTooltipVisible: false,
		};
	},
	getInitialState() {
		return {
			isChecked: this.props.isChecked,
		};
	},
	componentWillReceiveProps(nextProps) {
		if ('isChecked' in nextProps) {
			this.setState({
				isChecked: nextProps.isChecked,
			});
		}
	},
	onClick() {
		const isChecked = !this.state.isChecked;
		this.setState({
			isChecked: isChecked,
		});
		this.props.onChange(this.props.value, isChecked);
	},
	render() {
		const {width, height, onChange, color, img, isTooltipVisible, ...restProps} = this.props;
		const checkCls = classNames({
			'rcc-CheckButton': true,
			'rcc-CheckButton-checked': this.state.isChecked,
		});
		let containerStyle = {
			width: width + 6,
			height: height + 6,
			"line-height": height + 6,
		};
		let contentStyle = {
			width: width,
			height: height,
			"line-height": height,
		};
		let backgroundStyle = {
			backgroundColor: color,
		};
		if (img) {
			backgroundStyle = {
				backgroundImage: `url(${img})`,
				backgroundSize: "cover",
			};
		}
		let popContent = (
			<div>
				<div className="rcc-popover-content" style={backgroundStyle}/>
				<div>{this.props.value}</div>
			</div>
		);
		if (this.props.popContent) {
			popContent = this.props.popContent;
		}
		let mainContent = (
			<div className="rcc-CheckButton-content" style={{...backgroundStyle, ...contentStyle}}>
				{this.props.content}
			</div>
		);
		if (isTooltipVisible) {
			mainContent = (
				<Popover content={popContent} overlayClassName="rcc-popover-inner">
					<div className="rcc-CheckButton-content" style={{...backgroundStyle, ...contentStyle}}>
						{this.props.content}
					</div>
				</Popover>
			);
		}
		return (
			<a className={checkCls} onClick={this.onClick} title={isTooltipVisible ? "" : this.props.value} style={containerStyle}>
				{mainContent}
			</a>
		);
	}
});

module.exports = CheckButton;
