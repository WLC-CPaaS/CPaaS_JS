# WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDGroupGet**](GroupApi.md#v1AccountAccountIDGroupGet) | **GET** /v1/account/{accountID}/group | Get Group List
[**v1AccountAccountIDGroupGroupIDDelete**](GroupApi.md#v1AccountAccountIDGroupGroupIDDelete) | **DELETE** /v1/account/{accountID}/group/{groupID} | Delete Group
[**v1AccountAccountIDGroupGroupIDGet**](GroupApi.md#v1AccountAccountIDGroupGroupIDGet) | **GET** /v1/account/{accountID}/group/{groupID} | Get Group Details
[**v1AccountAccountIDGroupGroupIDPut**](GroupApi.md#v1AccountAccountIDGroupGroupIDPut) | **PUT** /v1/account/{accountID}/group/{groupID} | Update Group
[**v1AccountAccountIDGroupPost**](GroupApi.md#v1AccountAccountIDGroupPost) | **POST** /v1/account/{accountID}/group | Create Group



## v1AccountAccountIDGroupGet

> ServiceDocGroupGetAll v1AccountAccountIDGroupGet(accountID, opts)

Get Group List

Get a list of groups associated with an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDGroupGet(accountID, opts, (error, data, response) => {
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
 **startKey** | **String**| start_key for pagination that was returned as next_start_key from your previous call | [optional] 
 **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] 

### Return type

[**ServiceDocGroupGetAll**](ServiceDocGroupGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDGroupGroupIDDelete

> ServiceDocGroupGetSingle v1AccountAccountIDGroupGroupIDDelete(accountID, groupID)

Delete Group

Delete a call group in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let groupID = "groupID_example"; // String | group ID, 32 alpha numeric
apiInstance.v1AccountAccountIDGroupGroupIDDelete(accountID, groupID, (error, data, response) => {
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
 **groupID** | **String**| group ID, 32 alpha numeric | 

### Return type

[**ServiceDocGroupGetSingle**](ServiceDocGroupGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDGroupGroupIDGet

> ServiceDocGroupGetSingle v1AccountAccountIDGroupGroupIDGet(accountID, groupID)

Get Group Details

Access details about a single group within an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let groupID = "groupID_example"; // String | Group ID, 32 alpha numeric
apiInstance.v1AccountAccountIDGroupGroupIDGet(accountID, groupID, (error, data, response) => {
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
 **groupID** | **String**| Group ID, 32 alpha numeric | 

### Return type

[**ServiceDocGroupGetSingle**](ServiceDocGroupGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDGroupGroupIDPut

> ServiceDocGroupGetSingle v1AccountAccountIDGroupGroupIDPut(accountID, groupID, reqBody)

Update Group

Modify the name, settings and other information for a group within an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let groupID = "groupID_example"; // String | Group ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPGroupAddEdit2(); // ServiceVOIPGroupAddEdit2 | payload fields
apiInstance.v1AccountAccountIDGroupGroupIDPut(accountID, groupID, reqBody, (error, data, response) => {
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
 **groupID** | **String**| Group ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPGroupAddEdit2**](ServiceVOIPGroupAddEdit2.md)| payload fields | 

### Return type

[**ServiceDocGroupGetSingle**](ServiceDocGroupGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDGroupPost

> ServiceDocGroupGetSingle v1AccountAccountIDGroupPost(accountID, group)

Create Group

Provide an additional resource by adding a group list to an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.GroupApi();
let accountID = "accountID_example"; // String | Account ID
let group = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPGroupAddEdit2(); // ServiceVOIPGroupAddEdit2 | group fields
apiInstance.v1AccountAccountIDGroupPost(accountID, group, (error, data, response) => {
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
 **group** | [**ServiceVOIPGroupAddEdit2**](ServiceVOIPGroupAddEdit2.md)| group fields | 

### Return type

[**ServiceDocGroupGetSingle**](ServiceDocGroupGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

