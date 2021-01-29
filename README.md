[![Experimental Project header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#experimental)

# New Relic JavaScript Instrumentation for Apollo GraphQL on Express

New Relic's apollo-server-express framework instrumentation for use with the
[Node agent](https://github.com/newrelic/node-newrelic). 

## Installation

This module is dependent on the newrelic nodejs agent, It can be installed and loaded independenly based on spacific versioning needs.

Newrelic agent:
```
npm install newrelic
```

apollo-server-express instrumentation module:
```
npm install @newrelic/apollo-server-express
```

// for install from github, add the following in  package.json
```
"dependencies": {
  "@newrelic/apollo-server-express": "github:newrelic-experimental/newrelic-javascript-apollo-server-express"
}
```

## Getting Started

Add this module along with newrelic agent and you will see graphql schema type in the request show up as transacations in the Newrelic UI.
```
// index.js
require('@newrelic/apollo-server-express');
```

## Support

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

## Contributing
We encourage your contributions to improve newrelic-javascript-apollo-server-express! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

## License
newrelic-javascript-apollo-server-express is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
