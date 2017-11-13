export default function resourceConfig(ResourceProvider) {
  ResourceProvider.apiHost = __API__ + '/api/v1';
}

resourceConfig.$inject = ['ResourceProvider'];
