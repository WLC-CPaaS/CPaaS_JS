# WhiteLabelCommunicationsCPaasApiDocumentation.PresenceApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDPresenceExtensionPut**](PresenceApi.md#v1AccountAccountIDPresenceExtensionPut) | **PUT** /v1/account/{accountID}/presence/{extension} | Set/Reset Presence for Extension
[**v1AccountAccountIDPresenceGet**](PresenceApi.md#v1AccountAccountIDPresenceGet) | **GET** /v1/account/{accountID}/presence | Get Presence Details
[**v1AccountAccountIDUserUserIDPresencePut**](PresenceApi.md#v1AccountAccountIDUserUserIDPresencePut) | **PUT** /v1/account/{accountID}/user/{userID}/presence | Set/Reset Presence for User



## v1AccountAccountIDPresenceExtensionPut

> ServiceAPIResponse v1AccountAccountIDPresenceExtensionPut(accountID, extension, reqBody)

Set/Reset Presence for Extension

Set or reset the presence status of an extension.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PresenceApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let extension = "extension_example"; // String | Extension
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPPresenceSetResetEditData(); // ServiceVOIPPresenceSetResetEditData | payload fields
apiInstance.v1AccountAccountIDPresenceExtensionPut(accountID, extension, reqBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountID** | **String**| Account ID, 32 alpha numeric | 
 **extension** | **String**| Extension | 
 **reqBody** | [**ServiceVOIPPresenceSetResetEditData**](ServiceVOIPPresenceSetResetEditData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDPresenceGet

> ServiceDocsPresenceGet v1AccountAccountIDPresenceGet(accountID)

Get Presence Details

Retrieve details of presence subscriptions in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PresenceApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDPresenceGet(accountID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountID** | **String**| Account ID, 32 alpha numeric | 

### Return type

[**ServiceDocsPresenceGet**](ServiceDocsPresenceGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDUserUserIDPresencePut

> ServiceAPIResponse v1AccountAccountIDUserUserIDPresencePut(accountID, userID, reqBody)

Set/Reset Presence for User

Set or reset the presence status of a user within an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PresenceApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | User ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPPresenceSetResetEditData(); // ServiceVOIPPresenceSetResetEditData | payload fields
apiInstance.v1AccountAccountIDUserUserIDPresencePut(accountID, userID, reqBody, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountID** | **String**| Account ID, 32 alpha numeric | 
 **userID** | **String**| User ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPPresenceSetResetEditData**](ServiceVOIPPresenceSetResetEditData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

