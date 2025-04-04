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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
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

  describe('ModelFeatureMonthlySummary', function() {
    it('should create an instance of ModelFeatureMonthlySummary', function() {
      // uncomment below and update the code to test ModelFeatureMonthlySummary
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be();
    });

    it('should have the property featureCount (base name: "feature_count")', function() {
      // uncomment below and update the code to test the property featureCount
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be();
    });

    it('should have the property featureName (base name: "feature_name")', function() {
      // uncomment below and update the code to test the property featureName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be();
    });

    it('should have the property transactionMonth (base name: "transaction_month")', function() {
      // uncomment below and update the code to test the property transactionMonth
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be();
    });

    it('should have the property transactionYear (base name: "transaction_year")', function() {
      // uncomment below and update the code to test the property transactionYear
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelFeatureMonthlySummary();
      //expect(instance).to.be();
    });

  });

}));
