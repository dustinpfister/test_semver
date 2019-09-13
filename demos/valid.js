let semver = require('semver');

console.log( semver.valid('1.2.3') );  // '1.2.3'
console.log( semver.valid('foo.bar') ); // null