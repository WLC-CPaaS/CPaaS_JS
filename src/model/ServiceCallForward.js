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
 * The ServiceCallForward model module.
 * @module model/ServiceCallForward
 * @version 1.1
 */
class ServiceCallForward {
    /**
     * Constructs a new <code>ServiceCallForward</code>.
     * @alias module:model/ServiceCallForward
     */
    constructor() { 
        
        ServiceCallForward.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceCallForward</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCallForward} obj Optional instance to populate.
     * @return {module:model/ServiceCallForward} The populated <code>ServiceCallForward</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceCallForward();

            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceCallForward</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceCallForward</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['number'] && !(typeof data['number'] === 'string' || data['number'] instanceof String)) {
            throw new Error("Expected the field `number` to be a primitive type in the JSON string but got " + data['number']);
        }

        return true;
    }


}



/**
 * @member {Boolean} enabled
 */
ServiceCallForward.prototype['enabled'] = undefined;

/**
 * @member {String} number
 */
ServiceCallForward.prototype['number'] = undefined;






export default ServiceCallForward;

