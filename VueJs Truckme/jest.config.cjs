module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.[tj]sx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'vue'],
    testEnvironment: 'jsdom',
};
