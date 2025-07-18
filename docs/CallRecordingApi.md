# WhiteLabelCommunicationsCPaasApiDocumentation.CallRecordingApi

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDRecordingGet**](CallRecordingApi.md#v1AccountAccountIDRecordingGet) | **GET** /v1/account/{accountID}/recording | Get Account Call Recording
[**v1AccountAccountIDRecordingRecordingIDDelete**](CallRecordingApi.md#v1AccountAccountIDRecordingRecordingIDDelete) | **DELETE** /v1/account/{accountID}/recording/{recordingID} | Delete Call Recording
[**v1AccountAccountIDRecordingRecordingIDGet**](CallRecordingApi.md#v1AccountAccountIDRecordingRecordingIDGet) | **GET** /v1/account/{accountID}/recording/{recordingID} | Get Call Recording Details
[**v1AccountAccountIDUserUserIDRecordingGet**](CallRecordingApi.md#v1AccountAccountIDUserUserIDRecordingGet) | **GET** /v1/account/{accountID}/user/{userID}/recording | Get User Call Recording



## v1AccountAccountIDRecordingGet

> ServiceDocsCallRecordingGetAll v1AccountAccountIDRecordingGet(accountID)

Get Account Call Recording

Obtain a list of the call recordings within an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallRecordingApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDRecordingGet(accountID, (error, data, response) => {
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

[**ServiceDocsCallRecordingGetAll**](ServiceDocsCallRecordingGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDRecordingRecordingIDDelete

> ServiceDocsCallRecordingGetSingle v1AccountAccountIDRecordingRecordingIDDelete(accountID, recordingID)

Delete Call Recording

Delete a single call recording from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallRecordingApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recordingID = "recordingID_example"; // String | Recording ID, 39 (yyyymm-<32 id>)
apiInstance.v1AccountAccountIDRecordingRecordingIDDelete(accountID, recordingID, (error, data, response) => {
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
 **recordingID** | **String**| Recording ID, 39 (yyyymm-&lt;32 id&gt;) | 

### Return type

[**ServiceDocsCallRecordingGetSingle**](ServiceDocsCallRecordingGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDRecordingRecordingIDGet

> ServiceDocsCallRecordingGetSingle v1AccountAccountIDRecordingRecordingIDGet(accountID, recordingID)

Get Call Recording Details

Access details for each recorded call in an account (e.g., duration, names and numbers of call participants, etc.).

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallRecordingApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recordingID = "recordingID_example"; // String | Recording ID, 39 (yyyymm-<32 id>)
apiInstance.v1AccountAccountIDRecordingRecordingIDGet(accountID, recordingID, (error, data, response) => {
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
 **recordingID** | **String**| Recording ID, 39 (yyyymm-&lt;32 id&gt;) | 

### Return type

[**ServiceDocsCallRecordingGetSingle**](ServiceDocsCallRecordingGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, audio/mp3, audio/mpeg, audio/mpeg3, audio/x-wav, audio/wav


## v1AccountAccountIDUserUserIDRecordingGet

> ServiceDocsCallRecordingGetAll v1AccountAccountIDUserUserIDRecordingGet(accountID, userID)

Get User Call Recording

Retrieve a list of call recordings for a user within an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallRecordingApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | User ID, 32 alpha numeric
apiInstance.v1AccountAccountIDUserUserIDRecordingGet(accountID, userID, (error, data, response) => {
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

### Return type

[**ServiceDocsCallRecordingGetAll**](ServiceDocsCallRecordingGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

