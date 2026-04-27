const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const pakiAppsLauncherRoot = path.resolve(__dirname, '../../pakipark-fe/pakipark-fe');

const config = getDefaultConfig(projectRoot);

// 1. Watch the external folder
config.watchFolders = [pakiAppsLauncherRoot];

// 2. Force Metro to resolve (sub)dependencies only from the `nodeModulesPaths`
// This completely prevents multiple copies of React and React Native from being loaded
config.resolver.disableHierarchicalLookup = true;

// 3. Define the order of resolution. The host project's node_modules is prioritized!
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(pakiAppsLauncherRoot, 'node_modules'),
];

module.exports = config;
