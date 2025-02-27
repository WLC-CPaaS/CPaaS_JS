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

import ServiceCallflowAddEditData;
import ServiceDocsCallflowGetAll;
import ServiceDocsCallflowGetSingle;
import UtilCPAASError;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class CallflowApi {
  private ApiClient apiClient;

  public CallflowApi() {
    this(Configuration.getDefaultApiClient());
  }

  public CallflowApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Delete Call Group
   * Delete a callflow in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param callflowID callflow ID, 32 alpha numeric (required)
   * @return ServiceDocsCallflowGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallflowGetSingle v1AccountAccountIDCallflowCallflowIDDelete(String accountID, String callflowID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDCallflowCallflowIDDelete");
    }
    
    // verify the required parameter 'callflowID' is set
    if (callflowID == null) {
      throw new ApiException(400, "Missing the required parameter 'callflowID' when calling v1AccountAccountIDCallflowCallflowIDDelete");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/callflow/{callflowID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "callflowID" + "\\}", apiClient.escapeString(callflowID.toString()));

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

    GenericType<ServiceDocsCallflowGetSingle> localVarReturnType = new GenericType<ServiceDocsCallflowGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Call Group Details
   * Get the details for a single callflow in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param callflowID Callflow ID, 32 alpha numeric (required)
   * @return ServiceDocsCallflowGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallflowGetSingle v1AccountAccountIDCallflowCallflowIDGet(String accountID, String callflowID) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDCallflowCallflowIDGet");
    }
    
    // verify the required parameter 'callflowID' is set
    if (callflowID == null) {
      throw new ApiException(400, "Missing the required parameter 'callflowID' when calling v1AccountAccountIDCallflowCallflowIDGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/callflow/{callflowID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "callflowID" + "\\}", apiClient.escapeString(callflowID.toString()));

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

    GenericType<ServiceDocsCallflowGetSingle> localVarReturnType = new GenericType<ServiceDocsCallflowGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Update Call Group
   * Update the details for a single callflow in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param callflowID Callflow ID, 32 alpha numeric (required)
   * @param reqBody payload fields (required)
   * @return ServiceDocsCallflowGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallflowGetSingle v1AccountAccountIDCallflowCallflowIDPut(String accountID, String callflowID, ServiceCallflowAddEditData reqBody) throws ApiException {
    Object localVarPostBody = reqBody;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDCallflowCallflowIDPut");
    }
    
    // verify the required parameter 'callflowID' is set
    if (callflowID == null) {
      throw new ApiException(400, "Missing the required parameter 'callflowID' when calling v1AccountAccountIDCallflowCallflowIDPut");
    }
    
    // verify the required parameter 'reqBody' is set
    if (reqBody == null) {
      throw new ApiException(400, "Missing the required parameter 'reqBody' when calling v1AccountAccountIDCallflowCallflowIDPut");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/callflow/{callflowID}"
      .replaceAll("\\{" + "accountID" + "\\}", apiClient.escapeString(accountID.toString()))
      .replaceAll("\\{" + "callflowID" + "\\}", apiClient.escapeString(callflowID.toString()));

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

    GenericType<ServiceDocsCallflowGetSingle> localVarReturnType = new GenericType<ServiceDocsCallflowGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Callflow List
   * Permit a user to view the callflow details in an account.
   * @param accountID Account ID, 32 alpha numeric (required)
   * @param startKey start_key for pagination that was returned as next_start_key from your previous call (optional)
   * @param pageSize number of records to return, range 1 to 50 (optional)
   * @return ServiceDocsCallflowGetAll
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallflowGetAll v1AccountAccountIDCallflowGet(String accountID, String startKey, Number pageSize) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDCallflowGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/callflow"
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

    GenericType<ServiceDocsCallflowGetAll> localVarReturnType = new GenericType<ServiceDocsCallflowGetAll>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Create Call Group
   * Create instructions for routing a call to a user or system.
   * @param accountID Account ID, 32 alpha-numeric (required)
   * @param request Call flow configuration (required)
   * @return ServiceDocsCallflowGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsCallflowGetSingle v1AccountAccountIDCallflowPost(String accountID, ServiceCallflowAddEditData request) throws ApiException {
    Object localVarPostBody = request;
    
    // verify the required parameter 'accountID' is set
    if (accountID == null) {
      throw new ApiException(400, "Missing the required parameter 'accountID' when calling v1AccountAccountIDCallflowPost");
    }
    
    // verify the required parameter 'request' is set
    if (request == null) {
      throw new ApiException(400, "Missing the required parameter 'request' when calling v1AccountAccountIDCallflowPost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountID}/callflow"
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

    GenericType<ServiceDocsCallflowGetSingle> localVarReturnType = new GenericType<ServiceDocsCallflowGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
}
