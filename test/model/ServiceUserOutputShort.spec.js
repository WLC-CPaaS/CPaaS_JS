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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
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

  describe('ServiceUserOutputShort', function() {
    it('should create an instance of ServiceUserOutputShort', function() {
      // uncomment below and update the code to test ServiceUserOutputShort
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort);
    });

    it('should have the property callRecording (base name: "call_recording")', function() {
      // uncomment below and update the code to test the property callRecording
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property doNotDisturb (base name: "do_not_disturb")', function() {
      // uncomment below and update the code to test the property doNotDisturb
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property features (base name: "features")', function() {
      // uncomment below and update the code to test the property features
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property flags (base name: "flags")', function() {
      // uncomment below and update the code to test the property flags
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

    it('should have the property presenceId (base name: "presence_id")', function() {
      // uncomment below and update the code to test the property presenceId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceUserOutputShort();
      //expect(instance).to.be();
    });

  });

}));
