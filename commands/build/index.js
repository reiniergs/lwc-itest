const buildTest = require('./../../helpers/build-test');
const testEntries = require('./../../helpers/test-entries');

module.exports = function build(program) {
    return () => {
        testEntries.reduce(async (seed, test) => {
            await seed;
            return buildTest(test);
        }, Promise.resolve());
        process.exit(0);
    }      
}