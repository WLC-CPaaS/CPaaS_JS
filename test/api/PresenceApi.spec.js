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
import ServiceAPIResponse;
import ServiceDocsPresenceGet;
import ServiceVOIPPresenceSetResetEditData;
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
 * API tests for PresenceApi
 */
class PresenceApiTest {

    private final PresenceApi api = new PresenceApi();

    /**
     * Set/Reset Presence for Extension
     *
     * Set or reset the presence status of an extension.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDPresenceExtensionPutTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String extension = null;
        //
        //ServiceVOIPPresenceSetResetEditData reqBody = null;
        //
        //ServiceAPIResponse response = api.v1AccountAccountIDPresenceExtensionPut(accountID, extension, reqBody);

        // TODO: test validations
    }
    /**
     * Get Presence Details
     *
     * Retrieve details of presence subscriptions in an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDPresenceGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //ServiceDocsPresenceGet response = api.v1AccountAccountIDPresenceGet(accountID);

        // TODO: test validations
    }
    /**
     * Set/Reset Presence for User
     *
     * Set or reset the presence status of a user within an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDUserUserIDPresencePutTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String userID = null;
        //
        //ServiceVOIPPresenceSetResetEditData reqBody = null;
        //
        //ServiceAPIResponse response = api.v1AccountAccountIDUserUserIDPresencePut(accountID, userID, reqBody);

        // TODO: test validations
    }
}
