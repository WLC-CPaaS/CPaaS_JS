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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.CPaaSManagementApi();
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

  describe('CPaaSManagementApi', function() {
    describe('v1MgmtUserGet', function() {
      it('should call v1MgmtUserGet successfully', function(done) {
        //uncomment below and update the code to test v1MgmtUserGet
        //instance.v1MgmtUserGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1MgmtUserPost', function() {
      it('should call v1MgmtUserPost successfully', function(done) {
        //uncomment below and update the code to test v1MgmtUserPost
        //instance.v1MgmtUserPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1MgmtUserUserIDDelete', function() {
      it('should call v1MgmtUserUserIDDelete successfully', function(done) {
        //uncomment below and update the code to test v1MgmtUserUserIDDelete
        //instance.v1MgmtUserUserIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1MgmtUserUserIDGet', function() {
      it('should call v1MgmtUserUserIDGet successfully', function(done) {
        //uncomment below and update the code to test v1MgmtUserUserIDGet
        //instance.v1MgmtUserUserIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v1MgmtUserUserIDPut', function() {
      it('should call v1MgmtUserUserIDPut successfully', function(done) {
        //uncomment below and update the code to test v1MgmtUserUserIDPut
        //instance.v1MgmtUserUserIDPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
