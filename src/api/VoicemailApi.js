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

import com.sun.jersey.api.client.GenericType;

import .ApiException;
import .ApiClient;
import .Configuration;
import model.*;
import .Pair;

import ServiceDocsVoicemailGetAll;
import ServiceDocsVoicemailGetSingle;
import ServiceDocsVoicemailMessageGetAll;
import ServiceDocsVoicemailMessageGetSingle;
import ServiceVOIPVoicemailAddEditData;
import ServiceVOIPVoicemailMessageAddData;
import ServiceVOIPVoicemailMessageChange;
import UtilCPAASError;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class VoicemailApi {
  private ApiClient apiClient;

  public VoicemailApi() {
    this(Configuration.getDefaultApiClient());
  }

  public VoicemailApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Get Voicemail Box List
   * List all voicemail boxes in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param startKey start_key for pagination that was returned as next_start_key from your previous call (optional)
   * @param pageSize number of records to return, range 1 to 50 (optional)
   * @return ServiceDocsVoicemailGetAll
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailGetAll v1AccountAccountIDVoicemailGet(String accountID, String startKey, Number pageSize) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPair("start_key", startKey));
    localVarQueryParams.addAll(apiClient.parameterToPair("page_size", pageSize));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailGetAll> localVarReturnType = new GenericType<ServiceDocsVoicemailGetAll>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Create Voicemail Box
   * Create a voicemail box for receiving and storing voicemail messages.
   * @param accountID account ID, 32 alphanumeric (required)
   * @param voicemail voicemail payload fields (required)
   * @return ServiceDocsVoicemailGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailPost(String accountID, ServiceVOIPVoicemailAddEditData voicemail) throws ApiException {
    Object localVarPostBody = voicemail;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailPost");
    }
    
    // verify the required parameter 'voicemail' is set
    if (voicemail == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemail' when calling v1AccountAccountIDVoicemailPost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Delete Voicemail Box
   * Delete a voicemail box in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @return ServiceDocsVoicemailGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDDelete(String accountID, String voicemailID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDDelete");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDDelete");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Voicemail Box Details
   * Get information about a single voicemail box.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @return ServiceDocsVoicemailGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDGet(String accountID, String voicemailID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDGet");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Voicemail Message List
   * Get a list of voicemail messages from an account&#39;s voicemail box.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID voicemail ID, 32 alpha numeric (required)
   * @param startKey start_key for pagination that was returned as next_start_key from your previous call (optional)
   * @param pageSize number of records to return, range 1 to 50 (optional)
   * @return ServiceDocsVoicemailMessageGetAll
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailMessageGetAll v1AccountAccountIDVoicemailVoicemailIDMessageGet(String accountID, String voicemailID, String startKey, Number pageSize) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageGet");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();

    localVarQueryParams.addAll(apiClient.parameterToPair("start_key", startKey));
    localVarQueryParams.addAll(apiClient.parameterToPair("page_size", pageSize));

    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailMessageGetAll> localVarReturnType = new GenericType<ServiceDocsVoicemailMessageGetAll>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Delete Voicemail Message
   * Delete a voicemail message from a voicemail box in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @param messageID message ID, 32 alpha numeric (required)
   * @return ServiceDocsVoicemailMessageGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete(String accountID, String voicemailID, String messageID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete");
    }
    
    // verify the required parameter 'messageID' is set
    if (messageID == null) {
      throw new ApiException(400, "Missing the required parameter 'messageID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()))
      .replaceAll("\\{" + "messageID" + "\\}", apiClient.escapeString(messageID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailMessageGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailMessageGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Voicemail Message Details
   * Retrieve the container details of an individual voicemail message. This includes a reference to the audio file, but not the message itself.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @param messageID Message ID, 39 (yyyymm-&lt;32 id&gt;) (required)
   * @return ServiceDocsVoicemailMessageGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet(String accountID, String voicemailID, String messageID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet");
    }
    
    // verify the required parameter 'messageID' is set
    if (messageID == null) {
      throw new ApiException(400, "Missing the required parameter 'messageID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()))
      .replaceAll("\\{" + "messageID" + "\\}", apiClient.escapeString(messageID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailMessageGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailMessageGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Update Voicemail Message
   * Copy or move a voicemail message to a different folder in the same voicemail box or move the message to a separate voicemail box.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @param messageID Message ID, 39 (yyyymm-&lt;32 id&gt;) (required)
   * @param reqBody payload fields (required)
   * @return ServiceDocsVoicemailMessageGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut(String accountID, String voicemailID, String messageID, ServiceVOIPVoicemailMessageChange reqBody) throws ApiException {
    Object localVarPostBody = reqBody;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut");
    }
    
    // verify the required parameter 'messageID' is set
    if (messageID == null) {
      throw new ApiException(400, "Missing the required parameter 'messageID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut");
    }
    
    // verify the required parameter 'reqBody' is set
    if (reqBody == null) {
      throw new ApiException(400, "Missing the required parameter 'reqBody' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()))
      .replaceAll("\\{" + "messageID" + "\\}", apiClient.escapeString(messageID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailMessageGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailMessageGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Voicemail Message File
   * Get the original audio content of a specific voicemail message identified by its unique ID within an account&#39;s voicemail box. URL Param \&quot;voicemailID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific voicemail box. URL Param \&quot;messageID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific message within a voicemail box.
   * @param accountID Account ID, unique 32-character alphanumeric identifier (required)
   * @param voicemailID Voicemail Box ID, unique 32-character alphanumeric identifier (required)
   * @param messageID Message ID, unique 32-character alphanumeric identifier (required)
   * @return File
   * @throws ApiException if fails to make API call
   */
  public File v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet(String accountID, String voicemailID, String messageID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet");
    }
    
    // verify the required parameter 'messageID' is set
    if (messageID == null) {
      throw new ApiException(400, "Missing the required parameter 'messageID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}/raw"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()))
      .replaceAll("\\{" + "messageID" + "\\}", apiClient.escapeString(messageID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/octet-stream"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<File> localVarReturnType = new GenericType<File>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Add Voicemail Message File
   * Associate an audio recording file with the voicemail to fully complete the message.
   * @param accountID Account ID, 32 alphanumeric characters (required)
   * @param voicemailID Voicemail ID, 32 alphanumeric characters (required)
   * @param messageID Message ID, 32 alphanumeric characters (required)
   * @param file Audio file to upload (required)
   * @return {String: Object}
   * @throws ApiException if fails to make API call
   */
  public {String: Object} v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost(String accountID, String voicemailID, String messageID, File file) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost");
    }
    
    // verify the required parameter 'messageID' is set
    if (messageID == null) {
      throw new ApiException(400, "Missing the required parameter 'messageID' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost");
    }
    
    // verify the required parameter 'file' is set
    if (file == null) {
      throw new ApiException(400, "Missing the required parameter 'file' when calling v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}/raw"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()))
      .replaceAll("\\{" + "messageID" + "\\}", apiClient.escapeString(messageID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    if (file != null)
      localVarFormParams.put("file", file);

    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "multipart/form-data"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<{String: Object}> localVarReturnType = new GenericType<{String: Object}>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Create Voicemail Message
   * Create the container information for a recorded voicemail message in a voicemail box.
   * @param accountID account ID, 32 alphanumeric (required)
   * @param voicemailID voicemail ID, 32 alphanumeric (required)
   * @param message voicemail message payload fields (required)
   * @return ServiceDocsVoicemailMessageGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessagePost(String accountID, String voicemailID, ServiceVOIPVoicemailMessageAddData message) throws ApiException {
    Object localVarPostBody = message;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDMessagePost");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDMessagePost");
    }
    
    // verify the required parameter 'message' is set
    if (message == null) {
      throw new ApiException(400, "Missing the required parameter 'message' when calling v1AccountAccountIDVoicemailVoicemailIDMessagePost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}/message"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailMessageGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailMessageGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Update Voicemail Box
   * Update the settings in an individual voicemail box, such as the owner, PIN, etc.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param voicemailID Voicemail ID, 32 alpha numeric (required)
   * @param reqBody payload fields (required)
   * @return ServiceDocsVoicemailGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDPut(String accountID, String voicemailID, ServiceVOIPVoicemailAddEditData reqBody) throws ApiException {
    Object localVarPostBody = reqBody;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDVoicemailVoicemailIDPut");
    }
    
    // verify the required parameter 'voicemailID' is set
    if (voicemailID == null) {
      throw new ApiException(400, "Missing the required parameter 'voicemailID' when calling v1AccountAccountIDVoicemailVoicemailIDPut");
    }
    
    // verify the required parameter 'reqBody' is set
    if (reqBody == null) {
      throw new ApiException(400, "Missing the required parameter 'reqBody' when calling v1AccountAccountIDVoicemailVoicemailIDPut");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/voicemail/{voicemailID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "voicemailID" + "\\}", apiClient.escapeString(voicemailID.toString()));

    // query params
    List<Pair> localVarQueryParams = new ArrayList<Pair>();
    List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
    Map<String, String> localVarHeaderParams = new HashMap<String, String>();
    Map<String, String> localVarCookieParams = new HashMap<String, String>();
    Map<String, Object> localVarFormParams = new HashMap<String, Object>();


    
    
    
    final String[] localVarAccepts = {
      "application/json"
    };
    final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);

    final String[] localVarContentTypes = {
      "application/json"
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsVoicemailGetSingle> localVarReturnType = new GenericType<ServiceDocsVoicemailGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
}
