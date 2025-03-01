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
import ServiceE911LocationInput from './ServiceE911LocationInput';

/**
 * The ServiceE911ValidateLocationInput model module.
 * @module model/ServiceE911ValidateLocationInput
 * @version 1.1
 */
class ServiceE911ValidateLocationInput {
    /**
     * Constructs a new <code>ServiceE911ValidateLocationInput</code>.
     * @alias module:model/ServiceE911ValidateLocationInput
     * @param location {module:model/ServiceE911LocationInput} 
     */
    constructor(location) { 
        
        ServiceE911ValidateLocationInput.initialize(this, location);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, location) { 
        obj['location'] = location;
    }

    /**
     * Constructs a <code>ServiceE911ValidateLocationInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceE911ValidateLocationInput} obj Optional instance to populate.
     * @return {module:model/ServiceE911ValidateLocationInput} The populated <code>ServiceE911ValidateLocationInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceE911ValidateLocationInput();

            if (data.hasOwnProperty('location')) {
                obj['location'] = ServiceE911LocationInput.constructFromObject(data['location']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceE911ValidateLocationInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceE911ValidateLocationInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceE911ValidateLocationInput.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `location`
        if (data['location']) { // data not null
          ServiceE911LocationInput.validateJSON(data['location']);
        }

        return true;
    }


}

ServiceE911ValidateLocationInput.RequiredProperties = ["location"];

/**
 * @member {module:model/ServiceE911LocationInput} location
 */
ServiceE911ValidateLocationInput.prototype['location'] = undefined;






export default ServiceE911ValidateLocationInput;

