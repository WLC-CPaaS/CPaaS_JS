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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput();
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

  describe('ServiceDocsCampaignImportOutput', function() {
    it('should create an instance of ServiceDocsCampaignImportOutput', function() {
      // uncomment below and update the code to test ServiceDocsCampaignImportOutput
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput);
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput();
      //expect(instance).to.be();
    });

    it('should have the property requestId (base name: "request_id")', function() {
      // uncomment below and update the code to test the property requestId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput();
      //expect(instance).to.be();
    });

    it('should have the property statusCode (base name: "status_code")', function() {
      // uncomment below and update the code to test the property statusCode
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsCampaignImportOutput();
      //expect(instance).to.be();
    });

  });

}));
