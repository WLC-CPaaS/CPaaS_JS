# MetaflowApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AccountAccountIDDeviceDeviceIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/device/{deviceID}/metaflow | Delete Device Metaflow |
| [**v1AccountAccountIDDeviceDeviceIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowGet) | **GET** /v1/account/{accountID}/device/{deviceID}/metaflow | Get Device Metaflow List |
| [**v1AccountAccountIDDeviceDeviceIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowPost) | **POST** /v1/account/{accountID}/device/{deviceID}/metaflow | Create Device Metaflow |
| [**v1AccountAccountIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/metaflow | Delete Account Metaflow |
| [**v1AccountAccountIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDMetaflowGet) | **GET** /v1/account/{accountID}/metaflow | Get Account Metaflow List |
| [**v1AccountAccountIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDMetaflowPost) | **POST** /v1/account/{accountID}/metaflow | Create Account Metaflow |
| [**v1AccountAccountIDUserUserIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/user/{userID}/metaflow | Delete User Metaflow |
| [**v1AccountAccountIDUserUserIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowGet) | **GET** /v1/account/{accountID}/user/{userID}/metaflow | Get User Metaflow List |
| [**v1AccountAccountIDUserUserIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowPost) | **POST** /v1/account/{accountID}/user/{userID}/metaflow | Create User Metaflow |



## v1AccountAccountIDDeviceDeviceIDMetaflowDelete

> ServiceDocMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowDelete(accountID, deviceID)

Delete Device Metaflow

Delete all metaflows associated with a device.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowDelete(accountID, deviceID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDDeviceDeviceIDMetaflowDelete");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **deviceID** | **String**| Device ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDDeviceDeviceIDMetaflowGet

> ServiceDocMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowGet(accountID, deviceID)

Get Device Metaflow List

Get the list of metaflows for a device.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowGet(accountID, deviceID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDDeviceDeviceIDMetaflowGet");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **deviceID** | **String**| Device ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDDeviceDeviceIDMetaflowPost

> ServiceDocMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowPost(accountID, deviceID, reqBody)

Create Device Metaflow

Create a metaflow or multiple metaflows for a device.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
        ServiceVOIPMetaflowAddData reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | payload fields
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowPost(accountID, deviceID, reqBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDDeviceDeviceIDMetaflowPost");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **deviceID** | **String**| Device ID, 32 alpha numeric | |
| **reqBody** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| payload fields | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDMetaflowDelete

> ServiceDocMetaflowGet v1AccountAccountIDMetaflowDelete(accountID)

Delete Account Metaflow

Remove all metaflows from an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDMetaflowDelete(accountID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDMetaflowDelete");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDMetaflowGet

> ServiceDocMetaflowGet v1AccountAccountIDMetaflowGet(accountID)

Get Account Metaflow List

Get an account&#39;s metaflow list.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDMetaflowGet(accountID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDMetaflowGet");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDMetaflowPost

> ServiceDocMetaflowGet v1AccountAccountIDMetaflowPost(accountID, metaflow)

Create Account Metaflow

Generate a metaflow for an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        ServiceVOIPMetaflowAddData metaflow = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | Metaflow fields
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDMetaflowPost(accountID, metaflow);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDMetaflowPost");
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
| **accountID** | **String**| Account ID | |
| **metaflow** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| Metaflow fields | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDUserUserIDMetaflowDelete

> ServiceDocMetaflowGet v1AccountAccountIDUserUserIDMetaflowDelete(accountID, userID)

Delete User Metaflow

Delete all metaflows associated with a user.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String userID = "userID_example"; // String | user ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDUserUserIDMetaflowDelete(accountID, userID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDUserUserIDMetaflowDelete");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **userID** | **String**| user ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDUserUserIDMetaflowGet

> ServiceDocMetaflowGet v1AccountAccountIDUserUserIDMetaflowGet(accountID, userID)

Get User Metaflow List

Get the list of metaflows for a user.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String userID = "userID_example"; // String | user ID, 32 alpha numeric
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDUserUserIDMetaflowGet(accountID, userID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDUserUserIDMetaflowGet");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **userID** | **String**| user ID, 32 alpha numeric | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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


## v1AccountAccountIDUserUserIDMetaflowPost

> ServiceDocMetaflowGet v1AccountAccountIDUserUserIDMetaflowPost(accountID, userID, reqBody)

Create User Metaflow

Add a metaflow or multiple metaflows for a user in an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.MetaflowApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        MetaflowApi apiInstance = new MetaflowApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String userID = "userID_example"; // String | user ID, 32 alpha numeric
        ServiceVOIPMetaflowAddData reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | payload fields
        try {
            ServiceDocMetaflowGet result = apiInstance.v1AccountAccountIDUserUserIDMetaflowPost(accountID, userID, reqBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling MetaflowApi#v1AccountAccountIDUserUserIDMetaflowPost");
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
| **accountID** | **String**| Account ID, 32 alpha numeric | |
| **userID** | **String**| user ID, 32 alpha numeric | |
| **reqBody** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| payload fields | |

### Return type

[**ServiceDocMetaflowGet**](ServiceDocMetaflowGet.md)

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

