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
import MenuInputData from '../model/MenuInputData';
import MenuOutputDetail from '../model/MenuOutputDetail';
import MenuOutputList from '../model/MenuOutputList';

/**
* Menu service.
* @module api/MenuApi
* @version 1.1
*/
export default class MenuApi {

    /**
    * Constructs a new MenuApi. 
    * @alias module:api/MenuApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1AccountAccountIDMenuGet operation.
     * @callback module:api/MenuApi~v1AccountAccountIDMenuGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MenuOutputList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Menu List
     * Users can access data about all menus in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {Object} opts Optional parameters
     * @param {String} [startKey] start_key for pagination that was returned as next_start_key from your previous call
     * @param {Number} [pageSize] number of records to return, range 1 to 50
     * @param {module:api/MenuApi~v1AccountAccountIDMenuGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MenuOutputList}
     */
    v1AccountAccountIDMenuGet(accountID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMenuGet");
      }

      let pathParams = {
        'accountID': accountID
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
      let returnType = MenuOutputList;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/menu', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDMenuMenuIDDelete operation.
     * @callback module:api/MenuApi~v1AccountAccountIDMenuMenuIDDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MenuOutputDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Menu
     * Delete a menu from an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} menuID Menu ID, 32 alpha numeric
     * @param {module:api/MenuApi~v1AccountAccountIDMenuMenuIDDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MenuOutputDetail}
     */
    v1AccountAccountIDMenuMenuIDDelete(accountID, menuID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMenuMenuIDDelete");
      }
      // verify the required parameter 'menuID' is set
      if (menuID === undefined || menuID === null) {
        throw new Error("Missing the required parameter 'menuID' when calling v1AccountAccountIDMenuMenuIDDelete");
      }

      let pathParams = {
        'accountID': accountID,
        'menuID': menuID
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
      let returnType = MenuOutputDetail;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/menu/{menuID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDMenuMenuIDGet operation.
     * @callback module:api/MenuApi~v1AccountAccountIDMenuMenuIDGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MenuOutputDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Menu Details
     * Get details about a menu in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} menuID Menu ID, 32 alpha numeric
     * @param {module:api/MenuApi~v1AccountAccountIDMenuMenuIDGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MenuOutputDetail}
     */
    v1AccountAccountIDMenuMenuIDGet(accountID, menuID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMenuMenuIDGet");
      }
      // verify the required parameter 'menuID' is set
      if (menuID === undefined || menuID === null) {
        throw new Error("Missing the required parameter 'menuID' when calling v1AccountAccountIDMenuMenuIDGet");
      }

      let pathParams = {
        'accountID': accountID,
        'menuID': menuID
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
      let returnType = MenuOutputDetail;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/menu/{menuID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDMenuMenuIDPut operation.
     * @callback module:api/MenuApi~v1AccountAccountIDMenuMenuIDPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MenuOutputDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Menu
     * Edit an account menu.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} menuID Menu ID, 32 alpha numeric
     * @param {module:model/MenuInputData} reqBody payload fields
     * @param {module:api/MenuApi~v1AccountAccountIDMenuMenuIDPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MenuOutputDetail}
     */
    v1AccountAccountIDMenuMenuIDPut(accountID, menuID, reqBody, callback) {
      let postBody = reqBody;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMenuMenuIDPut");
      }
      // verify the required parameter 'menuID' is set
      if (menuID === undefined || menuID === null) {
        throw new Error("Missing the required parameter 'menuID' when calling v1AccountAccountIDMenuMenuIDPut");
      }
      // verify the required parameter 'reqBody' is set
      if (reqBody === undefined || reqBody === null) {
        throw new Error("Missing the required parameter 'reqBody' when calling v1AccountAccountIDMenuMenuIDPut");
      }

      let pathParams = {
        'accountID': accountID,
        'menuID': menuID
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
      let returnType = MenuOutputDetail;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/menu/{menuID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDMenuPost operation.
     * @callback module:api/MenuApi~v1AccountAccountIDMenuPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MenuOutputDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Menu
     * Create a new menu for an account.
     * @param {String} accountID Account ID, 32 alphanumeric
     * @param {module:model/MenuInputData} menu Menu data
     * @param {module:api/MenuApi~v1AccountAccountIDMenuPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MenuOutputDetail}
     */
    v1AccountAccountIDMenuPost(accountID, menu, callback) {
      let postBody = menu;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMenuPost");
      }
      // verify the required parameter 'menu' is set
      if (menu === undefined || menu === null) {
        throw new Error("Missing the required parameter 'menu' when calling v1AccountAccountIDMenuPost");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MenuOutputDetail;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/menu', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
