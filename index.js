'use strict'

/**
 * Allows users to `require('@newrelic/apollo-server-express')` directly in their app. If they
 * for some reason choose to explicitly use an older version of our instrumentation
 * then the supportability metrics for custom instrumentation will trigger.
 */
var newrelic = require('newrelic')
newrelic.instrumentWebframework('apollo-server-express', require('./lib/apollo-server-express-instrumentation'))
