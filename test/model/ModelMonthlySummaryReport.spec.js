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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport();
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

  describe('ModelMonthlySummaryReport', function() {
    it('should create an instance of ModelMonthlySummaryReport', function() {
      // uncomment below and update the code to test ModelMonthlySummaryReport
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport);
    });

    it('should have the property components (base name: "components")', function() {
      // uncomment below and update the code to test the property components
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport();
      //expect(instance).to.be();
    });

    it('should have the property transactionMonth (base name: "transaction_month")', function() {
      // uncomment below and update the code to test the property transactionMonth
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport();
      //expect(instance).to.be();
    });

    it('should have the property transactionYear (base name: "transaction_year")', function() {
      // uncomment below and update the code to test the property transactionYear
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelMonthlySummaryReport();
      //expect(instance).to.be();
    });

  });

}));
