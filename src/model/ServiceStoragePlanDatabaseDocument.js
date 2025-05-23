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
import ServiceStoragePlanDatabaseAttachment from './ServiceStoragePlanDatabaseAttachment';

/**
 * The ServiceStoragePlanDatabaseDocument model module.
 * @module model/ServiceStoragePlanDatabaseDocument
 * @version 1.1
 */
class ServiceStoragePlanDatabaseDocument {
    /**
     * Constructs a new <code>ServiceStoragePlanDatabaseDocument</code>.
     * @alias module:model/ServiceStoragePlanDatabaseDocument
     */
    constructor() { 
        
        ServiceStoragePlanDatabaseDocument.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceStoragePlanDatabaseDocument</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceStoragePlanDatabaseDocument} obj Optional instance to populate.
     * @return {module:model/ServiceStoragePlanDatabaseDocument} The populated <code>ServiceStoragePlanDatabaseDocument</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceStoragePlanDatabaseDocument();

            if (data.hasOwnProperty('attachments')) {
                obj['attachments'] = ServiceStoragePlanDatabaseAttachment.constructFromObject(data['attachments']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = ApiClient.convertToType(data['connection'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceStoragePlanDatabaseDocument</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceStoragePlanDatabaseDocument</code>.
     */
    static validateJSON(data) {
        // validate the optional field `attachments`
        if (data['attachments']) { // data not null
          ServiceStoragePlanDatabaseAttachment.validateJSON(data['attachments']);
        }
        // ensure the json data is a string
        if (data['connection'] && !(typeof data['connection'] === 'string' || data['connection'] instanceof String)) {
            throw new Error("Expected the field `connection` to be a primitive type in the JSON string but got " + data['connection']);
        }

        return true;
    }


}



/**
 * @member {module:model/ServiceStoragePlanDatabaseAttachment} attachments
 */
ServiceStoragePlanDatabaseDocument.prototype['attachments'] = undefined;

/**
 * @member {String} connection
 */
ServiceStoragePlanDatabaseDocument.prototype['connection'] = undefined;






export default ServiceStoragePlanDatabaseDocument;

