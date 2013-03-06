'use strict';

describe('Service: vkontakte', function () {

  // load the service's module
  beforeEach(module('vkApp'));

  // instantiate service
  var vkontakte;
  beforeEach(inject(function (_vkontakte_) {
    vkontakte = _vkontakte_;
  }));

  it('should do something', function () {
    expect(!!vkontakte).toBe(true);
  });

});
