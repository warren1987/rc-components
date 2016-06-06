module.exports = {
	rules: {
		// 自定义如下常用配置，报错级别：【0，正常】、【1，警告】、【2，错误】，其中默认为2
		eqeqeq: 1,                                     // 使用==，而不使用===
		indent: [2, "tab"],
		quotes: 0,
		semi: [2, "always"],
		"comma-dangle": [0, 'always-multiline'],       // 在函数或语句块末行没有逗号
		"eol-last": 1,                                 // 文件末行不是空行
		"func-names": 1,                               // 使用匿名函数
		"linebreak-style": [2, "unix"],
		"max-len": 0,
		"new-cap": 1,                                  // $.Diferred()，如果首字母是大写，必须是构造函数
		"no-console": 1,                               // 有console.log打印信息
		"no-else-return": 0,                           // 在else之前有return语句（在if中）
		"no-extend-native": 1,
		"no-param-reassign": [1, {props: true}],
		"no-unused-vars": 1,                           // 定义未使用变量或函数
		"object-curly-spacing": [1, "never"],
		"object-shorthand": 1,
		"prefer-arrow-callback": 1,
		"prefer-const": 1,                             // 从未被修改的变量被定义为let型，而不是const型
		"prefer-template": 1,
		"react/jsx-boolean-value": [0, "never"],
		"react/jsx-indent-props": [0, 'tab'],
		"react/jsx-no-bind": 1,
		"react/jsx-closing-bracket-location": [0, "after-props"],
		"react/prefer-es6-class": [0, 'never'],
		"react/prefer-stateless-function": 0,
		"react/prop-types": 1,                         // 引用本组件中未声明属性，如this.props.name
		"space-before-function-paren": 1,
	},
	env: {
		es6: true,
		node: true
	},
	extends: "airbnb",
	ecmaFeatures: {
		jsx: true,
		experimentalObjectRestSpread: true,
	},
	plugins: [
		"react"
	]
};
