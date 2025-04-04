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
 * The ServiceVOIPDeviceAddEdit3a model module.
 * @module model/ServiceVOIPDeviceAddEdit3a
 * @version 1.1
 */
class ServiceVOIPDeviceAddEdit3a {
    /**
     * Constructs a new <code>ServiceVOIPDeviceAddEdit3a</code>.
     * @alias module:model/ServiceVOIPDeviceAddEdit3a
     * @param inviteFormat {module:model/ServiceVOIPDeviceAddEdit3a.InviteFormatEnum} 
     * @param username {String} 
     */
    constructor(inviteFormat, username) { 
        
        ServiceVOIPDeviceAddEdit3a.initialize(this, inviteFormat, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, inviteFormat, username) { 
        obj['invite_format'] = inviteFormat;
        obj['username'] = username;
    }

    /**
     * Constructs a <code>ServiceVOIPDeviceAddEdit3a</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceVOIPDeviceAddEdit3a} obj Optional instance to populate.
     * @return {module:model/ServiceVOIPDeviceAddEdit3a} The populated <code>ServiceVOIPDeviceAddEdit3a</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceVOIPDeviceAddEdit3a();

            if (data.hasOwnProperty('invite_format')) {
                obj['invite_format'] = ApiClient.convertToType(data['invite_format'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceVOIPDeviceAddEdit3a</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceVOIPDeviceAddEdit3a</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceVOIPDeviceAddEdit3a.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['invite_format'] && !(typeof data['invite_format'] === 'string' || data['invite_format'] instanceof String)) {
            throw new Error("Expected the field `invite_format` to be a primitive type in the JSON string but got " + data['invite_format']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }

        return true;
    }


}

ServiceVOIPDeviceAddEdit3a.RequiredProperties = ["invite_format", "username"];

/**
 * @member {module:model/ServiceVOIPDeviceAddEdit3a.InviteFormatEnum} invite_format
 */
ServiceVOIPDeviceAddEdit3a.prototype['invite_format'] = undefined;

/**
 * @member {String} password
 */
ServiceVOIPDeviceAddEdit3a.prototype['password'] = undefined;

/**
 * @member {String} username
 */
ServiceVOIPDeviceAddEdit3a.prototype['username'] = undefined;





/**
 * Allowed values for the <code>invite_format</code> property.
 * @enum {String}
 * @readonly
 */
ServiceVOIPDeviceAddEdit3a['InviteFormatEnum'] = {

    /**
     * value: "username"
     * @const
     */
    "username": "username"
};



export default ServiceVOIPDeviceAddEdit3a;

