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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput();
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

  describe('ServiceMetaflowOutput', function() {
    it('should create an instance of ServiceMetaflowOutput', function() {
      // uncomment below and update the code to test ServiceMetaflowOutput
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput);
    });

    it('should have the property bindingDigit (base name: "binding_digit")', function() {
      // uncomment below and update the code to test the property bindingDigit
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput();
      //expect(instance).to.be();
    });

    it('should have the property numbers (base name: "numbers")', function() {
      // uncomment below and update the code to test the property numbers
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput();
      //expect(instance).to.be();
    });

    it('should have the property patterns (base name: "patterns")', function() {
      // uncomment below and update the code to test the property patterns
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceMetaflowOutput();
      //expect(instance).to.be();
    });

  });

}));
