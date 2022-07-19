/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '@constants/(.*)': '<rootDir>/src/constants/$1',
    '@components/(.*)': '<rootDir>/src/components/$1',
    '@hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@helpers/(.*)': '<rootDir>/src/helpers/$1',
    '@models/(.*)': '<rootDir>/src/models/$1',
    '@assets/(.*)': '<rootDir>/src/assets/$1',
    '\\.(css|svg|png|jpg)$': '<rootDir>/__mocks__/styleMock.ts'
  }
};
