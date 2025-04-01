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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
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

  describe('ModelEventDailySummary', function() {
    it('should create an instance of ModelEventDailySummary', function() {
      // uncomment below and update the code to test ModelEventDailySummary
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be();
    });

    it('should have the property component (base name: "component")', function() {
      // uncomment below and update the code to test the property component
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be();
    });

    it('should have the property transactionCount (base name: "transaction_count")', function() {
      // uncomment below and update the code to test the property transactionCount
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be();
    });

    it('should have the property transactionDate (base name: "transaction_date")', function() {
      // uncomment below and update the code to test the property transactionDate
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelEventDailySummary();
      //expect(instance).to.be();
    });

  });

}));
