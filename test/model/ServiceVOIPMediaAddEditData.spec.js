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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
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

  describe('ServiceVOIPMediaAddEditData', function() {
    it('should create an instance of ServiceVOIPMediaAddEditData', function() {
      // uncomment below and update the code to test ServiceVOIPMediaAddEditData
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
      //expect(instance).to.be();
    });

    it('should have the property mediaSource (base name: "media_source")', function() {
      // uncomment below and update the code to test the property mediaSource
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
      //expect(instance).to.be();
    });

    it('should have the property tts (base name: "tts")', function() {
      // uncomment below and update the code to test the property tts
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData();
      //expect(instance).to.be();
    });

  });

}));
