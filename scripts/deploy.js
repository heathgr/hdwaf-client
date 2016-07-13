'use strict';

const spawnSync = require('child_process').spawn;

spawnSync(
  'webpack',
  [
    '--config',
    'webpack.production.config.js',
    '--optimize-minimize',
    '--colors',
  ]
).stdout.on('data', (data) => {
  process.stdout.write(data);
});

spawnSync(
  'firebase',
  [
    'deploy',
  ]
).stdout.on('data', (data) => {
  process.stdout.write(data);
});
