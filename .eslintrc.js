module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
    extends: [
        'prettier'
      ],
	rules: {
		semi: 'error',
		// 따옴표를 강제화
		'quotes': ['error', 'single'],
		// 사용하지 않은 변수에 대해 경고
		'@typescript-eslint/no-unused-vars': 'warn',
		'react-hooks/rules-of-hooks': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'react/no-deprecated': 'off',
		'react/no-direct-mutation-state': 'off',
		'react/no-is-mounted': 'off',
		'react/no-multi-comp': 'off',
		'react/no-redundant-should-component-update': 'off',
		'react/no-render-return-value': 'off',
		'react/no-set-state': 'off',
		'react/no-string-refs': 'off',
		'react/no-this-in-sfc': 'off',
		'react/no-unknown-property': 'off',
		'react/no-unsafe': 'off',
		'react/no-unused-prop-types': 'off',
		'react/no-unused-state': 'off',
		'react/no-will-update-set-state': 'off',
		'react/prefer-es6-class': 'off',
		'react/prefer-stateless-function': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/require-optimization': 'off',
		'react/require-render-return': 'off',
		'react/self-closing-comp': 'off',
		'react/sort-comp': 'off',
		'react/sort-prop-types': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',
		'react/style-prop-object': 'off',
		'react/void-dom-elements-no-children': 'off'
	}
};
