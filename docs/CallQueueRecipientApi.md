# CallQueueRecipientApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AccountAccountIDLoginrecipientRecipientIDPost**](CallQueueRecipientApi.md#v1AccountAccountIDLoginrecipientRecipientIDPost) | **POST** /v1/account/{accountID}/loginrecipient/{recipientID} | Login as Recipient |
| [**v1AccountAccountIDQueuerecipientGet**](CallQueueRecipientApi.md#v1AccountAccountIDQueuerecipientGet) | **GET** /v1/account/{accountID}/queuerecipient | Change Recipient Status |
| [**v1AccountAccountIDRecipientRecipientIDStatusPost**](CallQueueRecipientApi.md#v1AccountAccountIDRecipientRecipientIDStatusPost) | **POST** /v1/account/{accountID}/recipient/{recipientID}/status | Get Recipient List |



## v1AccountAccountIDLoginrecipientRecipientIDPost

> ServiceDocsCallQueueResponseShort v1AccountAccountIDLoginrecipientRecipientIDPost(accountID, recipientID, reqBody)

Login as Recipient

Agents must log in to receive calls. Depending on their membership, they can log in to one or more queues. (If an agent is a member of more than one queue, they will receive calls from all the queues they are a part of.)

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.CallQueueRecipientApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        CallQueueRecipientApi apiInstance = new CallQueueRecipientApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
        ServiceVOIPCallQueueRecipientLoginLogoutData reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueRecipientLoginLogoutData(); // ServiceVOIPCallQueueRecipientLoginLogoutData | payload fields
        try {
            ServiceDocsCallQueueResponseShort result = apiInstance.v1AccountAccountIDLoginrecipientRecipientIDPost(accountID, recipientID, reqBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallQueueRecipientApi#v1AccountAccountIDLoginrecipientRecipientIDPost");
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
| **recipientID** | **String**| Recipient ID, 32 alpha numeric | |
| **reqBody** | [**ServiceVOIPCallQueueRecipientLoginLogoutData**](ServiceVOIPCallQueueRecipientLoginLogoutData.md)| payload fields | |

### Return type

[**ServiceDocsCallQueueResponseShort**](ServiceDocsCallQueueResponseShort.md)

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


## v1AccountAccountIDQueuerecipientGet

> ServiceDocsGetQueueRecipients v1AccountAccountIDQueuerecipientGet(accountID)

Change Recipient Status

Get a list of all recipients in an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.CallQueueRecipientApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        CallQueueRecipientApi apiInstance = new CallQueueRecipientApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        try {
            ServiceDocsGetQueueRecipients result = apiInstance.v1AccountAccountIDQueuerecipientGet(accountID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallQueueRecipientApi#v1AccountAccountIDQueuerecipientGet");
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

[**ServiceDocsGetQueueRecipients**](ServiceDocsGetQueueRecipients.md)

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


## v1AccountAccountIDRecipientRecipientIDStatusPost

> ServiceAPIResponse v1AccountAccountIDRecipientRecipientIDStatusPost(accountID, recipientID, reqBody)

Get Recipient List

Change the status of a recipient to ready, away, etc.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.CallQueueRecipientApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        CallQueueRecipientApi apiInstance = new CallQueueRecipientApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
        ServiceVOIPCallQueueRecipientStatusData reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueRecipientStatusData(); // ServiceVOIPCallQueueRecipientStatusData | payload fields
        try {
            ServiceAPIResponse result = apiInstance.v1AccountAccountIDRecipientRecipientIDStatusPost(accountID, recipientID, reqBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling CallQueueRecipientApi#v1AccountAccountIDRecipientRecipientIDStatusPost");
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
| **recipientID** | **String**| Recipient ID, 32 alpha numeric | |
| **reqBody** | [**ServiceVOIPCallQueueRecipientStatusData**](ServiceVOIPCallQueueRecipientStatusData.md)| payload fields | |

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

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

