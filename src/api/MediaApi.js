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
import ServiceDocsMediaGetAll from '../model/ServiceDocsMediaGetAll';
import ServiceDocsMediaGetSingle from '../model/ServiceDocsMediaGetSingle';
import ServiceVOIPMediaAddEditData from '../model/ServiceVOIPMediaAddEditData';

/**
* Media service.
* @module api/MediaApi
* @version 1.1
*/
export default class MediaApi {

    /**
    * Constructs a new MediaApi. 
    * @alias module:api/MediaApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the v1AccountAccountIDMediaMediaIDFileGet operation.
     * @callback module:api/MediaApi~v1AccountAccountIDMediaMediaIDFileGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Media File
     * Gather data about the media objects in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} mediaID Media ID, 32 alpha numeric
     * @param {module:api/MediaApi~v1AccountAccountIDMediaMediaIDFileGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    v1AccountAccountIDMediaMediaIDFileGet(accountID, mediaID, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMediaMediaIDFileGet");
      }
      // verify the required parameter 'mediaID' is set
      if (mediaID === undefined || mediaID === null) {
        throw new Error("Missing the required parameter 'mediaID' when calling v1AccountAccountIDMediaMediaIDFileGet");
      }

      let pathParams = {
        'accountID': accountID,
        'mediaID': mediaID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['BearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json', 'audio/mp3', 'audio/mpeg', 'audio/mpeg3', 'audio/x-wav', 'audio/wav', 'audio/ogg', 'video/x-flv', 'video/h264', 'video/mpeg', 'video/quicktime', 'video/mp4', 'video/webm'];
      let returnType = File;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/media/{mediaID}/file', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountIDMediaMediaIDFilePost operation.
     * @callback module:api/MediaApi~v1AccountAccountIDMediaMediaIDFilePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsMediaGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Media File
     * Include a media file that is connected to a media object in an account.
     * @param {String} accountID Account ID, 32 alpha numeric
     * @param {String} mediaID Media ID, 32 alpha numeric
     * @param {File} file Media file
     * @param {module:api/MediaApi~v1AccountAccountIDMediaMediaIDFilePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsMediaGetSingle}
     */
    v1AccountAccountIDMediaMediaIDFilePost(accountID, mediaID, file, callback) {
      let postBody = null;
      // verify the required parameter 'accountID' is set
      if (accountID === undefined || accountID === null) {
        throw new Error("Missing the required parameter 'accountID' when calling v1AccountAccountIDMediaMediaIDFilePost");
      }
      // verify the required parameter 'mediaID' is set
      if (mediaID === undefined || mediaID === null) {
        throw new Error("Missing the required parameter 'mediaID' when calling v1AccountAccountIDMediaMediaIDFilePost");
      }
      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling v1AccountAccountIDMediaMediaIDFilePost");
      }

      let pathParams = {
        'accountID': accountID,
        'mediaID': mediaID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'file': file
      };

      let authNames = ['BearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ServiceDocsMediaGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountID}/media/{mediaID}/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidMediaGet operation.
     * @callback module:api/MediaApi~v1AccountAccountidMediaGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsMediaGetAll} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Media List
     * View all media files for an account in your organization.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {Object} opts Optional parameters
     * @param {String} [startKey] start_key for pagination that was returned as next_start_key from your previous call
     * @param {Number} [pageSize] number of records to return, range 1 to 50
     * @param {module:api/MediaApi~v1AccountAccountidMediaGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsMediaGetAll}
     */
    v1AccountAccountidMediaGet(accountid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidMediaGet");
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
      let returnType = ServiceDocsMediaGetAll;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/media', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidMediaMediaidDelete operation.
     * @callback module:api/MediaApi~v1AccountAccountidMediaMediaidDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsMediaGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Media
     * Remove a media file that is no longer in use from an account.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {String} mediaid Device ID, 32 alpha numeric
     * @param {module:api/MediaApi~v1AccountAccountidMediaMediaidDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsMediaGetSingle}
     */
    v1AccountAccountidMediaMediaidDelete(accountid, mediaid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidMediaMediaidDelete");
      }
      // verify the required parameter 'mediaid' is set
      if (mediaid === undefined || mediaid === null) {
        throw new Error("Missing the required parameter 'mediaid' when calling v1AccountAccountidMediaMediaidDelete");
      }

      let pathParams = {
        'accountid': accountid,
        'mediaid': mediaid
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
      let returnType = ServiceDocsMediaGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/media/{mediaid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidMediaMediaidGet operation.
     * @callback module:api/MediaApi~v1AccountAccountidMediaMediaidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsMediaGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Media Details
     * Permit users to view an account's specific media information.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {String} mediaid Media ID, 32 alpha numeric
     * @param {module:api/MediaApi~v1AccountAccountidMediaMediaidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsMediaGetSingle}
     */
    v1AccountAccountidMediaMediaidGet(accountid, mediaid, callback) {
      let postBody = null;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidMediaMediaidGet");
      }
      // verify the required parameter 'mediaid' is set
      if (mediaid === undefined || mediaid === null) {
        throw new Error("Missing the required parameter 'mediaid' when calling v1AccountAccountidMediaMediaidGet");
      }

      let pathParams = {
        'accountid': accountid,
        'mediaid': mediaid
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
      let returnType = ServiceDocsMediaGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/media/{mediaid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the v1AccountAccountidMediaPost operation.
     * @callback module:api/MediaApi~v1AccountAccountidMediaPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceDocsMediaGetSingle} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Media
     * Generate a media object to allow users to upload a media file in an account.
     * @param {String} accountid Account ID, 32 alpha numeric
     * @param {module:model/ServiceVOIPMediaAddEditData} media Media creation or update payload
     * @param {module:api/MediaApi~v1AccountAccountidMediaPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceDocsMediaGetSingle}
     */
    v1AccountAccountidMediaPost(accountid, media, callback) {
      let postBody = media;
      // verify the required parameter 'accountid' is set
      if (accountid === undefined || accountid === null) {
        throw new Error("Missing the required parameter 'accountid' when calling v1AccountAccountidMediaPost");
      }
      // verify the required parameter 'media' is set
      if (media === undefined || media === null) {
        throw new Error("Missing the required parameter 'media' when calling v1AccountAccountidMediaPost");
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
      let returnType = ServiceDocsMediaGetSingle;
      return this.apiClient.callApi(
        '/v1/account/{accountid}/media', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
