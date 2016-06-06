import {configure} from '@kadira/storybook';

function loadStories() {
	require('../stories/lib');
	require('../stories/InputNumber');
	require('../stories/CheckButton');
	require('../stories/CheckButtonGroup');
	require('../stories/ColorSelectorGroup');
	// require as many as stories you need.
}

configure(loadStories, module);
