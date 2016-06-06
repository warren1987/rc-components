import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ColorSelectorGroup from '../components/ColorSelectorGroup';

const onChange = (value, checked) => {
	console.log(`status of [${value}] is ${checked}`);
};

storiesOf('ColorSelectorGroup', module)
	.add('ColorSelectorGroup', () => (
		<div className="rcc-component-container">
			<ColorSelectorGroup onChange={onChange} />
		</div>
	));
