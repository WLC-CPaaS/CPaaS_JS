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
 * The ServiceE911URIInput model module.
 * @module model/ServiceE911URIInput
 * @version 1.1
 */
class ServiceE911URIInput {
    /**
     * Constructs a new <code>ServiceE911URIInput</code>.
     * @alias module:model/ServiceE911URIInput
     * @param uri {String} 
     */
    constructor(uri) { 
        
        ServiceE911URIInput.initialize(this, uri);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uri) { 
        obj['uri'] = uri;
    }

    /**
     * Constructs a <code>ServiceE911URIInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceE911URIInput} obj Optional instance to populate.
     * @return {module:model/ServiceE911URIInput} The populated <code>ServiceE911URIInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceE911URIInput();

            if (data.hasOwnProperty('callerName')) {
                obj['callerName'] = ApiClient.convertToType(data['callerName'], 'String');
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = ApiClient.convertToType(data['uri'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceE911URIInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceE911URIInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceE911URIInput.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['callerName'] && !(typeof data['callerName'] === 'string' || data['callerName'] instanceof String)) {
            throw new Error("Expected the field `callerName` to be a primitive type in the JSON string but got " + data['callerName']);
        }
        // ensure the json data is a string
        if (data['uri'] && !(typeof data['uri'] === 'string' || data['uri'] instanceof String)) {
            throw new Error("Expected the field `uri` to be a primitive type in the JSON string but got " + data['uri']);
        }

        return true;
    }


}

ServiceE911URIInput.RequiredProperties = ["uri"];

/**
 * @member {String} callerName
 */
ServiceE911URIInput.prototype['callerName'] = undefined;

/**
 * @member {String} uri
 */
ServiceE911URIInput.prototype['uri'] = undefined;






export default ServiceE911URIInput;

