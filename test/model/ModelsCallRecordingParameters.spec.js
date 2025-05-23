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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
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

  describe('ModelsCallRecordingParameters', function() {
    it('should create an instance of ModelsCallRecordingParameters', function() {
      // uncomment below and update the code to test ModelsCallRecordingParameters
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property format (base name: "format")', function() {
      // uncomment below and update the code to test the property format
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property recordMinSec (base name: "record_min_sec")', function() {
      // uncomment below and update the code to test the property recordMinSec
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property recordOnAnswer (base name: "record_on_answer")', function() {
      // uncomment below and update the code to test the property recordOnAnswer
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property recordOnBridge (base name: "record_on_bridge")', function() {
      // uncomment below and update the code to test the property recordOnBridge
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property recordSampleRate (base name: "record_sample_rate")', function() {
      // uncomment below and update the code to test the property recordSampleRate
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property timeLimit (base name: "time_limit")', function() {
      // uncomment below and update the code to test the property timeLimit
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsCallRecordingParameters();
      //expect(instance).to.be();
    });

  });

}));
