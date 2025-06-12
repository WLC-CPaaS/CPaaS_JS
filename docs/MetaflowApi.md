# WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi

All URIs are relative to *http://API_HOSTNAME*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDDeviceDeviceIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/device/{deviceID}/metaflow | Delete Device Metaflow
[**v1AccountAccountIDDeviceDeviceIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowGet) | **GET** /v1/account/{accountID}/device/{deviceID}/metaflow | Get Device Metaflow List
[**v1AccountAccountIDDeviceDeviceIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDDeviceDeviceIDMetaflowPost) | **POST** /v1/account/{accountID}/device/{deviceID}/metaflow | Create Device Metaflow
[**v1AccountAccountIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/metaflow | Delete Account Metaflow
[**v1AccountAccountIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDMetaflowGet) | **GET** /v1/account/{accountID}/metaflow | Get Account Metaflow List
[**v1AccountAccountIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDMetaflowPost) | **POST** /v1/account/{accountID}/metaflow | Create Account Metaflow
[**v1AccountAccountIDUserUserIDMetaflowDelete**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowDelete) | **DELETE** /v1/account/{accountID}/user/{userID}/metaflow | Delete User Metaflow
[**v1AccountAccountIDUserUserIDMetaflowGet**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowGet) | **GET** /v1/account/{accountID}/user/{userID}/metaflow | Get User Metaflow List
[**v1AccountAccountIDUserUserIDMetaflowPost**](MetaflowApi.md#v1AccountAccountIDUserUserIDMetaflowPost) | **POST** /v1/account/{accountID}/user/{userID}/metaflow | Create User Metaflow



## v1AccountAccountIDDeviceDeviceIDMetaflowDelete

> ServiceDocsMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowDelete(accountID, deviceID)

Delete Device Metaflow

Delete all metaflows associated with a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowDelete(accountID, deviceID, (error, data, response) => {
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

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDDeviceDeviceIDMetaflowGet

> ServiceDocsMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowGet(accountID, deviceID)

Get Device Metaflow List

Get the list of metaflows for a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowGet(accountID, deviceID, (error, data, response) => {
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

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDDeviceDeviceIDMetaflowPost

> ServiceDocsMetaflowGet v1AccountAccountIDDeviceDeviceIDMetaflowPost(accountID, deviceID, reqBody)

Create Device Metaflow

Create a metaflow or multiple metaflows for a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let deviceID = "deviceID_example"; // String | Device ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | payload fields
apiInstance.v1AccountAccountIDDeviceDeviceIDMetaflowPost(accountID, deviceID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| payload fields | 

### Return type

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDMetaflowDelete

> ServiceDocsMetaflowGet v1AccountAccountIDMetaflowDelete(accountID)

Delete Account Metaflow

Remove all metaflows from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDMetaflowDelete(accountID, (error, data, response) => {
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

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDMetaflowGet

> ServiceDocsMetaflowGet v1AccountAccountIDMetaflowGet(accountID)

Get Account Metaflow List

Get an account&#39;s metaflow list.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDMetaflowGet(accountID, (error, data, response) => {
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

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDMetaflowPost

> ServiceDocsMetaflowGet v1AccountAccountIDMetaflowPost(accountID, metaflow)

Create Account Metaflow

Generate a metaflow for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID
let metaflow = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | Metaflow fields
apiInstance.v1AccountAccountIDMetaflowPost(accountID, metaflow, (error, data, response) => {
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
 **accountID** | **String**| Account ID | 
 **metaflow** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| Metaflow fields | 

### Return type

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDUserUserIDMetaflowDelete

> ServiceDocsMetaflowGet v1AccountAccountIDUserUserIDMetaflowDelete(accountID, userID)

Delete User Metaflow

Delete all metaflows associated with a user.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | user ID, 32 alpha numeric
apiInstance.v1AccountAccountIDUserUserIDMetaflowDelete(accountID, userID, (error, data, response) => {
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
 **userID** | **String**| user ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDUserUserIDMetaflowGet

> ServiceDocsMetaflowGet v1AccountAccountIDUserUserIDMetaflowGet(accountID, userID)

Get User Metaflow List

Get the list of metaflows for a user.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | user ID, 32 alpha numeric
apiInstance.v1AccountAccountIDUserUserIDMetaflowGet(accountID, userID, (error, data, response) => {
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
 **userID** | **String**| user ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDUserUserIDMetaflowPost

> ServiceDocsMetaflowGet v1AccountAccountIDUserUserIDMetaflowPost(accountID, userID, reqBody)

Create User Metaflow

Add a metaflow or multiple metaflows for a user in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MetaflowApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let userID = "userID_example"; // String | user ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMetaflowAddData(); // ServiceVOIPMetaflowAddData | payload fields
apiInstance.v1AccountAccountIDUserUserIDMetaflowPost(accountID, userID, reqBody, (error, data, response) => {
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
 **userID** | **String**| user ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPMetaflowAddData**](ServiceVOIPMetaflowAddData.md)| payload fields | 

### Return type

[**ServiceDocsMetaflowGet**](ServiceDocsMetaflowGet.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

