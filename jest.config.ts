import type { Config } from 'jest';

const config: Config = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.ts'],
  testMatch: ['<rootDir>/tests/**/*.test.(ts|tsx)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,ts,tsx,jsx}', '!**/node_modules/**', '!**/stories/**'],
  coverageReporters: ['text', 'text-summary'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'tailwind.config.ts',
    'postcss.config.ts',
    'vitest.workspace.ts',
    '/stories/',
  ],
  moduleNameMapper: {
    // Mapea archivos de estilo a un proxy (si usas CSS Modules)
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    // Mapea archivos de imagen y otros assets a un mock
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
  },
};

export default config;
