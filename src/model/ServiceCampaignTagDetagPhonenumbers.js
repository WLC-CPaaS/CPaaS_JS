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
 * The ServiceCampaignTagDetagPhonenumbers model module.
 * @module model/ServiceCampaignTagDetagPhonenumbers
 * @version 1.1
 */
class ServiceCampaignTagDetagPhonenumbers {
    /**
     * Constructs a new <code>ServiceCampaignTagDetagPhonenumbers</code>.
     * @alias module:model/ServiceCampaignTagDetagPhonenumbers
     * @param phoneNumbers {Array.<String>} 
     */
    constructor(phoneNumbers) { 
        
        ServiceCampaignTagDetagPhonenumbers.initialize(this, phoneNumbers);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, phoneNumbers) { 
        obj['phone_numbers'] = phoneNumbers;
    }

    /**
     * Constructs a <code>ServiceCampaignTagDetagPhonenumbers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCampaignTagDetagPhonenumbers} obj Optional instance to populate.
     * @return {module:model/ServiceCampaignTagDetagPhonenumbers} The populated <code>ServiceCampaignTagDetagPhonenumbers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceCampaignTagDetagPhonenumbers();

            if (data.hasOwnProperty('detag')) {
                obj['detag'] = ApiClient.convertToType(data['detag'], 'Boolean');
            }
            if (data.hasOwnProperty('phone_numbers')) {
                obj['phone_numbers'] = ApiClient.convertToType(data['phone_numbers'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceCampaignTagDetagPhonenumbers</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceCampaignTagDetagPhonenumbers</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ServiceCampaignTagDetagPhonenumbers.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is an array
        if (!Array.isArray(data['phone_numbers'])) {
            throw new Error("Expected the field `phone_numbers` to be an array in the JSON data but got " + data['phone_numbers']);
        }

        return true;
    }


}

ServiceCampaignTagDetagPhonenumbers.RequiredProperties = ["phone_numbers"];

/**
 * @member {Boolean} detag
 */
ServiceCampaignTagDetagPhonenumbers.prototype['detag'] = undefined;

/**
 * @member {Array.<String>} phone_numbers
 */
ServiceCampaignTagDetagPhonenumbers.prototype['phone_numbers'] = undefined;






export default ServiceCampaignTagDetagPhonenumbers;

