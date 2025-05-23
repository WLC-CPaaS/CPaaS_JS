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
 * The ServiceVOIPVoicemailMessageChange model module.
 * @module model/ServiceVOIPVoicemailMessageChange
 * @version 1.1
 */
class ServiceVOIPVoicemailMessageChange {
    /**
     * Constructs a new <code>ServiceVOIPVoicemailMessageChange</code>.
     * @alias module:model/ServiceVOIPVoicemailMessageChange
     */
    constructor() { 
        
        ServiceVOIPVoicemailMessageChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceVOIPVoicemailMessageChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceVOIPVoicemailMessageChange} obj Optional instance to populate.
     * @return {module:model/ServiceVOIPVoicemailMessageChange} The populated <code>ServiceVOIPVoicemailMessageChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceVOIPVoicemailMessageChange();

            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceVOIPVoicemailMessageChange</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceVOIPVoicemailMessageChange</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }

        return true;
    }


}



/**
 * @member {module:model/ServiceVOIPVoicemailMessageChange.FolderEnum} folder
 */
ServiceVOIPVoicemailMessageChange.prototype['folder'] = undefined;

/**
 * @member {Object} source_id
 */
ServiceVOIPVoicemailMessageChange.prototype['source_id'] = undefined;





/**
 * Allowed values for the <code>folder</code> property.
 * @enum {String}
 * @readonly
 */
ServiceVOIPVoicemailMessageChange['FolderEnum'] = {

    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",

    /**
     * value: "saved"
     * @const
     */
    "saved": "saved",

    /**
     * value: "new"
     * @const
     */
    "new": "new"
};



export default ServiceVOIPVoicemailMessageChange;

