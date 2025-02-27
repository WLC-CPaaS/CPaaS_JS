# WebhookApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1WebhookAccountAccountIDGet**](WebhookApi.md#v1WebhookAccountAccountIDGet) | **GET** /v1/webhook/account/{accountID} | Get Webhook List |
| [**v1WebhookAccountAccountIDPost**](WebhookApi.md#v1WebhookAccountAccountIDPost) | **POST** /v1/webhook/account/{accountID} | Create Webhook |
| [**v1WebhookAccountAccountIDWebhookIDDelete**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDDelete) | **DELETE** /v1/webhook/account/{accountID}/{webhookID} | Delete Webhook |
| [**v1WebhookAccountAccountIDWebhookIDGet**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDGet) | **GET** /v1/webhook/account/{accountID}/{webhookID} | Get Webhook Details |
| [**v1WebhookAccountAccountIDWebhookIDPut**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDPut) | **PUT** /v1/webhook/account/{accountID}/{webhookID} | Update Webhook |



## v1WebhookAccountAccountIDGet

> ServiceDocsWebhookGetAll v1WebhookAccountAccountIDGet(accountID, pageSize, currentPage)

Get Webhook List

Retrieve the webhook list in an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.WebhookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        WebhookApi apiInstance = new WebhookApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        Number pageSize = 56; // Number | number of records to return, range 1 to 50
        Number currentPage = 56; // Number | Current Page
        try {
            ServiceDocsWebhookGetAll result = apiInstance.v1WebhookAccountAccountIDGet(accountID, pageSize, currentPage);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhookApi#v1WebhookAccountAccountIDGet");
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
| **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] |
| **currentPage** | **Number**| Current Page | [optional] |

### Return type

[**ServiceDocsWebhookGetAll**](ServiceDocsWebhookGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## v1WebhookAccountAccountIDPost

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDPost(accountID, body)

Create Webhook

Create a webhook for a specific account ID.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.WebhookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        WebhookApi apiInstance = new WebhookApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        ServiceWebhookAdd body = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceWebhookAdd(); // ServiceWebhookAdd | Webhook data
        try {
            ServiceDocsWebhookGetSingle result = apiInstance.v1WebhookAccountAccountIDPost(accountID, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhookApi#v1WebhookAccountAccountIDPost");
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
| **body** | [**ServiceWebhookAdd**](ServiceWebhookAdd.md)| Webhook data | |

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |


## v1WebhookAccountAccountIDWebhookIDDelete

> ServiceDocsWebhookDelete v1WebhookAccountAccountIDWebhookIDDelete(accountID, webhookID)

Delete Webhook

Remove a webhook identified by its ID for a particular account ID.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.WebhookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        WebhookApi apiInstance = new WebhookApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        Number webhookID = 56; // Number | Webhook ID
        try {
            ServiceDocsWebhookDelete result = apiInstance.v1WebhookAccountAccountIDWebhookIDDelete(accountID, webhookID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhookApi#v1WebhookAccountAccountIDWebhookIDDelete");
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
| **webhookID** | **Number**| Webhook ID | |

### Return type

[**ServiceDocsWebhookDelete**](ServiceDocsWebhookDelete.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## v1WebhookAccountAccountIDWebhookIDGet

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDWebhookIDGet(accountID, webhookID)

Get Webhook Details

Access details about a single webhook ID for an individual account ID.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.WebhookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        WebhookApi apiInstance = new WebhookApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        Number webhookID = 56; // Number | Webhook ID
        try {
            ServiceDocsWebhookGetSingle result = apiInstance.v1WebhookAccountAccountIDWebhookIDGet(accountID, webhookID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhookApi#v1WebhookAccountAccountIDWebhookIDGet");
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
| **webhookID** | **Number**| Webhook ID | |

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |


## v1WebhookAccountAccountIDWebhookIDPut

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDWebhookIDPut(accountID, webhookID, body)

Update Webhook

Update a webhook identified by its ID for a distinct account ID.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.WebhookApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        WebhookApi apiInstance = new WebhookApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID
        String webhookID = "webhookID_example"; // String | Webhook ID
        ServiceWebhookEdit body = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceWebhookEdit(); // ServiceWebhookEdit | Updated webhook data
        try {
            ServiceDocsWebhookGetSingle result = apiInstance.v1WebhookAccountAccountIDWebhookIDPut(accountID, webhookID, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling WebhookApi#v1WebhookAccountAccountIDWebhookIDPut");
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
| **webhookID** | **String**| Webhook ID | |
| **body** | [**ServiceWebhookEdit**](ServiceWebhookEdit.md)| Updated webhook data | |

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |
| **500** | Internal Server Error |  -  |

