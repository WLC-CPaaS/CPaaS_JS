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
import ServiceCampaignTagDetagPhonenumbers from '../model/ServiceCampaignTagDetagPhonenumbers';
import ServiceDocsCampaignImportOutput from '../model/ServiceDocsCampaignImportOutput';
import ServiceDocsCampaignImportedGetAllOutput from '../model/ServiceDocsCampaignImportedGetAllOutput';
import ServiceDocsCampaignPhoneNumberOutput from '../model/ServiceDocsCampaignPhoneNumberOutput';
import ServiceDocsCampaignTagDetagPhonenumbersOutput from '../model/ServiceDocsCampaignTagDetagPhonenumbersOutput';

/**
* SMS service.
* @module api/SMSApi
* @version 1.1
*/
export default class SMSApi {

    /**
    * Constructs a new SMSApi. 
    * @alias module:api/SMSApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1SmsAccountAccountIDCampaignCampaignIDImportGet operation.
     * @callback module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDImportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsCampaignImportOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get details about a single imported campaign in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} campaignID Campaign ID
     * @param {module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDImportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsCampaignImportOutput}
     */
    v1SmsAccountAccountIDCampaignCampaignIDImportGet(accountID, campaignID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1SmsAccountAccountIDCampaignCampaignIDImportGet");
      }
      // verify the required parameter 'campaignID' is set
      if (campaignID === undefined || campaignID === null) {
        throw new Error("Missing the required parameter 'campaignID' when calling v1SmsAccountAccountIDCampaignCampaignIDImportGet");
      }

      let pathParams = {
        'accountID': accountID,
        'campaignID': campaignID
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
      let returnType = ServiceDocsCampaignImportOutput;
      return this.apiClient.callApi(
        '/v1/sms/account/{accountID}/campaign/{campaignID}/import', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SmsAccountAccountIDCampaignCampaignIDImportPost operation.
     * @callback module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDImportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsCampaignImportOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import campaign
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} campaignID Campaign ID
     * @param {module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDImportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsCampaignImportOutput}
     */
    v1SmsAccountAccountIDCampaignCampaignIDImportPost(accountID, campaignID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1SmsAccountAccountIDCampaignCampaignIDImportPost");
      }
      // verify the required parameter 'campaignID' is set
      if (campaignID === undefined || campaignID === null) {
        throw new Error("Missing the required parameter 'campaignID' when calling v1SmsAccountAccountIDCampaignCampaignIDImportPost");
      }

      let pathParams = {
        'accountID': accountID,
        'campaignID': campaignID
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
      let returnType = ServiceDocsCampaignImportOutput;
      return this.apiClient.callApi(
        '/v1/sms/account/{accountID}/campaign/{campaignID}/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet operation.
     * @callback module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsCampaignPhoneNumberOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get telephone numbers associated with a campaign.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} campaignID Campaign ID
     * @param {Object} opts Optional parameters
     * @param {Number} [pageNum] Page number
     * @param {Number} [pageSize] Page size
     * @param {module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsCampaignPhoneNumberOutput}
     */
    v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet(accountID, campaignID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet");
      }
      // verify the required parameter 'campaignID' is set
      if (campaignID === undefined || campaignID === null) {
        throw new Error("Missing the required parameter 'campaignID' when calling v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet");
      }

      let pathParams = {
        'accountID': accountID,
        'campaignID': campaignID
      };
      let queryParams = {
        'page_num': opts['pageNum'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsCampaignPhoneNumberOutput;
      return this.apiClient.callApi(
        '/v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut operation.
     * @callback module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsCampaignTagDetagPhonenumbersOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Associate or dissociate telephone numbers with a campaign.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} campaignID Campaign ID, 32 alpha numeric
     * @param {module:model/ServiceCampaignTagDetagPhonenumbers} reqBody payload fields
     * @param {module:api/SMSApi~v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsCampaignTagDetagPhonenumbersOutput}
     */
    v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut(accountID, campaignID, reqBody, callback) {
      let postBody = reqBody;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut");
      }
      // verify the required parameter 'campaignID' is set
      if (campaignID === undefined || campaignID === null) {
        throw new Error("Missing the required parameter 'campaignID' when calling v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut");
      }
      // verify the required parameter 'reqBody' is set
      if (reqBody === undefined || reqBody === null) {
        throw new Error("Missing the required parameter 'reqBody' when calling v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut");
      }

      let pathParams = {
        'accountID': accountID,
        'campaignID': campaignID
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
      let returnType = ServiceDocsCampaignTagDetagPhonenumbersOutput;
      return this.apiClient.callApi(
        '/v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SmsAccountAccountIDCampaignImportGet operation.
     * @callback module:api/SMSApi~v1SmsAccountAccountIDCampaignImportGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsCampaignImportedGetAllOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all imported campaigns in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {Object} opts Optional parameters
     * @param {Number} [pageNum] Page number
     * @param {Number} [pageSize] Page size
     * @param {module:api/SMSApi~v1SmsAccountAccountIDCampaignImportGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsCampaignImportedGetAllOutput}
     */
    v1SmsAccountAccountIDCampaignImportGet(accountID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1SmsAccountAccountIDCampaignImportGet");
      }

      let pathParams = {
        'accountID': accountID
      };
      let queryParams = {
        'page_num': opts['pageNum'],
        'page_size': opts['pageSize']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ServiceDocsCampaignImportedGetAllOutput;
      return this.apiClient.callApi(
        '/v1/sms/account/{accountID}/campaign/import', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
