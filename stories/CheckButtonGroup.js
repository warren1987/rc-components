import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CheckButtonGroup from '../components/CheckButtonGroup';
import {colorGroup1} from '../components/ColorSelectorGroup/Colors';

const onChange = (value, checked) => {
	console.log(`status of group is ${checked}, value is:[${value}]`);
};

storiesOf('CheckButtonGroup', module)
	.add('CheckButtonGroup', () => (
		<div className="rcc-component-container">
			<CheckButtonGroup options={colorGroup1} onChange={onChange} isTooltipVisible={true} />
		</div>
	));

const images = [
	{
		value: "Dress Image1",
		img: "/images/checkButton.jpg",
	}, {
		value: "Dress Image2",
		img: "/images/checkButton.jpg",
	}, {
		value: "Dress Image3",
		img: "/images/checkButton.jpg",
	}
];

storiesOf('CheckButtonGroup', module)
	.add('CheckButtonImageGroup', () => (
		<div className="rcc-component-container">
			<CheckButtonGroup options={images} onChange={onChange} width={100} height={100}/>
		</div>
	));
