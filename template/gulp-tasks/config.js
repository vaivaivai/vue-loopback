/* eslint-disable import/prefer-default-export */
import path from 'path';

export const dirs = {};
dirs.root = path.resolve(__dirname, '../');
dirs.modules = path.resolve(dirs.root, 'node_modules');
dirs.build = path.resolve(dirs.root, 'build');
dirs.buildTest = path.resolve(dirs.root, dirs.build, 'test');
dirs.buildClient = path.resolve(dirs.root, dirs.build, 'client');
dirs.buildServer = path.resolve(dirs.root, dirs.build, 'server');
dirs.buildCommon = path.resolve(dirs.root, dirs.build, 'common');
dirs.test = path.resolve(dirs.root, 'test');
dirs.testClient = path.resolve(dirs.test, 'client');
dirs.testServer = path.resolve(dirs.test, 'server');
dirs.srcClient = path.resolve(dirs.root, 'client');
dirs.srcCommon = path.resolve(dirs.root, 'common');
dirs.srcServer = path.resolve(dirs.root, 'server');

// Set here production build settings
export const prod = {
  host: '0.0.0.0',
  port: 80,
};
