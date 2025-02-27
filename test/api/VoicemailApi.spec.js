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
import ServiceDocsVoicemailGetAll;
import ServiceDocsVoicemailGetSingle;
import ServiceDocsVoicemailMessageGetAll;
import ServiceDocsVoicemailMessageGetSingle;
import ServiceVOIPVoicemailAddEditData;
import ServiceVOIPVoicemailMessageAddData;
import ServiceVOIPVoicemailMessageChange;
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
 * API tests for VoicemailApi
 */
class VoicemailApiTest {

    private final VoicemailApi api = new VoicemailApi();

    /**
     * Get Voicemail Box List
     *
     * List all voicemail boxes in an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String startKey = null;
        //
        //Number pageSize = null;
        //
        //ServiceDocsVoicemailGetAll response = api.v1AccountAccountIDVoicemailGet(accountID, startKey, pageSize);

        // TODO: test validations
    }
    /**
     * Create Voicemail Box
     *
     * Create a voicemail box for receiving and storing voicemail messages.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailPostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //ServiceVOIPVoicemailAddEditData voicemail = null;
        //
        //ServiceDocsVoicemailGetSingle response = api.v1AccountAccountIDVoicemailPost(accountID, voicemail);

        // TODO: test validations
    }
    /**
     * Delete Voicemail Box
     *
     * Delete a voicemail box in an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDDeleteTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //ServiceDocsVoicemailGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDDelete(accountID, voicemailID);

        // TODO: test validations
    }
    /**
     * Get Voicemail Box Details
     *
     * Get information about a single voicemail box.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //ServiceDocsVoicemailGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDGet(accountID, voicemailID);

        // TODO: test validations
    }
    /**
     * Get Voicemail Message List
     *
     * Get a list of voicemail messages from an account&#39;s voicemail box.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String startKey = null;
        //
        //Number pageSize = null;
        //
        //ServiceDocsVoicemailMessageGetAll response = api.v1AccountAccountIDVoicemailVoicemailIDMessageGet(accountID, voicemailID, startKey, pageSize);

        // TODO: test validations
    }
    /**
     * Delete Voicemail Message
     *
     * Delete a voicemail message from a voicemail box in an account.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDeleteTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String messageID = null;
        //
        //ServiceDocsVoicemailMessageGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete(accountID, voicemailID, messageID);

        // TODO: test validations
    }
    /**
     * Get Voicemail Message Details
     *
     * Retrieve the container details of an individual voicemail message. This includes a reference to the audio file, but not the message itself.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String messageID = null;
        //
        //ServiceDocsVoicemailMessageGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet(accountID, voicemailID, messageID);

        // TODO: test validations
    }
    /**
     * Update Voicemail Message
     *
     * Copy or move a voicemail message to a different folder in the same voicemail box or move the message to a separate voicemail box.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPutTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String messageID = null;
        //
        //ServiceVOIPVoicemailMessageChange reqBody = null;
        //
        //ServiceDocsVoicemailMessageGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut(accountID, voicemailID, messageID, reqBody);

        // TODO: test validations
    }
    /**
     * Get Voicemail Message File
     *
     * Get the original audio content of a specific voicemail message identified by its unique ID within an account&#39;s voicemail box. URL Param \&quot;voicemailID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific voicemail box. URL Param \&quot;messageID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific message within a voicemail box.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGetTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String messageID = null;
        //
        //File response = api.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet(accountID, voicemailID, messageID);

        // TODO: test validations
    }
    /**
     * Add Voicemail Message File
     *
     * Associate an audio recording file with the voicemail to fully complete the message.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //String messageID = null;
        //
        //File file = null;
        //
        //{String: Object} response = api.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost(accountID, voicemailID, messageID, file);

        // TODO: test validations
    }
    /**
     * Create Voicemail Message
     *
     * Create the container information for a recorded voicemail message in a voicemail box.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDMessagePostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //ServiceVOIPVoicemailMessageAddData message = null;
        //
        //ServiceDocsVoicemailMessageGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDMessagePost(accountID, voicemailID, message);

        // TODO: test validations
    }
    /**
     * Update Voicemail Box
     *
     * Update the settings in an individual voicemail box, such as the owner, PIN, etc.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDVoicemailVoicemailIDPutTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String voicemailID = null;
        //
        //ServiceVOIPVoicemailAddEditData reqBody = null;
        //
        //ServiceDocsVoicemailGetSingle response = api.v1AccountAccountIDVoicemailVoicemailIDPut(accountID, voicemailID, reqBody);

        // TODO: test validations
    }
}
