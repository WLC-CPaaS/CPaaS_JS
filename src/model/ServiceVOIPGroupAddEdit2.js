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
import ServiceEndpoint from './ServiceEndpoint';

/**
 * The ServiceVOIPGroupAddEdit2 model module.
 * @module model/ServiceVOIPGroupAddEdit2
 * @version 1.1
 */
class ServiceVOIPGroupAddEdit2 {
    /**
     * Constructs a new <code>ServiceVOIPGroupAddEdit2</code>.
     * @alias module:model/ServiceVOIPGroupAddEdit2
     * @param endpoints {Object.<String, module:model/ServiceEndpoint>} 
     * @param name {String} 
     */
    constructor(endpoints, name) { 
        
        ServiceVOIPGroupAddEdit2.initialize(this, endpoints, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, endpoints, name) { 
        obj['endpoints'] = endpoints;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ServiceVOIPGroupAddEdit2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceVOIPGroupAddEdit2} obj Optional instance to populate.
     * @return {module:model/ServiceVOIPGroupAddEdit2} The populated <code>ServiceVOIPGroupAddEdit2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceVOIPGroupAddEdit2();

            if (data.hasOwnProperty('endpoints')) {
                obj['endpoints'] = ApiClient.convertToType(data['endpoints'], {'String': ServiceEndpoint});
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceVOIPGroupAddEdit2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceVOIPGroupAddEdit2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceVOIPGroupAddEdit2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ServiceVOIPGroupAddEdit2.RequiredProperties = ["endpoints", "name"];

/**
 * @member {Object.<String, module:model/ServiceEndpoint>} endpoints
 */
ServiceVOIPGroupAddEdit2.prototype['endpoints'] = undefined;

/**
 * @member {String} name
 */
ServiceVOIPGroupAddEdit2.prototype['name'] = undefined;






export default ServiceVOIPGroupAddEdit2;

