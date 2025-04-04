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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
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

  describe('MediaApi', function() {
    describe('v1AccountAccountIDMediaMediaIDFileGet', function() {
      it('should call v1AccountAccountIDMediaMediaIDFileGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMediaMediaIDFileGet
        //instance.v1AccountAccountIDMediaMediaIDFileGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDMediaMediaIDFilePost', function() {
      it('should call v1AccountAccountIDMediaMediaIDFilePost successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMediaMediaIDFilePost
        //instance.v1AccountAccountIDMediaMediaIDFilePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountidMediaGet', function() {
      it('should call v1AccountAccountidMediaGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountidMediaGet
        //instance.v1AccountAccountidMediaGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountidMediaMediaidDelete', function() {
      it('should call v1AccountAccountidMediaMediaidDelete successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountidMediaMediaidDelete
        //instance.v1AccountAccountidMediaMediaidDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountidMediaMediaidGet', function() {
      it('should call v1AccountAccountidMediaMediaidGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountidMediaMediaidGet
        //instance.v1AccountAccountidMediaMediaidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountidMediaPost', function() {
      it('should call v1AccountAccountidMediaPost successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountidMediaPost
        //instance.v1AccountAccountidMediaPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
