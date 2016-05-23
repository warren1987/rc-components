#rc-components

#InputNumber

```js
import {InputNumber} from 'rc-components';

const onChange = (value) => {
	console.log(value);
};
<InputNumber onChange={onChange} />
```
Demo:

![InputNumber Sample](assets/images/InputNumber.png)

#CheckButton(Color Selector)

```js
import {CheckButton} from 'rc-components';

const onChange = (value, checked) => {
	console.log(`status of [${value}] is ${checked}`);
};

<CheckButton value="Blue Green" color="#87E1F1" onChange={onChange} />
```
Demo(Inactive):

![InputNumber Sample](assets/images/CheckButton_inactive.png)

Demo(Active):

![InputNumber Sample](assets/images/CheckButton_active.png)
