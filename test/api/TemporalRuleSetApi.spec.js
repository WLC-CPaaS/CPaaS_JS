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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
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

  describe('TemporalRuleSetApi', function() {
    describe('v1AccountAccountIDTemporalrulesetGet', function() {
      it('should call v1AccountAccountIDTemporalrulesetGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDTemporalrulesetGet
        //instance.v1AccountAccountIDTemporalrulesetGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDTemporalrulesetPost', function() {
      it('should call v1AccountAccountIDTemporalrulesetPost successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDTemporalrulesetPost
        //instance.v1AccountAccountIDTemporalrulesetPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete', function() {
      it('should call v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete
        //instance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet', function() {
      it('should call v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet
        //instance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut', function() {
      it('should call v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut
        //instance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
