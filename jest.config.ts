import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx)'],
  // Coverage, if you want:
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx'],
};

export default config;
