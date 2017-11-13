import Request from './request';
import Resource from './resource';

export default function resourceProvider() {
  var provider = this;

  // defaults
  provider.apiHost = '';

  provider.$get = ['$injector', function($injector) {
    return ResourceFactory;

    function ResourceFactory(urlPathTemplate) {
      var request = new Request(urlPathTemplate, provider.apiHost);

      return $injector.instantiate(Resource, { request });
    }
  }];
}
