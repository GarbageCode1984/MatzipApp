module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
    'eslint.workingDirectories': [{mode: 'auto'}],
};
