'use strict'

module.exports = [{
  type: 'web-framework',
  moduleName: 'apollo-server-express',
  onRequire: require('./lib/apollo-server-express-instrumentation')
}]

