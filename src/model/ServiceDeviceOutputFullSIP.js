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
 * The ServiceDeviceOutputFullSIP model module.
 * @module model/ServiceDeviceOutputFullSIP
 * @version 1.1
 */
class ServiceDeviceOutputFullSIP {
    /**
     * Constructs a new <code>ServiceDeviceOutputFullSIP</code>.
     * @alias module:model/ServiceDeviceOutputFullSIP
     */
    constructor() { 
        
        ServiceDeviceOutputFullSIP.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceDeviceOutputFullSIP</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceDeviceOutputFullSIP} obj Optional instance to populate.
     * @return {module:model/ServiceDeviceOutputFullSIP} The populated <code>ServiceDeviceOutputFullSIP</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceDeviceOutputFullSIP();

            if (data.hasOwnProperty('invite_format')) {
                obj['invite_format'] = ApiClient.convertToType(data['invite_format'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceDeviceOutputFullSIP</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceDeviceOutputFullSIP</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['invite_format'] && !(typeof data['invite_format'] === 'string' || data['invite_format'] instanceof String)) {
            throw new Error("Expected the field `invite_format` to be a primitive type in the JSON string but got " + data['invite_format']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}



/**
 * @member {String} invite_format
 */
ServiceDeviceOutputFullSIP.prototype['invite_format'] = undefined;

/**
 * @member {String} password
 */
ServiceDeviceOutputFullSIP.prototype['password'] = undefined;

/**
 * @member {String} username
 */
ServiceDeviceOutputFullSIP.prototype['username'] = undefined;






export default ServiceDeviceOutputFullSIP;

