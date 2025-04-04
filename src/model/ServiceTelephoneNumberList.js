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
 * The ServiceTelephoneNumberList model module.
 * @module model/ServiceTelephoneNumberList
 * @version 1.1
 */
class ServiceTelephoneNumberList {
    /**
     * Constructs a new <code>ServiceTelephoneNumberList</code>.
     * @alias module:model/ServiceTelephoneNumberList
     */
    constructor() { 
        
        ServiceTelephoneNumberList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceTelephoneNumberList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceTelephoneNumberList} obj Optional instance to populate.
     * @return {module:model/ServiceTelephoneNumberList} The populated <code>ServiceTelephoneNumberList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceTelephoneNumberList();

            if (data.hasOwnProperty('TelephoneNumber')) {
                obj['TelephoneNumber'] = ApiClient.convertToType(data['TelephoneNumber'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceTelephoneNumberList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceTelephoneNumberList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['TelephoneNumber'])) {
            throw new Error("Expected the field `TelephoneNumber` to be an array in the JSON data but got " + data['TelephoneNumber']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} TelephoneNumber
 */
ServiceTelephoneNumberList.prototype['TelephoneNumber'] = undefined;






export default ServiceTelephoneNumberList;

