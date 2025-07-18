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
    instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
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

  describe('ServiceImpersonateUserOutputFull', function() {
    it('should create an instance of ServiceImpersonateUserOutputFull', function() {
      // uncomment below and update the code to test ServiceImpersonateUserOutputFull
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be.a(WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull);
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "account_name")', function() {
      // uncomment below and update the code to test the property accountName
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property authToken (base name: "auth_token")', function() {
      // uncomment below and update the code to test the property authToken
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property clusterId (base name: "cluster_id")', function() {
      // uncomment below and update the code to test the property clusterId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property isMasterAccount (base name: "is_master_account")', function() {
      // uncomment below and update the code to test the property isMasterAccount
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property isReseller (base name: "is_reseller")', function() {
      // uncomment below and update the code to test the property isReseller
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "owner_id")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property resellerId (base name: "reseller_id")', function() {
      // uncomment below and update the code to test the property resellerId
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

    it('should have the property userInfo (base name: "user_info")', function() {
      // uncomment below and update the code to test the property userInfo
      //var instance = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceImpersonateUserOutputFull();
      //expect(instance).to.be();
    });

  });

}));
