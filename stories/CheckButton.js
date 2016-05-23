import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CheckButton from '../components/CheckButton';

const onChange = (value, checked) => {
	console.log(`status of [${value}] is ${checked}`);
};

storiesOf('CheckButton', module)
	.add('CheckButton', () => (
		<div className="rcc-component-container">
			<CheckButton value="As Picture" content="As Picture" style={{width: "72px"}} onChange={onChange} />
			<CheckButton value="Blue Green" color="#87E1F1" onChange={onChange} />
			<CheckButton value="Dress Image" img="/images/checkButton.jpg" onChange={onChange} />
		</div>
	));
