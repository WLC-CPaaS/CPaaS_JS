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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
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

  describe('ServiceVOIPAccountEditData', function() {
    it('should create an instance of ServiceVOIPAccountEditData', function() {
      // uncomment below and update the code to test ServiceVOIPAccountEditData
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData);
    });

    it('should have the property callRecording (base name: "call_recording")', function() {
      // uncomment below and update the code to test the property callRecording
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property callerId (base name: "caller_id")', function() {
      // uncomment below and update the code to test the property callerId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property doNotDisturb (base name: "do_not_disturb")', function() {
      // uncomment below and update the code to test the property doNotDisturb
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property musicOnHold (base name: "music_on_hold")', function() {
      // uncomment below and update the code to test the property musicOnHold
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

    it('should have the property timezone (base name: "timezone")', function() {
      // uncomment below and update the code to test the property timezone
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountEditData();
      //expect(instance).to.be();
    });

  });

}));
