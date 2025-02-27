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
 * The ServiceSystemStatusVOIPService model module.
 * @module model/ServiceSystemStatusVOIPService
 * @version 1.1
 */
class ServiceSystemStatusVOIPService {
    /**
     * Constructs a new <code>ServiceSystemStatusVOIPService</code>.
     * @alias module:model/ServiceSystemStatusVOIPService
     */
    constructor() { 
        
        ServiceSystemStatusVOIPService.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceSystemStatusVOIPService</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSystemStatusVOIPService} obj Optional instance to populate.
     * @return {module:model/ServiceSystemStatusVOIPService} The populated <code>ServiceSystemStatusVOIPService</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceSystemStatusVOIPService();

            if (data.hasOwnProperty('apps')) {
                obj['apps'] = ApiClient.convertToType(data['apps'], 'String');
            }
            if (data.hasOwnProperty('backend')) {
                obj['backend'] = ApiClient.convertToType(data['backend'], 'String');
            }
            if (data.hasOwnProperty('call_manager')) {
                obj['call_manager'] = ApiClient.convertToType(data['call_manager'], 'String');
            }
            if (data.hasOwnProperty('media_server')) {
                obj['media_server'] = ApiClient.convertToType(data['media_server'], 'String');
            }
            if (data.hasOwnProperty('message_broker')) {
                obj['message_broker'] = ApiClient.convertToType(data['message_broker'], 'String');
            }
            if (data.hasOwnProperty('sip_proxy')) {
                obj['sip_proxy'] = ApiClient.convertToType(data['sip_proxy'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceSystemStatusVOIPService</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceSystemStatusVOIPService</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apps'] && !(typeof data['apps'] === 'string' || data['apps'] instanceof String)) {
            throw new Error("Expected the field `apps` to be a primitive type in the JSON string but got " + data['apps']);
        }
        // ensure the json data is a string
        if (data['backend'] && !(typeof data['backend'] === 'string' || data['backend'] instanceof String)) {
            throw new Error("Expected the field `backend` to be a primitive type in the JSON string but got " + data['backend']);
        }
        // ensure the json data is a string
        if (data['call_manager'] && !(typeof data['call_manager'] === 'string' || data['call_manager'] instanceof String)) {
            throw new Error("Expected the field `call_manager` to be a primitive type in the JSON string but got " + data['call_manager']);
        }
        // ensure the json data is a string
        if (data['media_server'] && !(typeof data['media_server'] === 'string' || data['media_server'] instanceof String)) {
            throw new Error("Expected the field `media_server` to be a primitive type in the JSON string but got " + data['media_server']);
        }
        // ensure the json data is a string
        if (data['message_broker'] && !(typeof data['message_broker'] === 'string' || data['message_broker'] instanceof String)) {
            throw new Error("Expected the field `message_broker` to be a primitive type in the JSON string but got " + data['message_broker']);
        }
        // ensure the json data is a string
        if (data['sip_proxy'] && !(typeof data['sip_proxy'] === 'string' || data['sip_proxy'] instanceof String)) {
            throw new Error("Expected the field `sip_proxy` to be a primitive type in the JSON string but got " + data['sip_proxy']);
        }

        return true;
    }


}



/**
 * @member {String} apps
 */
ServiceSystemStatusVOIPService.prototype['apps'] = undefined;

/**
 * @member {String} backend
 */
ServiceSystemStatusVOIPService.prototype['backend'] = undefined;

/**
 * @member {String} call_manager
 */
ServiceSystemStatusVOIPService.prototype['call_manager'] = undefined;

/**
 * @member {String} media_server
 */
ServiceSystemStatusVOIPService.prototype['media_server'] = undefined;

/**
 * @member {String} message_broker
 */
ServiceSystemStatusVOIPService.prototype['message_broker'] = undefined;

/**
 * @member {String} sip_proxy
 */
ServiceSystemStatusVOIPService.prototype['sip_proxy'] = undefined;






export default ServiceSystemStatusVOIPService;

