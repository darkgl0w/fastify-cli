'use strict'

// This file contains code that we reuse
// between our tests.

const { build } = require('fastify-cli/helper')
const AppPath = './app.js'

// Fill in this config with all the configurations
// needed for testing the application
function config () {
  return {}
}

// automatically build and tear down our instance
async function buildApplication (t) {
  // you can set all the options supported by the fastify CLI command
  const argv = [AppPath]

  // fastify-plugin ensures that all decorators
  // are exposed for testing purposes, this is
  // different from the production setup
  const app = await build(argv, config())

  // tear down our app after we are done
  t.teardown(app.close.bind(app))

  return app
}

module.exports = {
  config,
  buildApplication
}
