module.exports = {

  // An array of file extensions your modules use
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: ['src'],

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/imagesTransformer.js',
  },

  transformIgnorePatterns: [
    '\\\\node_modules\\\\',
    '\\.pnp\\.[^\\\\]+$',
  ],
  moduleDirectories: ['node_modules', 'src'],
};
