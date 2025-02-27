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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
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

  describe('ServiceE911LocationInput', function() {
    it('should create an instance of ServiceE911LocationInput', function() {
      // uncomment below and update the code to test ServiceE911LocationInput
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput);
    });

    it('should have the property address1 (base name: "address_1")', function() {
      // uncomment below and update the code to test the property address1
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property address2 (base name: "address_2")', function() {
      // uncomment below and update the code to test the property address2
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property community (base name: "community")', function() {
      // uncomment below and update the code to test the property community
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property plusFour (base name: "plus_four")', function() {
      // uncomment below and update the code to test the property plusFour
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911LocationInput();
      //expect(instance).to.be();
    });

  });

}));
