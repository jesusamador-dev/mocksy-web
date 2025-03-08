import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,tsx,jsx}', '!**/node_modules/**'],
  coverageReporters: ['text', 'text-summary'],
};

export default config;
