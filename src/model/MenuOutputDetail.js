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
import MenuOutputDetailData from './MenuOutputDetailData';

/**
 * The MenuOutputDetail model module.
 * @module model/MenuOutputDetail
 * @version 1.1
 */
class MenuOutputDetail {
    /**
     * Constructs a new <code>MenuOutputDetail</code>.
     * @alias module:model/MenuOutputDetail
     */
    constructor() { 
        
        MenuOutputDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MenuOutputDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MenuOutputDetail} obj Optional instance to populate.
     * @return {module:model/MenuOutputDetail} The populated <code>MenuOutputDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MenuOutputDetail();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], MenuOutputDetailData);
            }
            if (data.hasOwnProperty('request_id')) {
                obj['request_id'] = ApiClient.convertToType(data['request_id'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MenuOutputDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MenuOutputDetail</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          MenuOutputDetailData.validateJSON(data['data']);
        }
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }

        return true;
    }


}



/**
 * Data Payload
 * @member {module:model/MenuOutputDetailData} data
 */
MenuOutputDetail.prototype['data'] = undefined;

/**
 * Unique id for each request
 * @member {String} request_id
 */
MenuOutputDetail.prototype['request_id'] = undefined;

/**
 * HTTP response status code
 * @member {Number} status_code
 */
MenuOutputDetail.prototype['status_code'] = undefined;






export default MenuOutputDetail;

