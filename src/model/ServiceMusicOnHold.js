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
 * The ServiceMusicOnHold model module.
 * @module model/ServiceMusicOnHold
 * @version 1.1
 */
class ServiceMusicOnHold {
    /**
     * Constructs a new <code>ServiceMusicOnHold</code>.
     * @alias module:model/ServiceMusicOnHold
     */
    constructor() { 
        
        ServiceMusicOnHold.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceMusicOnHold</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceMusicOnHold} obj Optional instance to populate.
     * @return {module:model/ServiceMusicOnHold} The populated <code>ServiceMusicOnHold</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceMusicOnHold();

            if (data.hasOwnProperty('media_id')) {
                obj['media_id'] = ApiClient.convertToType(data['media_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceMusicOnHold</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceMusicOnHold</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['media_id'] && !(typeof data['media_id'] === 'string' || data['media_id'] instanceof String)) {
            throw new Error("Expected the field `media_id` to be a primitive type in the JSON string but got " + data['media_id']);
        }

        return true;
    }


}



/**
 * @member {String} media_id
 */
ServiceMusicOnHold.prototype['media_id'] = undefined;






export default ServiceMusicOnHold;

