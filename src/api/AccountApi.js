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


import ApiClient from "../ApiClient";
import CPAASError from '../model/CPAASError';
import ServiceDocsAccountAPIKey from '../model/ServiceDocsAccountAPIKey';
import ServiceDocsAccountGetAll from '../model/ServiceDocsAccountGetAll';
import ServiceDocsAccountGetSingle from '../model/ServiceDocsAccountGetSingle';
import ServiceDocsAccountLimit from '../model/ServiceDocsAccountLimit';
import ServiceDocsAccountProvisioning from '../model/ServiceDocsAccountProvisioning';
import ServiceUpdateRecordTypeForAccount from '../model/ServiceUpdateRecordTypeForAccount';
import ServiceVOIPAccountAddData from '../model/ServiceVOIPAccountAddData';
import ServiceVOIPAccountEditData from '../model/ServiceVOIPAccountEditData';
import ServiceVOIPAccountLimit2 from '../model/ServiceVOIPAccountLimit2';

/**
* Account service.
* @module api/AccountApi
* @version 1.1
*/
export default class AccountApi {

    /**
    * Constructs a new AccountApi. 
    * @alias module:api/AccountApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1AccountAccountidChildrenGet operation.
     * @callback module:api/AccountApi~v1AccountAccountidChildrenGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetAll} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Sub Account List
     * Conveniently access the list of children accounts.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {Object} opts Optional parameters
     * @param {String} [startKey] start_key for pagination that was returned as next_start_key from your previous call
     * @param {Number} [pageSize] number of records to return, range 1 to 50
     * @param {module:api/AccountApi~v1AccountAccountidChildrenGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetAll}
     */
    v1AccountAccountidChildrenGet(accountid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidChildrenGet");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
        'start_key': opts['startKey'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetAll;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidDelete operation.
     * @callback module:api/AccountApi~v1AccountAccountidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Account
     * Delete an account within your organization.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidDelete(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidDelete");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidDnsrecordGet operation.
     * @callback module:api/AccountApi~v1AccountAccountidDnsrecordGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account DNS Record
     * Get the DNS record of an account from the Route 53 entry.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidDnsrecordGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidDnsrecordGet(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidDnsrecordGet");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/dnsrecord', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidDnsrecordPost operation.
     * @callback module:api/AccountApi~v1AccountAccountidDnsrecordPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Account DNS Record
     * Create the DNS record of an account with the help realm in the Route 53 entry.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidDnsrecordPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidDnsrecordPost(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidDnsrecordPost");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/dnsrecord', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidDnsrecordPut operation.
     * @callback module:api/AccountApi~v1AccountAccountidDnsrecordPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Account DNS Record
     * Toggle the realm DNS record between srv and cname.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:model/ServiceUpdateRecordTypeForAccount} dnsrecord record type fields with value SRV, CNAME
     * @param {module:api/AccountApi~v1AccountAccountidDnsrecordPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidDnsrecordPut(accountid, dnsrecord, callback) {
      let postBody = dnsrecord;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidDnsrecordPut");
      }
      // verify the required parameter 'dnsrecord' is set
      if (dnsrecord === undefined || dnsrecord === null) {
        throw new Error("Missing the required parameter 'dnsrecord' when calling v1AccountAccountidDnsrecordPut");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/dnsrecord', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidGet operation.
     * @callback module:api/AccountApi~v1AccountAccountidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Details
     * This endpoint will not allow for modifying or making updates, it will only allow users to view/retrieve details.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidGet(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidGet");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidLimitGet operation.
     * @callback module:api/AccountApi~v1AccountAccountidLimitGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Limits
     * Check the maximum number of inbound, outbound, and two-way trunks.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidLimitGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountLimit}
     */
    v1AccountAccountidLimitGet(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidLimitGet");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountLimit;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/limit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidLimitPut operation.
     * @callback module:api/AccountApi~v1AccountAccountidLimitPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountLimit} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set Account Limits
     * Apply parameters to restrict access to inbound, outbound, and two-way trunks.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:model/ServiceVOIPAccountLimit2} limit account fields
     * @param {module:api/AccountApi~v1AccountAccountidLimitPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountLimit}
     */
    v1AccountAccountidLimitPut(accountid, limit, callback) {
      let postBody = limit;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidLimitPut");
      }
      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling v1AccountAccountidLimitPut");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountLimit;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/limit', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidPost operation.
     * @callback module:api/AccountApi~v1AccountAccountidPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Sub Account
     * Establish a sub account to enable an administrator within your organization to create accounts.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:model/ServiceVOIPAccountAddData} account account fields
     * @param {module:api/AccountApi~v1AccountAccountidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidPost(accountid, account, callback) {
      let postBody = account;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidPost");
      }
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling v1AccountAccountidPost");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidProvisioningdetailsGet operation.
     * @callback module:api/AccountApi~v1AccountAccountidProvisioningdetailsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountProvisioning} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account Provisioning Details
     * Get the provisioning details of an account.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidProvisioningdetailsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountProvisioning}
     */
    v1AccountAccountidProvisioningdetailsGet(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidProvisioningdetailsGet");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountProvisioning;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/provisioningdetails', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidProvisioningdetailsResetpwPut operation.
     * @callback module:api/AccountApi~v1AccountAccountidProvisioningdetailsResetpwPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountProvisioning} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset the provisioning details password.
     * Reset the existing provisioning details password and set it to a new one.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:api/AccountApi~v1AccountAccountidProvisioningdetailsResetpwPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountProvisioning}
     */
    v1AccountAccountidProvisioningdetailsResetpwPut(accountid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidProvisioningdetailsResetpwPut");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountProvisioning;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/provisioningdetails/resetpw', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidPut operation.
     * @callback module:api/AccountApi~v1AccountAccountidPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Account
     * Modify pertinent account data.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:model/ServiceVOIPAccountEditData} account account fields
     * @param {module:api/AccountApi~v1AccountAccountidPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountAccountidPut(accountid, account, callback) {
      let postBody = account;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidPut");
      }
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling v1AccountAccountidPut");
      }

      let pathParams = {
        'accountid': accountid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountApikeyGet operation.
     * @callback module:api/AccountApi~v1AccountApikeyGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountAPIKey} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate an application or user request to get the client ID and client secret for a CPaaS account.
     * @param {module:api/AccountApi~v1AccountApikeyGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountAPIKey}
     */
    v1AccountApikeyGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountAPIKey;
      return this.apiClient.callApi(
        '/v1/account/apikey', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountGet operation.
     * @callback module:api/AccountApi~v1AccountGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetAll} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Account List
     * Retrieve a list of all CPaaS accounts that exist within your organization.
     * @param {Object} opts Optional parameters
     * @param {String} [startKey] start_key for pagination that was returned as next_start_key from your previous call
     * @param {Number} [pageSize] number of records to return, range 1 to 50
     * @param {module:api/AccountApi~v1AccountGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetAll}
     */
    v1AccountGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'start_key': opts['startKey'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetAll;
      return this.apiClient.callApi(
        '/v1/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountPost operation.
     * @callback module:api/AccountApi~v1AccountPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsAccountGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Account
     * Create an account.
     * @param {module:model/ServiceVOIPAccountAddData} account account fields
     * @param {module:api/AccountApi~v1AccountPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsAccountGetSingle}
     */
    v1AccountPost(account, callback) {
      let postBody = account;
      // verify the required parameter 'account' is set
      if (account === undefined || account === null) {
        throw new Error("Missing the required parameter 'account' when calling v1AccountPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsAccountGetSingle;
      return this.apiClient.callApi(
        '/v1/account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
