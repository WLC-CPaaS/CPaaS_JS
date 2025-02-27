# SMSApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1SmsAccountAccountIDCampaignCampaignIDImportGet**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDImportGet) | **GET** /v1/sms/account/{accountID}/campaign/{campaignID}/import |  |
| [**v1SmsAccountAccountIDCampaignCampaignIDImportPost**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDImportPost) | **POST** /v1/sms/account/{accountID}/campaign/{campaignID}/import |  |
| [**v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet) | **GET** /v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber |  |
| [**v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut) | **PUT** /v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber |  |
| [**v1SmsAccountAccountIDCampaignImportGet**](SMSApi.md#v1SmsAccountAccountIDCampaignImportGet) | **GET** /v1/sms/account/{accountID}/campaign/import |  |



## v1SmsAccountAccountIDCampaignCampaignIDImportGet

> ServiceDocsCampaignImportOutput v1SmsAccountAccountIDCampaignCampaignIDImportGet(accountID, campaignID)



Get details about a single imported campaign in an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.SMSApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        SMSApi apiInstance = new SMSApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String campaignID = "campaignID_example"; // String | Campaign ID
        try {
            ServiceDocsCampaignImportOutput result = apiInstance.v1SmsAccountAccountIDCampaignCampaignIDImportGet(accountID, campaignID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SMSApi#v1SmsAccountAccountIDCampaignCampaignIDImportGet");
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
| **campaignID** | **String**| Campaign ID | |

### Return type

[**ServiceDocsCampaignImportOutput**](ServiceDocsCampaignImportOutput.md)

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


## v1SmsAccountAccountIDCampaignCampaignIDImportPost

> ServiceDocsCampaignImportOutput v1SmsAccountAccountIDCampaignCampaignIDImportPost(accountID, campaignID)



Import campaign

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.SMSApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        SMSApi apiInstance = new SMSApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String campaignID = "campaignID_example"; // String | Campaign ID
        try {
            ServiceDocsCampaignImportOutput result = apiInstance.v1SmsAccountAccountIDCampaignCampaignIDImportPost(accountID, campaignID);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SMSApi#v1SmsAccountAccountIDCampaignCampaignIDImportPost");
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
| **campaignID** | **String**| Campaign ID | |

### Return type

[**ServiceDocsCampaignImportOutput**](ServiceDocsCampaignImportOutput.md)

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


## v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet

> ServiceDocsCampaignPhoneNumberOutput v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet(accountID, campaignID, pageNum, pageSize)



Get telephone numbers associated with a campaign.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.SMSApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        SMSApi apiInstance = new SMSApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String campaignID = "campaignID_example"; // String | Campaign ID
        Number pageNum = 3.4; // Number | Page number
        Number pageSize = 3.4; // Number | Page size
        try {
            ServiceDocsCampaignPhoneNumberOutput result = apiInstance.v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet(accountID, campaignID, pageNum, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SMSApi#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet");
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
| **campaignID** | **String**| Campaign ID | |
| **pageNum** | **Number**| Page number | [optional] |
| **pageSize** | **Number**| Page size | [optional] |

### Return type

[**ServiceDocsCampaignPhoneNumberOutput**](ServiceDocsCampaignPhoneNumberOutput.md)

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


## v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut

> ServiceDocsCampaignTagDetagPhonenumbersOutput v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut(accountID, campaignID, reqBody)



Associate or dissociate telephone numbers with a campaign.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.SMSApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        SMSApi apiInstance = new SMSApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        String campaignID = "campaignID_example"; // String | Campaign ID, 32 alpha numeric
        ServiceCampaignTagDetagPhonenumbers reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceCampaignTagDetagPhonenumbers(); // ServiceCampaignTagDetagPhonenumbers | payload fields
        try {
            ServiceDocsCampaignTagDetagPhonenumbersOutput result = apiInstance.v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut(accountID, campaignID, reqBody);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SMSApi#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut");
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
| **campaignID** | **String**| Campaign ID, 32 alpha numeric | |
| **reqBody** | [**ServiceCampaignTagDetagPhonenumbers**](ServiceCampaignTagDetagPhonenumbers.md)| payload fields | |

### Return type

[**ServiceDocsCampaignTagDetagPhonenumbersOutput**](ServiceDocsCampaignTagDetagPhonenumbersOutput.md)

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


## v1SmsAccountAccountIDCampaignImportGet

> ServiceDocsCampaignImportedGetAllOutput v1SmsAccountAccountIDCampaignImportGet(accountID, pageNum, pageSize)



Get a list of all imported campaigns in an account.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.SMSApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        SMSApi apiInstance = new SMSApi(defaultClient);
        String accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
        Number pageNum = 3.4; // Number | Page number
        Number pageSize = 3.4; // Number | Page size
        try {
            ServiceDocsCampaignImportedGetAllOutput result = apiInstance.v1SmsAccountAccountIDCampaignImportGet(accountID, pageNum, pageSize);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SMSApi#v1SmsAccountAccountIDCampaignImportGet");
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
| **pageNum** | **Number**| Page number | [optional] |
| **pageSize** | **Number**| Page size | [optional] |

### Return type

[**ServiceDocsCampaignImportedGetAllOutput**](ServiceDocsCampaignImportedGetAllOutput.md)

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

