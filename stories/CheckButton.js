import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CheckButton from '../components/CheckButton';

const onChange = (value, checked) => {
	console.log(`status of [${value}] is ${checked}`);
};

const content = (
	<div>
		<CheckButton
				value="Dress Image"
				img="/images/checkButton.jpg"
				width={40}
				height={40}
				onChange={onChange} />
		<CheckButton
				value="Dress Image"
				img="/images/checkButton.jpg"
				width={40}
				height={40}
				onChange={onChange} />
	</div>
);

storiesOf('CheckButton', module)
	.add('CheckButton', () => (
		<div className="rcc-component-container" style={{textAlign: "left"}}>
			<div style={{fontWeight: "bold"}}>Type One:</div>
			<CheckButton value="As Picture" content="As Picture" width={80} onChange={onChange} />
			<div style={{fontWeight: "bold"}}>Type Two:</div>
			<CheckButton
				value="Blue Green"
				color="#87E1F1"
				onChange={onChange}
				isTooltipVisible={true} />
			<div style={{fontWeight: "bold"}}>Type Three:</div>
			<CheckButton
				value="Blue Green"
				color="#87E1F1"
				onChange={onChange}
				isTooltipVisible={true}
				popContent={content} />
			<div style={{fontWeight: "bold"}}>Type Four:</div>
			<CheckButton
				value="Dress Image"
				img="/images/checkButton.jpg"
				width={40}
				height={40}
				onChange={onChange}
				isTooltipVisible={true} />
		</div>
	));
