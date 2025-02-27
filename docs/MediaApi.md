# WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDMediaMediaIDFileGet**](MediaApi.md#v1AccountAccountIDMediaMediaIDFileGet) | **GET** /v1/account/{accountID}/media/{mediaID}/file | Get Media File
[**v1AccountAccountIDMediaMediaIDFilePost**](MediaApi.md#v1AccountAccountIDMediaMediaIDFilePost) | **POST** /v1/account/{accountID}/media/{mediaID}/file | Add Media File
[**v1AccountAccountidMediaGet**](MediaApi.md#v1AccountAccountidMediaGet) | **GET** /v1/account/{accountid}/media | Get Media List
[**v1AccountAccountidMediaMediaidDelete**](MediaApi.md#v1AccountAccountidMediaMediaidDelete) | **DELETE** /v1/account/{accountid}/media/{mediaid} | Delete Media
[**v1AccountAccountidMediaMediaidGet**](MediaApi.md#v1AccountAccountidMediaMediaidGet) | **GET** /v1/account/{accountid}/media/{mediaid} | Get Media Details
[**v1AccountAccountidMediaPost**](MediaApi.md#v1AccountAccountidMediaPost) | **POST** /v1/account/{accountid}/media | Create Media



## v1AccountAccountIDMediaMediaIDFileGet

> File v1AccountAccountIDMediaMediaIDFileGet(accountID, mediaID)

Get Media File

Gather data about the media objects in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let mediaID = "mediaID_example"; // String | Media ID, 32 alpha numeric
apiInstance.v1AccountAccountIDMediaMediaIDFileGet(accountID, mediaID, (error, data, response) => {
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
 **mediaID** | **String**| Media ID, 32 alpha numeric | 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, audio/mp3, audio/mpeg, audio/mpeg3, audio/x-wav, audio/wav, audio/ogg, video/x-flv, video/h264, video/mpeg, video/quicktime, video/mp4, video/webm


## v1AccountAccountIDMediaMediaIDFilePost

> ServiceDocsMediaGetSingle v1AccountAccountIDMediaMediaIDFilePost(accountID, mediaID, file)

Add Media File

Include a media file that is connected to a media object in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let mediaID = "mediaID_example"; // String | Media ID, 32 alpha numeric
let file = "/path/to/file"; // File | Media file
apiInstance.v1AccountAccountIDMediaMediaIDFilePost(accountID, mediaID, file, (error, data, response) => {
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
 **mediaID** | **String**| Media ID, 32 alpha numeric | 
 **file** | **File**| Media file | 

### Return type

[**ServiceDocsMediaGetSingle**](ServiceDocsMediaGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## v1AccountAccountidMediaGet

> ServiceDocsMediaGetAll v1AccountAccountidMediaGet(accountid, opts)

Get Media List

View all media files for an account in your organization.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountidMediaGet(accountid, opts, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **startKey** | **String**| start_key for pagination that was returned as next_start_key from your previous call | [optional] 
 **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] 

### Return type

[**ServiceDocsMediaGetAll**](ServiceDocsMediaGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidMediaMediaidDelete

> ServiceDocsMediaGetSingle v1AccountAccountidMediaMediaidDelete(accountid, mediaid)

Delete Media

Remove a media file that is no longer in use from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let mediaid = "mediaid_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountidMediaMediaidDelete(accountid, mediaid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **mediaid** | **String**| Device ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMediaGetSingle**](ServiceDocsMediaGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidMediaMediaidGet

> ServiceDocsMediaGetSingle v1AccountAccountidMediaMediaidGet(accountid, mediaid)

Get Media Details

Permit users to view an account&#39;s specific media information.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let mediaid = "mediaid_example"; // String | Media ID, 32 alpha numeric
apiInstance.v1AccountAccountidMediaMediaidGet(accountid, mediaid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **mediaid** | **String**| Media ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMediaGetSingle**](ServiceDocsMediaGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidMediaPost

> ServiceDocsMediaGetSingle v1AccountAccountidMediaPost(accountid, media)

Create Media

Generate a media object to allow users to upload a media file in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MediaApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let media = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMediaAddEditData(); // ServiceVOIPMediaAddEditData | Media creation or update payload
apiInstance.v1AccountAccountidMediaPost(accountid, media, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **media** | [**ServiceVOIPMediaAddEditData**](ServiceVOIPMediaAddEditData.md)| Media creation or update payload | 

### Return type

[**ServiceDocsMediaGetSingle**](ServiceDocsMediaGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

