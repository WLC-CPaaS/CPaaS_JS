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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid();
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

  describe('ServiceVOIPAccountOutputFullCallerid', function() {
    it('should create an instance of ServiceVOIPAccountOutputFullCallerid', function() {
      // uncomment below and update the code to test ServiceVOIPAccountOutputFullCallerid
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid);
    });

    it('should have the property emergency (base name: "emergency")', function() {
      // uncomment below and update the code to test the property emergency
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid();
      //expect(instance).to.be();
    });

    it('should have the property external (base name: "external")', function() {
      // uncomment below and update the code to test the property external
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPAccountOutputFullCallerid();
      //expect(instance).to.be();
    });

  });

}));
