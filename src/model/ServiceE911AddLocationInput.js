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
import ServiceE911URIInput from './ServiceE911URIInput';

/**
 * The ServiceE911AddLocationInput model module.
 * @module model/ServiceE911AddLocationInput
 * @version 1.1
 */
class ServiceE911AddLocationInput {
    /**
     * Constructs a new <code>ServiceE911AddLocationInput</code>.
     * @alias module:model/ServiceE911AddLocationInput
     */
    constructor() { 
        
        ServiceE911AddLocationInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceE911AddLocationInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceE911AddLocationInput} obj Optional instance to populate.
     * @return {module:model/ServiceE911AddLocationInput} The populated <code>ServiceE911AddLocationInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceE911AddLocationInput();

            if (data.hasOwnProperty('location')) {
                obj['location'] = ServiceE911LocationInput.constructFromObject(data['location']);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ServiceE911URIInput.constructFromObject(data['uri']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceE911AddLocationInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceE911AddLocationInput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `location`
        if (data['location']) { // data not null
          ServiceE911LocationInput.validateJSON(data['location']);
        }
        // validate the optional field `uri`
        if (data['uri']) { // data not null
          ServiceE911URIInput.validateJSON(data['uri']);
        }

        return true;
    }


}



/**
 * @member {module:model/ServiceE911LocationInput} location
 */
ServiceE911AddLocationInput.prototype['location'] = undefined;

/**
 * @member {module:model/ServiceE911URIInput} uri
 */
ServiceE911AddLocationInput.prototype['uri'] = undefined;






export default ServiceE911AddLocationInput;

