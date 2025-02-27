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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
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

  describe('MenuApi', function() {
    describe('v1AccountAccountIDMenuGet', function() {
      it('should call v1AccountAccountIDMenuGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMenuGet
        //instance.v1AccountAccountIDMenuGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDMenuMenuIDDelete', function() {
      it('should call v1AccountAccountIDMenuMenuIDDelete successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMenuMenuIDDelete
        //instance.v1AccountAccountIDMenuMenuIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDMenuMenuIDGet', function() {
      it('should call v1AccountAccountIDMenuMenuIDGet successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMenuMenuIDGet
        //instance.v1AccountAccountIDMenuMenuIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDMenuMenuIDPut', function() {
      it('should call v1AccountAccountIDMenuMenuIDPut successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMenuMenuIDPut
        //instance.v1AccountAccountIDMenuMenuIDPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1AccountAccountIDMenuPost', function() {
      it('should call v1AccountAccountIDMenuPost successfully', function(done) {
        //uncomment below and update the code to test v1AccountAccountIDMenuPost
        //instance.v1AccountAccountIDMenuPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
