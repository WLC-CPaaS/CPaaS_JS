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
 * The ModelsVOIPDeviceOutputLineKey model module.
 * @module model/ModelsVOIPDeviceOutputLineKey
 * @version 1.1
 */
class ModelsVOIPDeviceOutputLineKey {
    /**
     * Constructs a new <code>ModelsVOIPDeviceOutputLineKey</code>.
     * @alias module:model/ModelsVOIPDeviceOutputLineKey
     */
    constructor() { 
        
        ModelsVOIPDeviceOutputLineKey.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelsVOIPDeviceOutputLineKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelsVOIPDeviceOutputLineKey} obj Optional instance to populate.
     * @return {module:model/ModelsVOIPDeviceOutputLineKey} The populated <code>ModelsVOIPDeviceOutputLineKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelsVOIPDeviceOutputLineKey();

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('label')) {
                obj['label'] = ApiClient.convertToType(data['label'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelsVOIPDeviceOutputLineKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelsVOIPDeviceOutputLineKey</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['label'] && !(typeof data['label'] === 'string' || data['label'] instanceof String)) {
            throw new Error("Expected the field `label` to be a primitive type in the JSON string but got " + data['label']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }


}



/**
 * @member {Number} count
 */
ModelsVOIPDeviceOutputLineKey.prototype['count'] = undefined;

/**
 * @member {String} label
 */
ModelsVOIPDeviceOutputLineKey.prototype['label'] = undefined;

/**
 * @member {String} type
 */
ModelsVOIPDeviceOutputLineKey.prototype['type'] = undefined;

/**
 * @member {String} value
 */
ModelsVOIPDeviceOutputLineKey.prototype['value'] = undefined;






export default ModelsVOIPDeviceOutputLineKey;

