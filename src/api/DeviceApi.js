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

import ServiceDocsDeviceGetAll;
import ServiceDocsDeviceGetSingle;
import ServiceVOIPDeviceAddEdit2;
import UtilCPAASError;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class DeviceApi {
  private ApiClient apiClient;

  public DeviceApi() {
    this(Configuration.getDefaultApiClient());
  }

  public DeviceApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  /**
   * Delete Device
   * Remove one device from a CPaaS account.
   * @param accountid Account ID, 32 alpha numeric (required)
   * @param deviceid Device ID, 32 alpha numeric (required)
   * @return ServiceDocsDeviceGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidDelete(String accountid, String deviceid) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountid' is set
    if (accountid == null) {
      throw new ApiException(400, "Missing the required parameter 'accountid' when calling v1AccountAccountidDeviceDeviceidDelete");
    }
    
    // verify the required parameter 'deviceid' is set
    if (deviceid == null) {
      throw new ApiException(400, "Missing the required parameter 'deviceid' when calling v1AccountAccountidDeviceDeviceidDelete");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountid}/device/{deviceid}"
      .replaceAll("\\{" + "accountid" + "\\}", apiClient.escapeString(accountid.toString()))
      .replaceAll("\\{" + "deviceid" + "\\}", apiClient.escapeString(deviceid.toString()));

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

    GenericType<ServiceDocsDeviceGetSingle> localVarReturnType = new GenericType<ServiceDocsDeviceGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "DELETE", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Device Details
   * Permit a user to view specific device details.
   * @param accountid Account ID, 32 alpha numeric (required)
   * @param deviceid Device ID, 32 alpha numeric (required)
   * @return ServiceDocsDeviceGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidGet(String accountid, String deviceid) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountid' is set
    if (accountid == null) {
      throw new ApiException(400, "Missing the required parameter 'accountid' when calling v1AccountAccountidDeviceDeviceidGet");
    }
    
    // verify the required parameter 'deviceid' is set
    if (deviceid == null) {
      throw new ApiException(400, "Missing the required parameter 'deviceid' when calling v1AccountAccountidDeviceDeviceidGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountid}/device/{deviceid}"
      .replaceAll("\\{" + "accountid" + "\\}", apiClient.escapeString(accountid.toString()))
      .replaceAll("\\{" + "deviceid" + "\\}", apiClient.escapeString(deviceid.toString()));

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

    GenericType<ServiceDocsDeviceGetSingle> localVarReturnType = new GenericType<ServiceDocsDeviceGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Update Device
   * Edit specifics about the device, such as the device type, name, and owner.
   * @param accountid Account ID, 32 alpha numeric (required)
   * @param deviceid Device ID, 32 alpha numeric (required)
   * @param device device fields (required)
   * @return ServiceDocsDeviceGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidPut(String accountid, String deviceid, ServiceVOIPDeviceAddEdit2 device) throws ApiException {
    Object localVarPostBody = device;
    
    // verify the required parameter 'accountid' is set
    if (accountid == null) {
      throw new ApiException(400, "Missing the required parameter 'accountid' when calling v1AccountAccountidDeviceDeviceidPut");
    }
    
    // verify the required parameter 'deviceid' is set
    if (deviceid == null) {
      throw new ApiException(400, "Missing the required parameter 'deviceid' when calling v1AccountAccountidDeviceDeviceidPut");
    }
    
    // verify the required parameter 'device' is set
    if (device == null) {
      throw new ApiException(400, "Missing the required parameter 'device' when calling v1AccountAccountidDeviceDeviceidPut");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountid}/device/{deviceid}"
      .replaceAll("\\{" + "accountid" + "\\}", apiClient.escapeString(accountid.toString()))
      .replaceAll("\\{" + "deviceid" + "\\}", apiClient.escapeString(deviceid.toString()));

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

    GenericType<ServiceDocsDeviceGetSingle> localVarReturnType = new GenericType<ServiceDocsDeviceGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "PUT", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Get Device List
   * Obtain a list of all devices associated with an account such as fax machines, cell phones, and soft phones.
   * @param accountid Account ID, 32 alpha numeric (required)
   * @param startKey start_key for pagination that was returned as next_start_key from your previous call (optional)
   * @param pageSize number of records to return, range 1 to 50 (optional)
   * @return ServiceDocsDeviceGetAll
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsDeviceGetAll v1AccountAccountidDeviceGet(String accountid, String startKey, Number pageSize) throws ApiException {
    Object localVarPostBody = null;
    
    // verify the required parameter 'accountid' is set
    if (accountid == null) {
      throw new ApiException(400, "Missing the required parameter 'accountid' when calling v1AccountAccountidDeviceGet");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountid}/device"
      .replaceAll("\\{" + "accountid" + "\\}", apiClient.escapeString(accountid.toString()));

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

    GenericType<ServiceDocsDeviceGetAll> localVarReturnType = new GenericType<ServiceDocsDeviceGetAll>() {};
    return apiClient.invokeAPI(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
  /**
   * Create Device
   * Connect a new device to an account to enhance communication methods.
   * @param accountid Account ID, 32 alpha numeric (required)
   * @param device device fields (required)
   * @return ServiceDocsDeviceGetSingle
   * @throws ApiException if fails to make API call
   */
  public ServiceDocsDeviceGetSingle v1AccountAccountidDevicePost(String accountid, ServiceVOIPDeviceAddEdit2 device) throws ApiException {
    Object localVarPostBody = device;
    
    // verify the required parameter 'accountid' is set
    if (accountid == null) {
      throw new ApiException(400, "Missing the required parameter 'accountid' when calling v1AccountAccountidDevicePost");
    }
    
    // verify the required parameter 'device' is set
    if (device == null) {
      throw new ApiException(400, "Missing the required parameter 'device' when calling v1AccountAccountidDevicePost");
    }
    
    // create path and map variables
    String localVarPath = "/v1/account/{accountid}/device"
      .replaceAll("\\{" + "accountid" + "\\}", apiClient.escapeString(accountid.toString()));

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

    GenericType<ServiceDocsDeviceGetSingle> localVarReturnType = new GenericType<ServiceDocsDeviceGetSingle>() {};
    return apiClient.invokeAPI(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localVarReturnType);
      }
}
