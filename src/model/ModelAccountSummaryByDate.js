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
 * The ModelAccountSummaryByDate model module.
 * @module model/ModelAccountSummaryByDate
 * @version 1.1
 */
class ModelAccountSummaryByDate {
    /**
     * Constructs a new <code>ModelAccountSummaryByDate</code>.
     * @alias module:model/ModelAccountSummaryByDate
     */
    constructor() { 
        
        ModelAccountSummaryByDate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModelAccountSummaryByDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModelAccountSummaryByDate} obj Optional instance to populate.
     * @return {module:model/ModelAccountSummaryByDate} The populated <code>ModelAccountSummaryByDate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModelAccountSummaryByDate();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'String');
            }
            if (data.hasOwnProperty('transaction_count')) {
                obj['transaction_count'] = ApiClient.convertToType(data['transaction_count'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModelAccountSummaryByDate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModelAccountSummaryByDate</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['date'] && !(typeof data['date'] === 'string' || data['date'] instanceof String)) {
            throw new Error("Expected the field `date` to be a primitive type in the JSON string but got " + data['date']);
        }

        return true;
    }


}



/**
 * @member {Number} cost
 */
ModelAccountSummaryByDate.prototype['cost'] = undefined;

/**
 * @member {String} date
 */
ModelAccountSummaryByDate.prototype['date'] = undefined;

/**
 * @member {Number} transaction_count
 */
ModelAccountSummaryByDate.prototype['transaction_count'] = undefined;






export default ModelAccountSummaryByDate;

