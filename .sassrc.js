const path = require('path');
const cwd = process.cwd();

module.exports = {
    data: '$variableFromSassRcFile: "I\'m a variable from .sassrc.js";', // See: https://github.com/parcel-bundler/parcel/issues/1032
    includePaths: [
        path.resolve(cwd, 'node_modules')
    ]
};
