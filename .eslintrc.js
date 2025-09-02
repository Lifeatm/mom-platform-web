module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true
	},
	extends: ['plugin:vue/vue3-essential', 'standard', './.eslintrc-auto-import.json'],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: ['vue', '@typescript-eslint'],
	overrides: [{ files: ['*.vue'], rules: { indent: 'off' } }],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'block-spacing': ['error', 'always'], // =>的前后空格
		'comma-dangle': ['error', 'never'], // 对象字面量项尾不能有逗号
		'comma-spacing': 'off', // 逗号前后的空格
		'brace-style': 'error', // 强制在代码块中使用一致的大括号风格
		'no-var': 'error',
		'no-unused-labels': 'error',
		'no-unused-vars': 'warn', // 禁止未使用过的变量
		'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
		'no-restricted-modules': 'error', // 禁用通过 require 加载的指定模块
		'eol-last': 'error', // 要求或禁止文件末尾存在空行
		'vue/script-indent': ['error', 2, { baseIndent: 1 }],
		'import/no-unresolved': 'off',
		'import/extensions': 'off',
		'import/no-absolute-path': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-trailing-spaces': 'off',
		'prefer-regex-literals': 'off', // 禁止使用RegExp构造函数，而使用正则表达式文字
		// 关闭驼峰命名规则
		'vue/multi-word-component-names': 0,
		camelcase: 'warn', // 强制驼峰法命名
		eqeqeq: 'warn', // 要求使用 === 和 !==
		indent: ['error', 2], // 缩进风格
		'space-before-function-paren': ['error', 'never'] // 函数定义时括号前面要不要有空格
	}
}
