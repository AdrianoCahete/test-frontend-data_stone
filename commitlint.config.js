// https://commitlint.js.org/guides/getting-started
export default {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'cosmetic',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert'
      ]
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['app', 'actions', 'docs', 'root', 'release', 'setup']],
    'scope-empty': [2, 'never']
  }
}
