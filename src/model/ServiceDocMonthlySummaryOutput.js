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
import ModelMonthlySummaryReport from './ModelMonthlySummaryReport';

/**
 * The ServiceDocMonthlySummaryOutput model module.
 * @module model/ServiceDocMonthlySummaryOutput
 * @version 1.1
 */
class ServiceDocMonthlySummaryOutput {
    /**
     * Constructs a new <code>ServiceDocMonthlySummaryOutput</code>.
     * @alias module:model/ServiceDocMonthlySummaryOutput
     */
    constructor() { 
        
        ServiceDocMonthlySummaryOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceDocMonthlySummaryOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDocMonthlySummaryOutput} obj Optional instance to populate.
     * @return {module:model/ServiceDocMonthlySummaryOutput} The populated <code>ServiceDocMonthlySummaryOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceDocMonthlySummaryOutput();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ModelMonthlySummaryReport.constructFromObject(data['data']);
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
     * Validates the JSON data with respect to <code>ServiceDocMonthlySummaryOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceDocMonthlySummaryOutput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          ModelMonthlySummaryReport.validateJSON(data['data']);
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
 * @member {module:model/ModelMonthlySummaryReport} data
 */
ServiceDocMonthlySummaryOutput.prototype['data'] = undefined;

/**
 * @member {String} next_start_key
 */
ServiceDocMonthlySummaryOutput.prototype['next_start_key'] = undefined;

/**
 * @member {Number} page_size
 */
ServiceDocMonthlySummaryOutput.prototype['page_size'] = undefined;

/**
 * @member {String} request_id
 */
ServiceDocMonthlySummaryOutput.prototype['request_id'] = undefined;

/**
 * @member {String} start_key
 */
ServiceDocMonthlySummaryOutput.prototype['start_key'] = undefined;

/**
 * @member {Number} status_code
 */
ServiceDocMonthlySummaryOutput.prototype['status_code'] = undefined;






export default ServiceDocMonthlySummaryOutput;

