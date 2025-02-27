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

/**
 * The ServiceAPIResponseStatusCodeOnly model module.
 * @module model/ServiceAPIResponseStatusCodeOnly
 * @version 1.1
 */
class ServiceAPIResponseStatusCodeOnly {
    /**
     * Constructs a new <code>ServiceAPIResponseStatusCodeOnly</code>.
     * @alias module:model/ServiceAPIResponseStatusCodeOnly
     */
    constructor() { 
        
        ServiceAPIResponseStatusCodeOnly.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceAPIResponseStatusCodeOnly</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceAPIResponseStatusCodeOnly} obj Optional instance to populate.
     * @return {module:model/ServiceAPIResponseStatusCodeOnly} The populated <code>ServiceAPIResponseStatusCodeOnly</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceAPIResponseStatusCodeOnly();

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
     * Validates the JSON data with respect to <code>ServiceAPIResponseStatusCodeOnly</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceAPIResponseStatusCodeOnly</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['request_id'] && !(typeof data['request_id'] === 'string' || data['request_id'] instanceof String)) {
            throw new Error("Expected the field `request_id` to be a primitive type in the JSON string but got " + data['request_id']);
        }

        return true;
    }


}



/**
 * @member {String} request_id
 */
ServiceAPIResponseStatusCodeOnly.prototype['request_id'] = undefined;

/**
 * @member {Number} status_code
 */
ServiceAPIResponseStatusCodeOnly.prototype['status_code'] = undefined;






export default ServiceAPIResponseStatusCodeOnly;

