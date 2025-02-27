/**
 * White Label Communications CPaas API Documentation
 * A CPaaS platform API
 *
 * The version of the OpenAPI document: 1.1
 * Contact: support@whitelabelcomm.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.WhiteLabelCommunicationsCPaasApiDocumentation);
  }
}(this, function(expect, WhiteLabelCommunicationsCPaasApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ServiceDeviceOutputFullSIP', function() {
    it('should create an instance of ServiceDeviceOutputFullSIP', function() {
      // uncomment below and update the code to test ServiceDeviceOutputFullSIP
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP);
    });

    it('should have the property inviteFormat (base name: "invite_format")', function() {
      // uncomment below and update the code to test the property inviteFormat
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDeviceOutputFullSIP();
      //expect(instance).to.be();
    });

  });

}));
