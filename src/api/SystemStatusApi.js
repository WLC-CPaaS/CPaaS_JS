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
import ProvisioningDocsDocsPingOutput from '../model/ProvisioningDocsDocsPingOutput';
import ResponseProvisionError from '../model/ResponseProvisionError';
import ServiceDocsPingGet from '../model/ServiceDocsPingGet';
import ServiceDocsSystemStatusGetSingle from '../model/ServiceDocsSystemStatusGetSingle';

/**
* SystemStatus service.
* @module api/SystemStatusApi
* @version 1.1
*/
export default class SystemStatusApi {

    /**
    * Constructs a new SystemStatusApi. 
    * @alias module:api/SystemStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1ApPingGet operation.
     * @callback module:api/SystemStatusApi~v1ApPingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProvisioningDocsDocsPingOutput} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provisioning Ping
     * Ping the provisioning service.
     * @param {module:api/SystemStatusApi~v1ApPingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ProvisioningDocsDocsPingOutput}
     */
    v1ApPingGet(callback) {
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
      let returnType = ProvisioningDocsDocsPingOutput;
      return this.apiClient.callApi(
        '/v1/ap/ping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PingGet operation.
     * @callback module:api/SystemStatusApi~v1PingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsPingGet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping Backend
     * Get the ping message.
     * @param {module:api/SystemStatusApi~v1PingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsPingGet}
     */
    v1PingGet(callback) {
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
      let returnType = ServiceDocsPingGet;
      return this.apiClient.callApi(
        '/v1/ping', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1PingseccognitoGet operation.
     * @callback module:api/SystemStatusApi~v1PingseccognitoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsPingGet} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping Cognito
     * Get a secure ping message.
     * @param {module:api/SystemStatusApi~v1PingseccognitoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsPingGet}
     */
    v1PingseccognitoGet(callback) {
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
      let returnType = ServiceDocsPingGet;
      return this.apiClient.callApi(
        '/v1/pingseccognito', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1SystemStatusGet operation.
     * @callback module:api/SystemStatusApi~v1SystemStatusGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsSystemStatusGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get System Status
     * Get the system status.
     * @param {module:api/SystemStatusApi~v1SystemStatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsSystemStatusGetSingle}
     */
    v1SystemStatusGet(callback) {
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
      let returnType = ServiceDocsSystemStatusGetSingle;
      return this.apiClient.callApi(
        '/v1/system_status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
