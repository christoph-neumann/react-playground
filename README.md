React Playground
================

Experiments with [React](http://facebook.github.io/react/).


## Building & Running

Install gulp globally via Node.js:

    npm install -g gulp

Install all of the dependencies:

    npm install

That should also be run any time you update the source tree because the
package.json dependency list may have changed.

Create a build. An expanded set of files will be in "build/dev" and a minified
set of files will be in "build/dist".

    gulp

Automatically recreate the build as files are edited:

    gulp watch

Remove the build:

    gulp clean
