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

import ServiceAPIResponse;
import ServiceDocsCallQueueResponseShort;
import ServiceDocsGetQueueRecipients;
import ServiceVOIPCallQueueRecipientLoginLogoutData;
import ServiceVOIPCallQueueRecipientStatusData;
import UtilCPAASError;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class CallQueueRecipientApi {
  private ApiClient apiClient;

  public CallQueueRecipientApi() {
    this(Configuration.getDefaultApiClient());
  }

  public CallQueueRecipientApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Login as Recipient
   * Agents must log in to receive calls. Depending on their membership, they can log in to one or more queues. (If an agent is a member of more than one queue, they will receive calls from all the queues they are a part of.)
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param recipientID Recipient ID, 32 alpha numeric (required)
   * @param reqBody payload fields (required)
   * @return ServiceDocsCallQueueResponseShort
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallQueueResponseShort v1AccountAccountIDLoginrecipientRecipientIDPost(String accountID, String recipientID, ServiceVOIPCallQueueRecipientLoginLogoutData reqBody) throws ApiException {
    Object localVarPostBody = reqBody;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDLoginrecipientRecipientIDPost");
    }
    
    // verify the required parameter 'recipientID' is set
    if (recipientID == null) {
      throw new ApiException(400, "Missing the required parameter 'recipientID' when calling v1AccountAccountIDLoginrecipientRecipientIDPost");
    }
    
    // verify the required parameter 'reqBody' is set
    if (reqBody == null) {
      throw new ApiException(400, "Missing the required parameter 'reqBody' when calling v1AccountAccountIDLoginrecipientRecipientIDPost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/loginrecipient/{recipientID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "recipientID" + "\\}", apiClient.escapeString(recipientID.toString()));

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

    GenericType<ServiceDocsCallQueueResponseShort> localVarReturnType = new GenericType<ServiceDocsCallQueueResponseShort>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Change Recipient Status
   * Get a list of all recipients in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @return ServiceDocsGetQueueRecipients
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsGetQueueRecipients v1AccountAccountIDQueuerecipientGet(String accountID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDQueuerecipientGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/queuerecipient"
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
      
    };
    final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

    String[] localVarAuthNames = new String[] { "BearerAuth" };

    GenericType<ServiceDocsGetQueueRecipients> localVarReturnType = new GenericType<ServiceDocsGetQueueRecipients>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Recipient List
   * Change the status of a recipient to ready, away, etc.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param recipientID Recipient ID, 32 alpha numeric (required)
   * @param reqBody payload fields (required)
   * @return ServiceAPIResponse
   * @throws ApiException if fails to make API call
   */
  public ServiceAPIResponse v1AccountAccountIDRecipientRecipientIDStatusPost(String accountID, String recipientID, ServiceVOIPCallQueueRecipientStatusData reqBody) throws ApiException {
    Object localVarPostBody = reqBody;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDRecipientRecipientIDStatusPost");
    }
    
    // verify the required parameter 'recipientID' is set
    if (recipientID == null) {
      throw new ApiException(400, "Missing the required parameter 'recipientID' when calling v1AccountAccountIDRecipientRecipientIDStatusPost");
    }
    
    // verify the required parameter 'reqBody' is set
    if (reqBody == null) {
      throw new ApiException(400, "Missing the required parameter 'reqBody' when calling v1AccountAccountIDRecipientRecipientIDStatusPost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/recipient/{recipientID}/status"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "recipientID" + "\\}", apiClient.escapeString(recipientID.toString()));

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

    GenericType<ServiceAPIResponse> localVarReturnType = new GenericType<ServiceAPIResponse>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
}
