// Logging setup for phantom integration
// adapted from Modernizr & Bootstrap

QUnit.begin = function () {
  console.log("Starting test suite")
  console.log("================================================\n")
}

QUnit.moduleDone = function (opts) {
  if (opts.failed === 0) {
    console.log("\n\u2714 All tests passed in '" + opts.name + "' module")
  } else {
    console.log("\n\u2716 " + opts.failed + " tests failed in '" + opts.name + "' module")
  }
}

QUnit.done(function (opts) {
  console.log("\n================================================")
  console.log("Tests completed in " + opts.runtime + " milliseconds")
  console.log(opts.passed + " tests of " + opts.total + " passed, " + opts.failed + " failed.")
  return false;
});