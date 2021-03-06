import { extend, isUndefined } from 'angular';

const PARAMS_REGEXP = /\/:(\w+)/g ;

export default class Request {
  constructor(urlPathTemplate, apiHost) {
    this.urlPathTemplate = urlPathTemplate;
    this.apiHost         = apiHost;
  }

  prepare(params) {
    var params = extend({}, params),
        url    = this.apiHost + this.urlPathTemplate.replace(PARAMS_REGEXP, replacer);

    return { url, params };

    function replacer(_str, key) {
      var value = params[key];

      if ( isUndefined(value) ) return '';
          
      delete params[key];
      return '/' + value;
    }
  }
}
