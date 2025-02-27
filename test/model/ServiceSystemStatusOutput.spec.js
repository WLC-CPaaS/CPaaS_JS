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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
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

  describe('ServiceSystemStatusOutput', function() {
    it('should create an instance of ServiceSystemStatusOutput', function() {
      // uncomment below and update the code to test ServiceSystemStatusOutput
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput);
    });

    it('should have the property cpaasServices (base name: "cpaas_services")', function() {
      // uncomment below and update the code to test the property cpaasServices
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
      //expect(instance).to.be();
    });

    it('should have the property messagingServices (base name: "messaging_services")', function() {
      // uncomment below and update the code to test the property messagingServices
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
      //expect(instance).to.be();
    });

    it('should have the property supportServices (base name: "support_services")', function() {
      // uncomment below and update the code to test the property supportServices
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
      //expect(instance).to.be();
    });

    it('should have the property voipServices (base name: "voip_services")', function() {
      // uncomment below and update the code to test the property voipServices
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceSystemStatusOutput();
      //expect(instance).to.be();
    });

  });

}));
