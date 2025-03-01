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
import ServiceCallRecordingParameters from './ServiceCallRecordingParameters';

/**
 * The ServiceCallRecordingSource model module.
 * @module model/ServiceCallRecordingSource
 * @version 1.1
 */
class ServiceCallRecordingSource {
    /**
     * Constructs a new <code>ServiceCallRecordingSource</code>.
     * @alias module:model/ServiceCallRecordingSource
     */
    constructor() { 
        
        ServiceCallRecordingSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceCallRecordingSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceCallRecordingSource} obj Optional instance to populate.
     * @return {module:model/ServiceCallRecordingSource} The populated <code>ServiceCallRecordingSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceCallRecordingSource();

            if (data.hasOwnProperty('any')) {
                obj['any'] = ServiceCallRecordingParameters.constructFromObject(data['any']);
            }
            if (data.hasOwnProperty('offnet')) {
                obj['offnet'] = ServiceCallRecordingParameters.constructFromObject(data['offnet']);
            }
            if (data.hasOwnProperty('onnet')) {
                obj['onnet'] = ServiceCallRecordingParameters.constructFromObject(data['onnet']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ServiceCallRecordingSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ServiceCallRecordingSource</code>.
     */
    static validateJSON(data) {
        // validate the optional field `any`
        if (data['any']) { // data not null
          ServiceCallRecordingParameters.validateJSON(data['any']);
        }
        // validate the optional field `offnet`
        if (data['offnet']) { // data not null
          ServiceCallRecordingParameters.validateJSON(data['offnet']);
        }
        // validate the optional field `onnet`
        if (data['onnet']) { // data not null
          ServiceCallRecordingParameters.validateJSON(data['onnet']);
        }

        return true;
    }


}



/**
 * @member {module:model/ServiceCallRecordingParameters} any
 */
ServiceCallRecordingSource.prototype['any'] = undefined;

/**
 * @member {module:model/ServiceCallRecordingParameters} offnet
 */
ServiceCallRecordingSource.prototype['offnet'] = undefined;

/**
 * @member {module:model/ServiceCallRecordingParameters} onnet
 */
ServiceCallRecordingSource.prototype['onnet'] = undefined;






export default ServiceCallRecordingSource;

