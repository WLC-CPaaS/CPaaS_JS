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
 * The ServiceQueueRecipientOutputFullFeatures model module.
 * @module model/ServiceQueueRecipientOutputFullFeatures
 * @version 1.1
 */
class ServiceQueueRecipientOutputFullFeatures {
    /**
     * Constructs a new <code>ServiceQueueRecipientOutputFullFeatures</code>.
     * @alias module:model/ServiceQueueRecipientOutputFullFeatures
     */
    constructor() { 
        
        ServiceQueueRecipientOutputFullFeatures.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceQueueRecipientOutputFullFeatures</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceQueueRecipientOutputFullFeatures} obj Optional instance to populate.
     * @return {module:model/ServiceQueueRecipientOutputFullFeatures} The populated <code>ServiceQueueRecipientOutputFullFeatures</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceQueueRecipientOutputFullFeatures();

            if (data.hasOwnProperty('account_upgrade')) {
                obj['account_upgrade'] = ApiClient.convertToType(data['account_upgrade'], 'String');
            }
            if (data.hasOwnProperty('pro')) {
                obj['pro'] = ApiClient.convertToType(data['pro'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceQueueRecipientOutputFullFeatures</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceQueueRecipientOutputFullFeatures</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['account_upgrade'] && !(typeof data['account_upgrade'] === 'string' || data['account_upgrade'] instanceof String)) {
            throw new Error("Expected the field `account_upgrade` to be a primitive type in the JSON string but got " + data['account_upgrade']);
        }

        return true;
    }


}



/**
 * @member {String} account_upgrade
 */
ServiceQueueRecipientOutputFullFeatures.prototype['account_upgrade'] = undefined;

/**
 * @member {Boolean} pro
 */
ServiceQueueRecipientOutputFullFeatures.prototype['pro'] = undefined;






export default ServiceQueueRecipientOutputFullFeatures;

