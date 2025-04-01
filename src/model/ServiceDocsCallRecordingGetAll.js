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

import ApiClient from '../ApiClient';
import ServiceCallRecordingOutput from './ServiceCallRecordingOutput';

/**
 * The ServiceDocsCallRecordingGetAll model module.
 * @module model/ServiceDocsCallRecordingGetAll
 * @version 1.1
 */
class ServiceDocsCallRecordingGetAll {
    /**
     * Constructs a new <code>ServiceDocsCallRecordingGetAll</code>.
     * @alias module:model/ServiceDocsCallRecordingGetAll
     */
    constructor() { 
        
        ServiceDocsCallRecordingGetAll.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceDocsCallRecordingGetAll</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDocsCallRecordingGetAll} obj Optional instance to populate.
     * @return {module:model/ServiceDocsCallRecordingGetAll} The populated <code>ServiceDocsCallRecordingGetAll</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceDocsCallRecordingGetAll();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ServiceCallRecordingOutput]);
            }
            if (data.hasOwnProperty('next_start_key')) {
                obj['next_start_key'] = ApiClient.convertToType(data['next_start_key'], 'String');
            }
            if (data.hasOwnProperty('page_size')) {
                obj['page_size'] = ApiClient.convertToType(data['page_size'], 'Number');
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('start_key')) {
                obj['start_key'] = ApiClient.convertToType(data['start_key'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceDocsCallRecordingGetAll</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceDocsCallRecordingGetAll</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                ServiceCallRecordingOutput.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['next_start_key'] && !(typeof data['next_start_key'] === 'string' || data['next_start_key'] instanceof String)) {
            throw new Error("Expected the field `next_start_key` to be a primitive type in the JSON string but got " + data['next_start_key']);
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }
        // ensure the json data is a string
        if (data['start_key'] && !(typeof data['start_key'] === 'string' || data['start_key'] instanceof String)) {
            throw new Error("Expected the field `start_key` to be a primitive type in the JSON string but got " + data['start_key']);
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/ServiceCallRecordingOutput>} data
 */
ServiceDocsCallRecordingGetAll.prototype['data'] = undefined;

/**
 * List Pagination: Used to get the next page of results. Will not exist if this is the last page.
 * @member {String} next_start_key
 */
ServiceDocsCallRecordingGetAll.prototype['next_start_key'] = undefined;

/**
 * List Pagination: The number of results returned in this page
 * @member {Number} page_size
 */
ServiceDocsCallRecordingGetAll.prototype['page_size'] = undefined;

/**
 * Unique id for each request
 * @member {String} request_id
 */
ServiceDocsCallRecordingGetAll.prototype['request_id'] = undefined;

/**
 * List Pagination: Code for paged results
 * @member {String} start_key
 */
ServiceDocsCallRecordingGetAll.prototype['start_key'] = undefined;

/**
 * HTTP response status code
 * @member {Number} status_code
 */
ServiceDocsCallRecordingGetAll.prototype['status_code'] = undefined;






export default ServiceDocsCallRecordingGetAll;

