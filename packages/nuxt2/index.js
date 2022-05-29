const glob = require('glob');
const path = require('path');

module.exports = {
  extends: glob.sync('./config/**/*.js', {
    cwd: path.resolve(path.join(__dirname)),
  }).map((currentFile) => require.resolve(path.resolve((path.join(__dirname, currentFile))))),
}
