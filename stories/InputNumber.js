import React from 'react';
import {storiesOf} from '@kadira/storybook';
import InputNumber from '../components/InputNumber';

const onChange = (value) => {
	console.log(value);
};

storiesOf('InputNumber', module)
	.add('InputNumber', () => (
		<div className="rcc-component-container">
			<InputNumber onChange={onChange} />
		</div>
	));
