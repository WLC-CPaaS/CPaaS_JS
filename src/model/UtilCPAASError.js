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
 * The UtilCPAASError model module.
 * @module model/UtilCPAASError
 * @version 1.1
 */
class UtilCPAASError {
    /**
     * Constructs a new <code>UtilCPAASError</code>.
     * @alias module:model/UtilCPAASError
     */
    constructor() { 
        
        UtilCPAASError.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UtilCPAASError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UtilCPAASError} obj Optional instance to populate.
     * @return {module:model/UtilCPAASError} The populated <code>UtilCPAASError</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UtilCPAASError();

            if (data.hasOwnProperty('error_code')) {
                obj['error_code'] = ApiClient.convertToType(data['error_code'], 'Number');
            }
            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [Object]);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('status_code')) {
                obj['status_code'] = ApiClient.convertToType(data['status_code'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UtilCPAASError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UtilCPAASError</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['errors'])) {
            throw new Error("Expected the field `errors` to be an array in the JSON data but got " + data['errors']);
        }
        // ensure the json data is a string
        if (data['message'] && !(typeof data['message'] === 'string' || data['message'] instanceof String)) {
            throw new Error("Expected the field `message` to be a primitive type in the JSON string but got " + data['message']);
        }

        return true;
    }


}



/**
 * @member {Number} error_code
 */
UtilCPAASError.prototype['error_code'] = undefined;

/**
 * @member {Array.<Object>} errors
 */
UtilCPAASError.prototype['errors'] = undefined;

/**
 * @member {String} message
 */
UtilCPAASError.prototype['message'] = undefined;

/**
 * @member {Number} status_code
 */
UtilCPAASError.prototype['status_code'] = undefined;






export default UtilCPAASError;

