/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.ts'
  }
};
