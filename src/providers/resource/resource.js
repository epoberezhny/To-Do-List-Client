import { forEach } from 'angular';

export default class Resource {
  constructor(request, $http) {
    this.request = request;
    this.$http   = $http;
  }

  index(params) {
    var { url } = this.request.prepare(params);
    return this.$http.get(url);
  }

  create(params) {
    var { url, params } = this.request.prepare(params);
    return this.$http.post(url, params);
  }

  update(params) {
    var { url, params } = this.request.prepare(params);
    return this.$http.patch(url, params);
  }

  delete(params) {
    var { url } = this.request.prepare(params);
    return this.$http.delete(url);
  }

  createWithFile(params) {
    var { url, params } = this.request.prepare(params);

    var data = new FormData();
    forEach(params, function(value, key) {
      data.append(key, value);
    });

    return this.$http.post(url, data, {
      headers: { 'Content-Type': undefined }
    });
  }
}

Resource.$inject = ['request', '$http'];
