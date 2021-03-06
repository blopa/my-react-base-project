module.exports = {
  'parser': 'babel-eslint',
  'extends': ['airbnb', 'plugin:jest/recommended'],
  'env': {
    'es6': true,
    'browser': true,
    'node': true,
    'jest/globals': true
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'plugins': [
    'react',
    'flowtype',
    'filenames',
    'prettier',
    'jest'
  ],
  'globals': {
    'before': true,
    'after': true,
    'spyOn': true,
    '__PATH_PREFIX__': true,
    '__BASE_PATH__': true,
    '__ASSET_PREFIX__': true
  },
  'rules': {
    'brace-style': 'warn',
    'for-direction': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'warn',
    'no-console': 'warn',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'warn',
    'no-extra-parens': [
      'warn',
      'all',
      {
        'ignoreJSX': 'multi-line'
      }
    ],
    'no-extra-semi': 'warn',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'warn',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'warn',
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-vars': 'warn',
    'use-isnan': 'error',
    'valid-typeof': [
      'error',
      {
        'requireStringLiterals': true
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'curly': 'warn',
    'dot-location': [
      'warn',
      'property'
    ],
    'eqeqeq': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'warn',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'warn',
    'no-implicit-globals': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'error',
    'no-multi-spaces': 'warn',
    'no-multi-str': 'error',
    'no-new-wrappers': 'warn',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'warn',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'wrap-iife': [
      'warn',
      'inside'
    ],
    'yoda': [
      'warn',
      'never',
      {
        'exceptRange': true
      }
    ],
    'no-catch-shadow': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'warn',
    'no-use-before-define': 'error',
    'array-bracket-newline': [
      'warn',
      'consistent'
    ],
    'array-bracket-spacing': 'warn',
    'array-element-newline': [
      'warn',
      'consistent'
    ],
    'block-spacing': 'warn',
    'camelcase': [
      'warn',
      {
        'properties': 'never',
      }
    ],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'never',
      }
    ],
    'comma-spacing': 'warn',
    'comma-style': 'warn',
    'computed-property-spacing': 'warn',
    'eol-last': 'warn',
    'func-call-spacing': 'warn',
    'function-paren-newline': [
      'warn',
      'consistent'
    ],
    'indent': [
      'warn',
      4,
      {
        'SwitchCase': 1,
        'MemberExpression': 1,
        'ObjectExpression': 1,
        'ArrayExpression': 1
      }
    ],
    'jsx-quotes': 'warn',
    'key-spacing': 'warn',
    'keyword-spacing': 'warn',
    'linebreak-style': 'warn',
    'lines-between-class-members': 'warn',
    'max-len': [
      'warn',
      {
        'code': 100,
        'ignoreComments': true,
        'ignorePattern': '^import\\s.+\\sfrom\\s.+;$',
        'ignoreStrings': true
      }
    ],
    'max-statements-per-line': [
      'warn',
      {
        'max': 1
      }
    ],
    'multiline-comment-style': 'warn',
    'multiline-ternary': [
      'warn',
      'always-multiline'
    ],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-bitwise': 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    'no-multi-assign': 'warn',
    'no-multiple-empty-lines': [
      'warn',
      {
        'max': 1,
        'maxBOF': 0,
        'maxEOF': 1
      }
    ],
    'no-nested-ternary': 'warn',
    'no-new-object': 'warn',
    'no-tabs': 'warn',
    'no-trailing-spaces': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': [
      'warn',
      {
        'multiline': true,
        'consistent': true
      }
    ],
    'object-curly-spacing': [
      'warn',
      'always'
    ],
    'one-var': [
      'warn',
      'never'
    ],
    'operator-linebreak': [
      'warn',
      'before',
      {
        'overrides': {
          '=': 'after',
          '?': 'after'
        }
      }
    ],
    'prefer-object-spread': 'warn',
    'quote-props': [
      'warn',
      'as-needed'
    ],
    'quotes': [
      'warn',
      'single',
      {
        'avoidEscape': true
      }
    ],
    'semi': [
      'warn',
      'always'
    ],
    'semi-spacing': 'warn',
    'semi-style': 'error',
    'space-before-blocks': 'warn',
    'space-before-function-paren': [
      'warn',
      {
        'anonymous': 'always',
        'named': 'never',
        'asyncArrow': 'always'
      }
    ],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'space-unary-ops': [
      'warn',
      {
        'words': true,
        'nonwords': false
      }
    ],
    'spaced-comment': 'warn',
    'switch-colon-spacing': 'warn',
    'arrow-body-style': 'warn',
    'arrow-parens': 'warn',
    'arrow-spacing': 'warn',
    'constructor-super': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'warn',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-const': 'warn',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'rest-spread-spacing': 'warn',
    'template-curly-spacing': 'warn',
    'react/jsx-child-element-spacing': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-closing-bracket-location': 'warn',
    'react/jsx-closing-tag-location': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'import/no-extraneous-dependencies': [
      'warn',
      {
        'devDependencies': true,
        'optionalDependencies': true
      }
    ],
    'react/jsx-curly-spacing': [
      'warn',
      {
        'when': 'never',
        'children': true
      }
    ],
    'react/jsx-equals-spacing': 'warn',
    'react/jsx-filename-extension': 'warn',
    'react/jsx-first-prop-new-line': [
      'warn',
      'multiline-multiprop'
    ],
    'react/jsx-handler-names': 'warn',
    'react/jsx-indent-props': 'warn',
    'react/jsx-indent': 'warn',
    'react/jsx-key': 'error',
    'react/jsx-no-bind': [
      'warn',
      {
        'allowArrowFunctions': true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': [
      'error',
      {
        "enforceDynamicLinks": "never"
      }
    ],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-props-no-multi-spaces': 'warn',
    'react/jsx-tag-spacing': [
      'warn',
      {
        'beforeClosing': 'never'
      }
    ],
    'react/jsx-wrap-multilines': [
      'warn',
      {
        'declaration': 'parens-new-line',
        'assignment': 'parens-new-line',
        'return': 'parens-new-line',
        'arrow': 'parens-new-line',
        'condition': 'parens-new-line',
        'logical': 'parens-new-line',
        'prop': 'parens-new-line'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prop-types': [
      'warn',
    ],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'warn',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  },
  settings: {
    'import/resolver': {
      webpack: {}
    }
  }
};
