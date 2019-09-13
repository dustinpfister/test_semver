let semver = require('semver'),
path_packJSON = process.argv[3] || '../package.json',
pack = require(path_packJSON),
release = process.argv[2] || 'patch',

v = semver.valid(pack.version);

if (v) {

    v = semver.inc(v, release);
    console.log(v);

} else {

    console.log('package.json does not contain a valid version number');

}
