# DeviceApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AccountAccountidDeviceDeviceidDelete**](DeviceApi.md#v1AccountAccountidDeviceDeviceidDelete) | **DELETE** /v1/account/{accountid}/device/{deviceid} | Delete Device |
| [**v1AccountAccountidDeviceDeviceidGet**](DeviceApi.md#v1AccountAccountidDeviceDeviceidGet) | **GET** /v1/account/{accountid}/device/{deviceid} | Get Device Details |
| [**v1AccountAccountidDeviceDeviceidPut**](DeviceApi.md#v1AccountAccountidDeviceDeviceidPut) | **PUT** /v1/account/{accountid}/device/{deviceid} | Update Device |
| [**v1AccountAccountidDeviceGet**](DeviceApi.md#v1AccountAccountidDeviceGet) | **GET** /v1/account/{accountid}/device | Get Device List |
| [**v1AccountAccountidDevicePost**](DeviceApi.md#v1AccountAccountidDevicePost) | **POST** /v1/account/{accountid}/device | Create Device |



## v1AccountAccountidDeviceDeviceidDelete

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidDelete(accountid, deviceid)

Delete Device

Remove one device from a CPaaS account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.DeviceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        DeviceApi apiInstance = new DeviceApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
        try {
            ServiceDocsDeviceGetSingle result = apiInstance.v1AccountAccountidDeviceDeviceidDelete(accountid, deviceid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DeviceApi#v1AccountAccountidDeviceDeviceidDelete");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountid** | **String**| Account ID, 32 alpha numeric | |
| **deviceid** | **String**| Device ID, 32 alpha numeric | |

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |


## v1AccountAccountidDeviceDeviceidGet

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidGet(accountid, deviceid)

Get Device Details

Permit a user to view specific device details.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.DeviceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        DeviceApi apiInstance = new DeviceApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
        try {
            ServiceDocsDeviceGetSingle result = apiInstance.v1AccountAccountidDeviceDeviceidGet(accountid, deviceid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DeviceApi#v1AccountAccountidDeviceDeviceidGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountid** | **String**| Account ID, 32 alpha numeric | |
| **deviceid** | **String**| Device ID, 32 alpha numeric | |

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |


## v1AccountAccountidDeviceDeviceidPut

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidPut(accountid, deviceid, device)

Update Device

Edit specifics about the device, such as the device type, name, and owner.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.DeviceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        DeviceApi apiInstance = new DeviceApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
        ServiceVOIPDeviceAddEdit2 device = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPDeviceAddEdit2(); // ServiceVOIPDeviceAddEdit2 | device fields
        try {
            ServiceDocsDeviceGetSingle result = apiInstance.v1AccountAccountidDeviceDeviceidPut(accountid, deviceid, device);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DeviceApi#v1AccountAccountidDeviceDeviceidPut");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountid** | **String**| Account ID, 32 alpha numeric | |
| **deviceid** | **String**| Device ID, 32 alpha numeric | |
| **device** | [**ServiceVOIPDeviceAddEdit2**](ServiceVOIPDeviceAddEdit2.md)| device fields | |

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |


## v1AccountAccountidDeviceGet

> ServiceDocsDeviceGetAll v1AccountAccountidDeviceGet(accountid, startKey, pageSize)

Get Device List

Obtain a list of all devices associated with an account such as fax machines, cell phones, and soft phones.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.DeviceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        DeviceApi apiInstance = new DeviceApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String startKey = "startKey_example"; // String | start_key for pagination that was returned as next_start_key from your previous call
        Number pageSize = 56; // Number | number of records to return, range 1 to 50
        try {
            ServiceDocsDeviceGetAll result = apiInstance.v1AccountAccountidDeviceGet(accountid, startKey, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DeviceApi#v1AccountAccountidDeviceGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountid** | **String**| Account ID, 32 alpha numeric | |
| **startKey** | **String**| start_key for pagination that was returned as next_start_key from your previous call | [optional] |
| **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] |

### Return type

[**ServiceDocsDeviceGetAll**](ServiceDocsDeviceGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |


## v1AccountAccountidDevicePost

> ServiceDocsDeviceGetSingle v1AccountAccountidDevicePost(accountid, device)

Create Device

Connect a new device to an account to enhance communication methods.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.DeviceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        DeviceApi apiInstance = new DeviceApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        ServiceVOIPDeviceAddEdit2 device = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPDeviceAddEdit2(); // ServiceVOIPDeviceAddEdit2 | device fields
        try {
            ServiceDocsDeviceGetSingle result = apiInstance.v1AccountAccountidDevicePost(accountid, device);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DeviceApi#v1AccountAccountidDevicePost");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountid** | **String**| Account ID, 32 alpha numeric | |
| **device** | [**ServiceVOIPDeviceAddEdit2**](ServiceVOIPDeviceAddEdit2.md)| device fields | |

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |

