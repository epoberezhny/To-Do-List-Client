import { isUndefined, extend } from 'angular';

export default function messagesFactory($timeout) {
  var messageParams = {};

  return { set, get };

  function set(msgParams) {
    if (isUndefined(msgParams.message) || isUndefined(msgParams.type)) return;

    extend(messageParams, msgParams);

    $timeout(function() {
      messageParams.message = messageParams.type = '';
    }, 4000);
  }

  function get() {
    return messageParams;
  }
}

messagesFactory.$inject = ['$timeout'];
