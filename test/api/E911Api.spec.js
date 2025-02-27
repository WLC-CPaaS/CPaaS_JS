/*
 * White Label Communications CPaas API Documentation
 * A CPaaS platform API
 *
 * The version of the OpenAPI document: 1.1
 * Contact: support@whitelabelcomm.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package api;

import .ApiException;
import ServiceDocE911ActiveLocationOutput;
import ServiceDocE911ActiveLocationURIApiOutput;
import ServiceDocE911AddLocationOutput;
import ServiceDocE911LocationsURIApiOutput;
import ServiceDocE911RemoveLocationOutput;
import ServiceDocE911RemoveURIApiOutput;
import ServiceDocE911URIsApiOutput;
import ServiceDocE911ValidateLocationOutput;
import ServiceE911AddLocationInput;
import ServiceE911ValidateLocationInput;
import UtilCPAASError;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for E911Api
 */
class E911ApiTest {

    private final E911Api api = new E911Api();

    /**
     * Get E911 List
     *
     * Obtain e911 URIs associated with the provided account ID.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911GetTest() throws ApiException {
        //
        //ServiceDocE911URIsApiOutput response = api.v1E911Get();

        // TODO: test validations
    }
    /**
     * Activate E911 Location
     *
     * Edit the provision location.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911LocationLocationIDActivatePutTest() throws ApiException {
        //
        //String locationID = null;
        //
        //ServiceDocE911ActiveLocationOutput response = api.v1E911LocationLocationIDActivatePut(locationID);

        // TODO: test validations
    }
    /**
     * Delete E911 Location
     *
     * Remove the location.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911LocationLocationIDDeleteTest() throws ApiException {
        //
        //String locationID = null;
        //
        //ServiceDocE911RemoveLocationOutput response = api.v1E911LocationLocationIDDelete(locationID);

        // TODO: test validations
    }
    /**
     * Validate a Location
     *
     * Validate the location details.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911LocationValidatePutTest() throws ApiException {
        //
        //ServiceE911ValidateLocationInput reqBody = null;
        //
        //ServiceDocE911ValidateLocationOutput response = api.v1E911LocationValidatePut(reqBody);

        // TODO: test validations
    }
    /**
     * Delete E911 Phone Number
     *
     * Delete the e911 URI connected with the account URI.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911PhoneNumberDeleteTest() throws ApiException {
        //
        //String phoneNumber = null;
        //
        //ServiceDocE911RemoveURIApiOutput response = api.v1E911PhoneNumberDelete(phoneNumber);

        // TODO: test validations
    }
    /**
     * Get Actvie Location for a Phone Number
     *
     * Get the e911 location connected with the URI.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911PhoneNumberLocationActiveGetTest() throws ApiException {
        //
        //String phoneNumber = null;
        //
        //ServiceDocE911ActiveLocationURIApiOutput response = api.v1E911PhoneNumberLocationActiveGet(phoneNumber);

        // TODO: test validations
    }
    /**
     * Get Location List for Phone Number
     *
     * Access a list of the e911 locations associated with the provided URI.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911PhoneNumberLocationGetTest() throws ApiException {
        //
        //String phoneNumber = null;
        //
        //ServiceDocE911LocationsURIApiOutput response = api.v1E911PhoneNumberLocationGet(phoneNumber);

        // TODO: test validations
    }
    /**
     * Create an E911 Location
     *
     * Enter new location details.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1E911PostTest() throws ApiException {
        //
        //ServiceE911AddLocationInput reqBody = null;
        //
        //ServiceDocE911AddLocationOutput response = api.v1E911Post(reqBody);

        // TODO: test validations
    }
}
