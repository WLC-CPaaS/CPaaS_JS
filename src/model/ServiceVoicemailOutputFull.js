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
import ServiceVoicemailMedia from './ServiceVoicemailMedia';

/**
 * The ServiceVoicemailOutputFull model module.
 * @module model/ServiceVoicemailOutputFull
 * @version 1.1
 */
class ServiceVoicemailOutputFull {
    /**
     * Constructs a new <code>ServiceVoicemailOutputFull</code>.
     * @alias module:model/ServiceVoicemailOutputFull
     */
    constructor() { 
        
        ServiceVoicemailOutputFull.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceVoicemailOutputFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceVoicemailOutputFull} obj Optional instance to populate.
     * @return {module:model/ServiceVoicemailOutputFull} The populated <code>ServiceVoicemailOutputFull</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceVoicemailOutputFull();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('mailbox')) {
                obj['mailbox'] = ApiClient.convertToType(data['mailbox'], 'String');
            }
            if (data.hasOwnProperty('media')) {
                obj['media'] = ServiceVoicemailMedia.constructFromObject(data['media']);
            }
            if (data.hasOwnProperty('media_extension')) {
                obj['media_extension'] = ApiClient.convertToType(data['media_extension'], 'String');
            }
            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'String');
            }
            if (data.hasOwnProperty('pin')) {
                obj['pin'] = ApiClient.convertToType(data['pin'], 'String');
            }
            if (data.hasOwnProperty('require_pin')) {
                obj['require_pin'] = ApiClient.convertToType(data['require_pin'], 'Boolean');
            }
            if (data.hasOwnProperty('timezone')) {
                obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceVoicemailOutputFull</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceVoicemailOutputFull</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['mailbox'] && !(typeof data['mailbox'] === 'string' || data['mailbox'] instanceof String)) {
            throw new Error("Expected the field `mailbox` to be a primitive type in the JSON string but got " + data['mailbox']);
        }
        // validate the optional field `media`
        if (data['media']) { // data not null
          ServiceVoicemailMedia.validateJSON(data['media']);
        }
        // ensure the json data is a string
        if (data['media_extension'] && !(typeof data['media_extension'] === 'string' || data['media_extension'] instanceof String)) {
            throw new Error("Expected the field `media_extension` to be a primitive type in the JSON string but got " + data['media_extension']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['owner_id'] && !(typeof data['owner_id'] === 'string' || data['owner_id'] instanceof String)) {
            throw new Error("Expected the field `owner_id` to be a primitive type in the JSON string but got " + data['owner_id']);
        }
        // ensure the json data is a string
        if (data['pin'] && !(typeof data['pin'] === 'string' || data['pin'] instanceof String)) {
            throw new Error("Expected the field `pin` to be a primitive type in the JSON string but got " + data['pin']);
        }
        // ensure the json data is a string
        if (data['timezone'] && !(typeof data['timezone'] === 'string' || data['timezone'] instanceof String)) {
            throw new Error("Expected the field `timezone` to be a primitive type in the JSON string but got " + data['timezone']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ServiceVoicemailOutputFull.prototype['id'] = undefined;

/**
 * @member {String} mailbox
 */
ServiceVoicemailOutputFull.prototype['mailbox'] = undefined;

/**
 * @member {module:model/ServiceVoicemailMedia} media
 */
ServiceVoicemailOutputFull.prototype['media'] = undefined;

/**
 * @member {String} media_extension
 */
ServiceVoicemailOutputFull.prototype['media_extension'] = undefined;

/**
 * @member {Number} messages
 */
ServiceVoicemailOutputFull.prototype['messages'] = undefined;

/**
 * @member {String} name
 */
ServiceVoicemailOutputFull.prototype['name'] = undefined;

/**
 * @member {String} owner_id
 */
ServiceVoicemailOutputFull.prototype['owner_id'] = undefined;

/**
 * @member {String} pin
 */
ServiceVoicemailOutputFull.prototype['pin'] = undefined;

/**
 * @member {Boolean} require_pin
 */
ServiceVoicemailOutputFull.prototype['require_pin'] = undefined;

/**
 * @member {String} timezone
 */
ServiceVoicemailOutputFull.prototype['timezone'] = undefined;






export default ServiceVoicemailOutputFull;

