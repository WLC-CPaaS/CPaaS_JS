# VoIPUserApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AccountAccountidUserGet**](VoIPUserApi.md#v1AccountAccountidUserGet) | **GET** /v1/account/{accountid}/user | Get User List |
| [**v1AccountAccountidUserPost**](VoIPUserApi.md#v1AccountAccountidUserPost) | **POST** /v1/account/{accountid}/user | Create User |
| [**v1AccountAccountidUserUseridDelete**](VoIPUserApi.md#v1AccountAccountidUserUseridDelete) | **DELETE** /v1/account/{accountid}/user/{userid} | Delete User |
| [**v1AccountAccountidUserUseridGet**](VoIPUserApi.md#v1AccountAccountidUserUseridGet) | **GET** /v1/account/{accountid}/user/{userid} | Get User Details |
| [**v1AccountAccountidUserUseridPut**](VoIPUserApi.md#v1AccountAccountidUserUseridPut) | **PUT** /v1/account/{accountid}/user/{userid} | Update User |



## v1AccountAccountidUserGet

> ServiceDocsUserGetAll v1AccountAccountidUserGet(accountid, startKey, pageSize)

Get User List

Get a list of all VoIP users that includes first and last names, email addresses, extensions, and account statuses.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.VoIPUserApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        VoIPUserApi apiInstance = new VoIPUserApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String startKey = "startKey_example"; // String | start_key for pagination that was returned as next_start_key from your previous call
        Number pageSize = 56; // Number | number of records to return, range 1 to 50
        try {
            ServiceDocsUserGetAll result = apiInstance.v1AccountAccountidUserGet(accountid, startKey, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling VoIPUserApi#v1AccountAccountidUserGet");
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

[**ServiceDocsUserGetAll**](ServiceDocsUserGetAll.md)

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


## v1AccountAccountidUserPost

> ServiceDocsUserGetSingle v1AccountAccountidUserPost(accountid, user)

Create User

Add new users to the account. When a user is added, the system generates their unique 32 alpha numeric ID.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.VoIPUserApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        VoIPUserApi apiInstance = new VoIPUserApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        ServiceVOIPUserAdd2 user = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPUserAdd2(); // ServiceVOIPUserAdd2 | user fields
        try {
            ServiceDocsUserGetSingle result = apiInstance.v1AccountAccountidUserPost(accountid, user);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling VoIPUserApi#v1AccountAccountidUserPost");
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
| **user** | [**ServiceVOIPUserAdd2**](ServiceVOIPUserAdd2.md)| user fields | |

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

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


## v1AccountAccountidUserUseridDelete

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridDelete(accountid, userid)

Delete User

Delete VoIP user access to maintain the security of your accounts.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.VoIPUserApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        VoIPUserApi apiInstance = new VoIPUserApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String userid = "userid_example"; // String | User ID, 32 alpha numeric
        try {
            ServiceDocsUserGetSingle result = apiInstance.v1AccountAccountidUserUseridDelete(accountid, userid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling VoIPUserApi#v1AccountAccountidUserUseridDelete");
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
| **userid** | **String**| User ID, 32 alpha numeric | |

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

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


## v1AccountAccountidUserUseridGet

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridGet(accountid, userid)

Get User Details

View specific user details.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.VoIPUserApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        VoIPUserApi apiInstance = new VoIPUserApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String userid = "userid_example"; // String | User ID, 32 alpha numeric
        try {
            ServiceDocsUserGetSingle result = apiInstance.v1AccountAccountidUserUseridGet(accountid, userid);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling VoIPUserApi#v1AccountAccountidUserUseridGet");
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
| **userid** | **String**| User ID, 32 alpha numeric | |

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

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


## v1AccountAccountidUserUseridPut

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridPut(accountid, userid, user)

Update User

Keep user information current. Modify the first and last name, extension, and other pertinent information.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.VoIPUserApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        VoIPUserApi apiInstance = new VoIPUserApi(defaultClient);
        String accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
        String userid = "userid_example"; // String | User ID, 32 alpha numeric
        ServiceVOIPUserAdd2 user = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPUserAdd2(); // ServiceVOIPUserAdd2 | user fields
        try {
            ServiceDocsUserGetSingle result = apiInstance.v1AccountAccountidUserUseridPut(accountid, userid, user);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling VoIPUserApi#v1AccountAccountidUserUseridPut");
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
| **userid** | **String**| User ID, 32 alpha numeric | |
| **user** | [**ServiceVOIPUserAdd2**](ServiceVOIPUserAdd2.md)| user fields | |

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

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

