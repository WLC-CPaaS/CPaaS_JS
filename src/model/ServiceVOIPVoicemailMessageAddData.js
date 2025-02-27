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
 * The ServiceVOIPVoicemailMessageAddData model module.
 * @module model/ServiceVOIPVoicemailMessageAddData
 * @version 1.1
 */
class ServiceVOIPVoicemailMessageAddData {
    /**
     * Constructs a new <code>ServiceVOIPVoicemailMessageAddData</code>.
     * @alias module:model/ServiceVOIPVoicemailMessageAddData
     */
    constructor() { 
        
        ServiceVOIPVoicemailMessageAddData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceVOIPVoicemailMessageAddData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceVOIPVoicemailMessageAddData} obj Optional instance to populate.
     * @return {module:model/ServiceVOIPVoicemailMessageAddData} The populated <code>ServiceVOIPVoicemailMessageAddData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceVOIPVoicemailMessageAddData();

            if (data.hasOwnProperty('caller_id_name')) {
                obj['caller_id_name'] = ApiClient.convertToType(data['caller_id_name'], 'String');
            }
            if (data.hasOwnProperty('caller_id_number')) {
                obj['caller_id_number'] = ApiClient.convertToType(data['caller_id_number'], 'String');
            }
            if (data.hasOwnProperty('folder')) {
                obj['folder'] = ApiClient.convertToType(data['folder'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceVOIPVoicemailMessageAddData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceVOIPVoicemailMessageAddData</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['caller_id_name'] && !(typeof data['caller_id_name'] === 'string' || data['caller_id_name'] instanceof String)) {
            throw new Error("Expected the field `caller_id_name` to be a primitive type in the JSON string but got " + data['caller_id_name']);
        }
        // ensure the json data is a string
        if (data['caller_id_number'] && !(typeof data['caller_id_number'] === 'string' || data['caller_id_number'] instanceof String)) {
            throw new Error("Expected the field `caller_id_number` to be a primitive type in the JSON string but got " + data['caller_id_number']);
        }
        // ensure the json data is a string
        if (data['folder'] && !(typeof data['folder'] === 'string' || data['folder'] instanceof String)) {
            throw new Error("Expected the field `folder` to be a primitive type in the JSON string but got " + data['folder']);
        }
        // ensure the json data is a string
        if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
            throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
        }
        // ensure the json data is a string
        if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
            throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
        }

        return true;
    }


}



/**
 * @member {String} caller_id_name
 */
ServiceVOIPVoicemailMessageAddData.prototype['caller_id_name'] = undefined;

/**
 * @member {String} caller_id_number
 */
ServiceVOIPVoicemailMessageAddData.prototype['caller_id_number'] = undefined;

/**
 * @member {module:model/ServiceVOIPVoicemailMessageAddData.FolderEnum} folder
 */
ServiceVOIPVoicemailMessageAddData.prototype['folder'] = undefined;

/**
 * @member {String} from
 */
ServiceVOIPVoicemailMessageAddData.prototype['from'] = undefined;

/**
 * @member {String} to
 */
ServiceVOIPVoicemailMessageAddData.prototype['to'] = undefined;





/**
 * Allowed values for the <code>folder</code> property.
 * @enum {String}
 * @readonly
 */
ServiceVOIPVoicemailMessageAddData['FolderEnum'] = {

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



export default ServiceVOIPVoicemailMessageAddData;

