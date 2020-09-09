'use strict'

module.exports = function initialize(shim, apollo) {
  if (!shim || !apollo) {
    shim.logger.debug(
      'Apollo instrumentation called with incorrect arguments, not instrumenting.'
    )
    return
  }

  shim.setFramework('Apollo');

  shim.wrapClass(apollo, 
    'ApolloServer', 
    function(shim) {
        let query_fields = this.schema._typeMap.Query._fields;
        Object.keys(query_fields).forEach(function(field) {
          shim.wrap(query_fields[field], 'resolve', function(shim, resolve) { 
            return function() {
              shim.pushTransactionName(field);
              return resolve.apply(this, arguments);
            }
          } )
        } )

      }
  )
}


