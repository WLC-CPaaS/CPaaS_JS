# WhiteLabelCommunicationsCPaasApiDocumentation.StorageApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDStorageDelete**](StorageApi.md#v1AccountAccountIDStorageDelete) | **DELETE** /v1/account/{accountID}/storage | Delete Storage
[**v1AccountAccountIDStorageGet**](StorageApi.md#v1AccountAccountIDStorageGet) | **GET** /v1/account/{accountID}/storage | Get Storage Details
[**v1AccountAccountIDStoragePost**](StorageApi.md#v1AccountAccountIDStoragePost) | **POST** /v1/account/{accountID}/storage | Create Storage
[**v1AccountAccountIDStoragePut**](StorageApi.md#v1AccountAccountIDStoragePut) | **PUT** /v1/account/{accountID}/storage | Update Storage



## v1AccountAccountIDStorageDelete

> ServiceDocsStorageGet v1AccountAccountIDStorageDelete(accountID)

Delete Storage

Delete items that are stored in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.StorageApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDStorageDelete(accountID, (error, data, response) => {
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

[**ServiceDocsStorageGet**](ServiceDocsStorageGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDStorageGet

> ServiceDocsStorageGet v1AccountAccountIDStorageGet(accountID)

Get Storage Details

Retrieve storage details for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.StorageApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDStorageGet(accountID, (error, data, response) => {
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

[**ServiceDocsStorageGet**](ServiceDocsStorageGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDStoragePost

> ServiceDocsStorageGet v1AccountAccountIDStoragePost(accountID, reqBody)

Create Storage

Create storage in an account for voicemails, call recordings, faxes, etc.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.StorageApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPStorageAddEditData(); // ServiceVOIPStorageAddEditData | payload fields
apiInstance.v1AccountAccountIDStoragePost(accountID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPStorageAddEditData**](ServiceVOIPStorageAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsStorageGet**](ServiceDocsStorageGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDStoragePut

> ServiceDocsStorageGet v1AccountAccountIDStoragePut(accountID, reqBody)

Update Storage

Modify the names of metadata to make it easier to locate (e.g., change the name of voicemail_storage to voicemail_and_callrecordings_storage, etc.).

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.StorageApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPStorageAddEditData(); // ServiceVOIPStorageAddEditData | payload fields
apiInstance.v1AccountAccountIDStoragePut(accountID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPStorageAddEditData**](ServiceVOIPStorageAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsStorageGet**](ServiceDocsStorageGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

