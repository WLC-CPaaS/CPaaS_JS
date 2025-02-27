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
import ServiceDocsCallQueueMemberGetSingle;
import ServiceVOIPCallQueueEnableMembershipData;
import ServiceVOIPQueueMembershipAddData;
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
 * API tests for CallQueueMembershipApi
 */
class CallQueueMembershipApiTest {

    private final CallQueueMembershipApi api = new CallQueueMembershipApi();

    /**
     * Grant Queue Membership to User
     *
     * Allow users to create queue memberships for recipients.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDQueuemembershipPostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //ServiceVOIPQueueMembershipAddData reqBody = null;
        //
        //ServiceDocsCallQueueMemberGetSingle response = api.v1AccountAccountIDQueuemembershipPost(accountID, reqBody);

        // TODO: test validations
    }
    /**
     * Disable Queue Membership
     *
     * Deactivate queue membership for a recipient.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDQueuemembershipRecipientIDDisablePostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String recipientID = null;
        //
        //ServiceAPIResponse response = api.v1AccountAccountIDQueuemembershipRecipientIDDisablePost(accountID, recipientID);

        // TODO: test validations
    }
    /**
     * Enable Queue Membership
     *
     * Activate queue membership for a recipient.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    void v1AccountAccountIDQueuemembershipRecipientIDEnablePostTest() throws ApiException {
        //
        //String accountID = null;
        //
        //String recipientID = null;
        //
        //ServiceVOIPCallQueueEnableMembershipData reqBody = null;
        //
        //ServiceAPIResponse response = api.v1AccountAccountIDQueuemembershipRecipientIDEnablePost(accountID, recipientID, reqBody);

        // TODO: test validations
    }
}
