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
 * The ModelEndpointList model module.
 * @module model/ModelEndpointList
 * @version 1.1
 */
class ModelEndpointList {
    /**
     * Constructs a new <code>ModelEndpointList</code>.
     * @alias module:model/ModelEndpointList
     */
    constructor() { 
        
        ModelEndpointList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelEndpointList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelEndpointList} obj Optional instance to populate.
     * @return {module:model/ModelEndpointList} The populated <code>ModelEndpointList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelEndpointList();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('endpoint_name')) {
                obj['endpoint_name'] = ApiClient.convertToType(data['endpoint_name'], 'String');
            }
            if (data.hasOwnProperty('feature_name')) {
                obj['feature_name'] = ApiClient.convertToType(data['feature_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('transaction_type')) {
                obj['transaction_type'] = ApiClient.convertToType(data['transaction_type'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelEndpointList</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelEndpointList</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['endpoint_name'] && !(typeof data['endpoint_name'] === 'string' || data['endpoint_name'] instanceof String)) {
            throw new Error("Expected the field `endpoint_name` to be a primitive type in the JSON string but got " + data['endpoint_name']);
        }
        // ensure the json data is a string
        if (data['feature_name'] && !(typeof data['feature_name'] === 'string' || data['feature_name'] instanceof String)) {
            throw new Error("Expected the field `feature_name` to be a primitive type in the JSON string but got " + data['feature_name']);
        }
        // ensure the json data is a string
        if (data['transaction_type'] && !(typeof data['transaction_type'] === 'string' || data['transaction_type'] instanceof String)) {
            throw new Error("Expected the field `transaction_type` to be a primitive type in the JSON string but got " + data['transaction_type']);
        }
        // ensure the json data is a string
        if (data['version'] && !(typeof data['version'] === 'string' || data['version'] instanceof String)) {
            throw new Error("Expected the field `version` to be a primitive type in the JSON string but got " + data['version']);
        }

        return true;
    }


}



/**
 * @member {String} created_at
 */
ModelEndpointList.prototype['created_at'] = undefined;

/**
 * @member {String} endpoint_name
 */
ModelEndpointList.prototype['endpoint_name'] = undefined;

/**
 * @member {String} feature_name
 */
ModelEndpointList.prototype['feature_name'] = undefined;

/**
 * @member {Number} id
 */
ModelEndpointList.prototype['id'] = undefined;

/**
 * @member {String} transaction_type
 */
ModelEndpointList.prototype['transaction_type'] = undefined;

/**
 * @member {String} version
 */
ModelEndpointList.prototype['version'] = undefined;






export default ModelEndpointList;

