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
import ServiceStoragePlan from './ServiceStoragePlan';

/**
 * The ServiceStorageOutput model module.
 * @module model/ServiceStorageOutput
 * @version 1.1
 */
class ServiceStorageOutput {
    /**
     * Constructs a new <code>ServiceStorageOutput</code>.
     * @alias module:model/ServiceStorageOutput
     */
    constructor() { 
        
        ServiceStorageOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceStorageOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceStorageOutput} obj Optional instance to populate.
     * @return {module:model/ServiceStorageOutput} The populated <code>ServiceStorageOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceStorageOutput();

            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ApiClient.convertToType(data['attachments'], {'String': Object});
            }
            if (data.hasOwnProperty('connections')) {
                obj['connections'] = ApiClient.convertToType(data['connections'], {'String': Object});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('plan')) {
                obj['plan'] = ServiceStoragePlan.constructFromObject(data['plan']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceStorageOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceStorageOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // validate the optional field `plan`
        if (data['plan']) { // data not null
          ServiceStoragePlan.validateJSON(data['plan']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, Object>} attachments
 */
ServiceStorageOutput.prototype['attachments'] = undefined;

/**
 * @member {Object.<String, Object>} connections
 */
ServiceStorageOutput.prototype['connections'] = undefined;

/**
 * @member {String} id
 */
ServiceStorageOutput.prototype['id'] = undefined;

/**
 * @member {module:model/ServiceStoragePlan} plan
 */
ServiceStorageOutput.prototype['plan'] = undefined;






export default ServiceStorageOutput;

