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
import ServiceAPIResponse from '../model/ServiceAPIResponse';
import ServiceDocsPresenceGet from '../model/ServiceDocsPresenceGet';
import ServiceVOIPPresenceSetResetEditData from '../model/ServiceVOIPPresenceSetResetEditData';
import UtilCPAASError from '../model/UtilCPAASError';

/**
* Presence service.
* @module api/PresenceApi
* @version 1.1
*/
export default class PresenceApi {

    /**
    * Constructs a new PresenceApi. 
    * @alias module:api/PresenceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1AccountAccountIDPresenceExtensionPut operation.
     * @callback module:api/PresenceApi~v1AccountAccountIDPresenceExtensionPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set/Reset Presence for Extension
     * Set or reset the presence status of an extension.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} extension Extension
     * @param {module:model/ServiceVOIPPresenceSetResetEditData} reqBody payload fields
     * @param {module:api/PresenceApi~v1AccountAccountIDPresenceExtensionPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceAPIResponse}
     */
    v1AccountAccountIDPresenceExtensionPut(accountID, extension, reqBody, callback) {
      let postBody = reqBody;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDPresenceExtensionPut");
      }
      // verify the required parameter 'extension' is set
      if (extension === undefined || extension === null) {
        throw new Error("Missing the required parameter 'extension' when calling v1AccountAccountIDPresenceExtensionPut");
      }
      // verify the required parameter 'reqBody' is set
      if (reqBody === undefined || reqBody === null) {
        throw new Error("Missing the required parameter 'reqBody' when calling v1AccountAccountIDPresenceExtensionPut");
      }

      let pathParams = {
        'accountID': accountID,
        'extension': extension
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
      let returnType = ServiceAPIResponse;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/presence/{extension}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDPresenceGet operation.
     * @callback module:api/PresenceApi~v1AccountAccountIDPresenceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsPresenceGet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Presence Details
     * Retrieve details of presence subscriptions in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {module:api/PresenceApi~v1AccountAccountIDPresenceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsPresenceGet}
     */
    v1AccountAccountIDPresenceGet(accountID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDPresenceGet");
      }

      let pathParams = {
        'accountID': accountID
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
      let returnType = ServiceDocsPresenceGet;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/presence', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDUserUserIDPresencePut operation.
     * @callback module:api/PresenceApi~v1AccountAccountIDUserUserIDPresencePutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceAPIResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Set/Reset Presence for User
     * Set or reset the presence status of a user within an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} userID User ID, 32 alpha numeric
     * @param {module:model/ServiceVOIPPresenceSetResetEditData} reqBody payload fields
     * @param {module:api/PresenceApi~v1AccountAccountIDUserUserIDPresencePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceAPIResponse}
     */
    v1AccountAccountIDUserUserIDPresencePut(accountID, userID, reqBody, callback) {
      let postBody = reqBody;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDUserUserIDPresencePut");
      }
      // verify the required parameter 'userID' is set
      if (userID === undefined || userID === null) {
        throw new Error("Missing the required parameter 'userID' when calling v1AccountAccountIDUserUserIDPresencePut");
      }
      // verify the required parameter 'reqBody' is set
      if (reqBody === undefined || reqBody === null) {
        throw new Error("Missing the required parameter 'reqBody' when calling v1AccountAccountIDUserUserIDPresencePut");
      }

      let pathParams = {
        'accountID': accountID,
        'userID': userID
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
      let returnType = ServiceAPIResponse;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/user/{userID}/presence', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
