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
 * The ModelFeatureMonthlySummary model module.
 * @module model/ModelFeatureMonthlySummary
 * @version 1.1
 */
class ModelFeatureMonthlySummary {
    /**
     * Constructs a new <code>ModelFeatureMonthlySummary</code>.
     * @alias module:model/ModelFeatureMonthlySummary
     */
    constructor() { 
        
        ModelFeatureMonthlySummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelFeatureMonthlySummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelFeatureMonthlySummary} obj Optional instance to populate.
     * @return {module:model/ModelFeatureMonthlySummary} The populated <code>ModelFeatureMonthlySummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelFeatureMonthlySummary();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('feature_count')) {
                obj['feature_count'] = ApiClient.convertToType(data['feature_count'], 'Number');
            }
            if (data.hasOwnProperty('feature_name')) {
                obj['feature_name'] = ApiClient.convertToType(data['feature_name'], 'String');
            }
            if (data.hasOwnProperty('transaction_month')) {
                obj['transaction_month'] = ApiClient.convertToType(data['transaction_month'], 'Number');
            }
            if (data.hasOwnProperty('transaction_year')) {
                obj['transaction_year'] = ApiClient.convertToType(data['transaction_year'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelFeatureMonthlySummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelFeatureMonthlySummary</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['feature_name'] && !(typeof data['feature_name'] === 'string' || data['feature_name'] instanceof String)) {
            throw new Error("Expected the field `feature_name` to be a primitive type in the JSON string but got " + data['feature_name']);
        }

        return true;
    }


}



/**
 * @member {String} created_at
 */
ModelFeatureMonthlySummary.prototype['created_at'] = undefined;

/**
 * @member {Number} feature_count
 */
ModelFeatureMonthlySummary.prototype['feature_count'] = undefined;

/**
 * @member {String} feature_name
 */
ModelFeatureMonthlySummary.prototype['feature_name'] = undefined;

/**
 * @member {Number} transaction_month
 */
ModelFeatureMonthlySummary.prototype['transaction_month'] = undefined;

/**
 * @member {Number} transaction_year
 */
ModelFeatureMonthlySummary.prototype['transaction_year'] = undefined;






export default ModelFeatureMonthlySummary;

