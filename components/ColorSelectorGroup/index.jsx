import '../../style/ColorSelectorGroup/style.css';

import React from 'react';
import CheckButton from '../CheckButton';
import CheckButtonGroup from '../CheckButtonGroup';
import {colorGroup1, colorGroup2, colorGroup3} from './Colors';

const noop = () => {};
const defaultContent = "As Picture";
const images = [
	{
		value: "As Picture 1",
		img: "/images/checkButton.jpg",
	}, {
		value: "As Picture 2",
		img: "/images/checkButton.jpg",
	}, {
		value: "As Picture 3",
		img: "/images/checkButton.jpg",
	}
];

const ColorSelectorGroup = React.createClass({
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
			content: defaultContent,
			popCheckedValue: null,
			checkedValue: null,
		};
	},
	onChange(value, checked) {
		console.log(`status of [${value}] is ${checked}`);
		let content = this.state.content;
		let checkedValue = this.state.checkedValue;
		let popCheckedValue = this.state.popCheckedValue;
		if (value !== defaultContent) {
			if (checked) {
				content = defaultContent;
				checkedValue = value;
				popCheckedValue = null;
			} else {
				checkedValue = null;
			}
		}
		this.setState({
			content: content,
			checkedValue: checkedValue,
			popCheckedValue: popCheckedValue,
		});
	},
	onPopContentChange(value, checked) {
		console.log(`status of [${value}] is ${checked}`);
		let content = defaultContent;
		let checkedValue = this.state.checkedValue;
		let popCheckedValue = null;
		if (checked) {
			content = value;
			checkedValue = defaultContent;
			popCheckedValue = value;
		}
		this.setState({
			content: content,
			checkedValue: checkedValue,
			popCheckedValue: popCheckedValue,
		});
	},
	render() {
		const popContent = (
			<CheckButtonGroup
				options={images}
				checkedValue={this.state.popCheckedValue}
				onChange={this.onPopContentChange}
				width={80}
				height={80} />
		);
		return (
			<div className="rcc-ColorSelectorGroup-container">
				<CheckButton
					value={defaultContent}
					content={this.state.content}
					isChecked={this.state.popCheckedValue !== null}
					width={75}
					onChange={this.onChange}
					isTooltipVisible={true}
					popContent={popContent} />
				<CheckButtonGroup
					options={colorGroup1}
					checkedValue={this.state.checkedValue}
					onChange={this.onChange}
					isTooltipVisible={true} />
				<CheckButtonGroup
					options={colorGroup2}
					checkedValue={this.state.checkedValue}
					onChange={this.onChange}
					isTooltipVisible={true} />
				<CheckButtonGroup
					options={colorGroup3}
					checkedValue={this.state.checkedValue}
					onChange={this.onChange}
					isTooltipVisible={true} />
			</div>
		);
	}
});

module.exports = ColorSelectorGroup;
