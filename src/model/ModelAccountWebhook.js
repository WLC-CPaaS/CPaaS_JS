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
 * The ModelAccountWebhook model module.
 * @module model/ModelAccountWebhook
 * @version 1.1
 */
class ModelAccountWebhook {
    /**
     * Constructs a new <code>ModelAccountWebhook</code>.
     * @alias module:model/ModelAccountWebhook
     */
    constructor() { 
        
        ModelAccountWebhook.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelAccountWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelAccountWebhook} obj Optional instance to populate.
     * @return {module:model/ModelAccountWebhook} The populated <code>ModelAccountWebhook</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelAccountWebhook();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('callback_method')) {
                obj['callback_method'] = ApiClient.convertToType(data['callback_method'], 'String');
            }
            if (data.hasOwnProperty('callback_url')) {
                obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], {'String': Object});
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('is_active')) {
                obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('webhook_type')) {
                obj['webhook_type'] = ApiClient.convertToType(data['webhook_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelAccountWebhook</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelAccountWebhook</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account_id'] && !(typeof data['account_id'] === 'string' || data['account_id'] instanceof String)) {
            throw new Error("Expected the field `account_id` to be a primitive type in the JSON string but got " + data['account_id']);
        }
        // ensure the json data is a string
        if (data['callback_method'] && !(typeof data['callback_method'] === 'string' || data['callback_method'] instanceof String)) {
            throw new Error("Expected the field `callback_method` to be a primitive type in the JSON string but got " + data['callback_method']);
        }
        // ensure the json data is a string
        if (data['callback_url'] && !(typeof data['callback_url'] === 'string' || data['callback_url'] instanceof String)) {
            throw new Error("Expected the field `callback_url` to be a primitive type in the JSON string but got " + data['callback_url']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['webhook_type'] && !(typeof data['webhook_type'] === 'string' || data['webhook_type'] instanceof String)) {
            throw new Error("Expected the field `webhook_type` to be a primitive type in the JSON string but got " + data['webhook_type']);
        }

        return true;
    }


}



/**
 * @member {String} account_id
 */
ModelAccountWebhook.prototype['account_id'] = undefined;

/**
 * @member {String} callback_method
 */
ModelAccountWebhook.prototype['callback_method'] = undefined;

/**
 * @member {String} callback_url
 */
ModelAccountWebhook.prototype['callback_url'] = undefined;

/**
 * @member {String} created_at
 */
ModelAccountWebhook.prototype['created_at'] = undefined;

/**
 * @member {Object.<String, Object>} data
 */
ModelAccountWebhook.prototype['data'] = undefined;

/**
 * @member {String} id
 */
ModelAccountWebhook.prototype['id'] = undefined;

/**
 * @member {Boolean} is_active
 */
ModelAccountWebhook.prototype['is_active'] = undefined;

/**
 * @member {String} title
 */
ModelAccountWebhook.prototype['title'] = undefined;

/**
 * @member {String} updated_at
 */
ModelAccountWebhook.prototype['updated_at'] = undefined;

/**
 * @member {String} webhook_type
 */
ModelAccountWebhook.prototype['webhook_type'] = undefined;






export default ModelAccountWebhook;

