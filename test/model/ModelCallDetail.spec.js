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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
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

  describe('ModelCallDetail', function() {
    it('should create an instance of ModelCallDetail', function() {
      // uncomment below and update the code to test ModelCallDetail
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callDuration (base name: "call_duration")', function() {
      // uncomment below and update the code to test the property callDuration
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callId (base name: "call_id")', function() {
      // uncomment below and update the code to test the property callId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callTime (base name: "call_time")', function() {
      // uncomment below and update the code to test the property callTime
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callType (base name: "call_type")', function() {
      // uncomment below and update the code to test the property callType
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property calleeName (base name: "callee_name")', function() {
      // uncomment below and update the code to test the property calleeName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property calleeNumber (base name: "callee_number")', function() {
      // uncomment below and update the code to test the property calleeNumber
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callerName (base name: "caller_name")', function() {
      // uncomment below and update the code to test the property callerName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property callerNumber (base name: "caller_number")', function() {
      // uncomment below and update the code to test the property callerNumber
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelCallDetail();
      //expect(instance).to.be();
    });

  });

}));
