# WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDChannelChannelIDGet**](ChannelApi.md#v1AccountAccountIDChannelChannelIDGet) | **GET** /v1/account/{accountID}/channel/{channelID} | Get Channel Details
[**v1AccountAccountIDChannelChannelIDPost**](ChannelApi.md#v1AccountAccountIDChannelChannelIDPost) | **POST** /v1/account/{accountID}/channel/{channelID} | Associate Action to Channel
[**v1AccountAccountIDChannelChannelIDPut**](ChannelApi.md#v1AccountAccountIDChannelChannelIDPut) | **PUT** /v1/account/{accountID}/channel/{channelID} | Associate Metaflow to Channel
[**v1AccountAccountIDChannelGet**](ChannelApi.md#v1AccountAccountIDChannelGet) | **GET** /v1/account/{accountID}/channel | Get Account Channel List
[**v1AccountAccountIDDeviceDeviceIDChannelGet**](ChannelApi.md#v1AccountAccountIDDeviceDeviceIDChannelGet) | **GET** /v1/account/{accountID}/device/{deviceID}/channel | Get Device Channel List
[**v1AccountAccountIDUserUserIDChannelGet**](ChannelApi.md#v1AccountAccountIDUserUserIDChannelGet) | **GET** /v1/account/{accountID}/user/{userID}/channel | Get User Channel List



## v1AccountAccountIDChannelChannelIDGet

> ServiceDocsChannelGetSingle v1AccountAccountIDChannelChannelIDGet(accountID, channelID)

Get Channel Details

Access details about each channel in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let channelID = "channelID_example"; // String | Channel ID
apiInstance.v1AccountAccountIDChannelChannelIDGet(accountID, channelID, (error, data, response) => {
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
 **channelID** | **String**| Channel ID | 

### Return type

[**ServiceDocsChannelGetSingle**](ServiceDocsChannelGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDChannelChannelIDPost

> ServiceAPIResponse v1AccountAccountIDChannelChannelIDPost(accountID, channelID, reqBody)

Associate Action to Channel

Link an action, such as transfer or hangup to a channel.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let channelID = "channelID_example"; // String | Channel ID
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceChannelRunActionData(); // ServiceChannelRunActionData | payload fields
apiInstance.v1AccountAccountIDChannelChannelIDPost(accountID, channelID, reqBody, (error, data, response) => {
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
 **channelID** | **String**| Channel ID | 
 **reqBody** | [**ServiceChannelRunActionData**](ServiceChannelRunActionData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDChannelChannelIDPut

> ServiceAPIResponse v1AccountAccountIDChannelChannelIDPut(accountID, channelID, reqBody)

Associate Metaflow to Channel

Link a metaflow to an active channel.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let channelID = "channelID_example"; // String | Channel ID
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceChannelRunMetaflowData(); // ServiceChannelRunMetaflowData | payload fields
apiInstance.v1AccountAccountIDChannelChannelIDPut(accountID, channelID, reqBody, (error, data, response) => {
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
 **channelID** | **String**| Channel ID | 
 **reqBody** | [**ServiceChannelRunMetaflowData**](ServiceChannelRunMetaflowData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDChannelGet

> ServiceDocsChannelGet v1AccountAccountIDChannelGet(accountID)

Get Account Channel List

Get a list of active channels for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDChannelGet(accountID, (error, data, response) => {
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

[**ServiceDocsChannelGet**](ServiceDocsChannelGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDDeviceDeviceIDChannelGet

> ServiceDocsChannelGet v1AccountAccountIDDeviceDeviceIDChannelGet(accountID, deviceID)

Get Device Channel List

Get the list of active channels for a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountIDDeviceDeviceIDChannelGet(accountID, deviceID, (error, data, response) => {
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
 **deviceID** | **String**| Device ID, 32 alpha numeric | 

### Return type

[**ServiceDocsChannelGet**](ServiceDocsChannelGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDUserUserIDChannelGet

> ServiceDocsChannelGet v1AccountAccountIDUserUserIDChannelGet(accountID, userID)

Get User Channel List

Get the list of active channels for a user.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ChannelApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | User ID, 32 alpha numeric
apiInstance.v1AccountAccountIDUserUserIDChannelGet(accountID, userID, (error, data, response) => {
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

[**ServiceDocsChannelGet**](ServiceDocsChannelGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

