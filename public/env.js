// This file will not end up inside the main application JavaScript bundle.
// Instead, it will simply be copied inside the build folder.
// The generated "index.html" will require it just before the main bundle.
// In production, this fill will be modified by Docker entrypoint (see /docker/entrypoint.sh)
// to include actual environment values.

// You can thus use it to define some environment variables that will
// be made available synchronously in all your JS modules under 'src'.
// It is used for overriding runtime configuration of the application.
// Each option should be added as a separate field of window.env global variable.
// An example of the configuration override looks like the following:
// window.env = {
//   SOME_VALUE: 123,
// };
// Warning: this file will not be transpiled by Babel and cannot contain
// any syntax that is not yet supported by your targeted browsers.
window.env = {
};
