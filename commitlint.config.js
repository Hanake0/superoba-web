module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				'doc',
				'feat',
				'fix',
				'refactor',
				'revert',
				'test',
			],
		],
	},
};
