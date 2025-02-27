# WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDCallqueueGet**](CallQueueManagementApi.md#v1AccountAccountIDCallqueueGet) | **GET** /v1/account/{accountID}/callqueue | Get Call Queues
[**v1AccountAccountIDCallqueuePost**](CallQueueManagementApi.md#v1AccountAccountIDCallqueuePost) | **POST** /v1/account/{accountID}/callqueue | Create Call Queue
[**v1AccountAccountIDCallqueueQueueIDDelete**](CallQueueManagementApi.md#v1AccountAccountIDCallqueueQueueIDDelete) | **DELETE** /v1/account/{accountID}/callqueue/{queueID} | Delete Call Queue
[**v1AccountAccountIDCallqueueQueueIDGet**](CallQueueManagementApi.md#v1AccountAccountIDCallqueueQueueIDGet) | **GET** /v1/account/{accountID}/callqueue/{queueID} | Get Call Queue Details
[**v1AccountAccountIDCallqueueQueueIDPut**](CallQueueManagementApi.md#v1AccountAccountIDCallqueueQueueIDPut) | **PUT** /v1/account/{accountID}/callqueue/{queueID} | Update Call Queue
[**v1AccountAccountIDCallqueueQueueIDStatusGet**](CallQueueManagementApi.md#v1AccountAccountIDCallqueueQueueIDStatusGet) | **GET** /v1/account/{accountID}/callqueue/{queueID}/status | Get Call Queue Status
[**v1AccountAccountIDQueuerolesGet**](CallQueueManagementApi.md#v1AccountAccountIDQueuerolesGet) | **GET** /v1/account/{accountID}/queueroles | Get Queue Roles of Account
[**v1AccountAccountIDQueuerolesQueueIDPost**](CallQueueManagementApi.md#v1AccountAccountIDQueuerolesQueueIDPost) | **POST** /v1/account/{accountID}/queueroles/{queueID} | Assign Queue Role to Call Queue



## v1AccountAccountIDCallqueueGet

> ServiceDocsCallQueueGetAll v1AccountAccountIDCallqueueGet(accountID)

Get Call Queues

Retrieve call queue details for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDCallqueueGet(accountID, (error, data, response) => {
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

[**ServiceDocsCallQueueGetAll**](ServiceDocsCallQueueGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDCallqueuePost

> ServiceDocsCallQueueGetSingle v1AccountAccountIDCallqueuePost(accountID, reqBody)

Create Call Queue

Set up a call queue in an account for specific inbound calls.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueAddEditData(); // ServiceVOIPCallQueueAddEditData | payload fields
apiInstance.v1AccountAccountIDCallqueuePost(accountID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPCallQueueAddEditData**](ServiceVOIPCallQueueAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsCallQueueGetSingle**](ServiceDocsCallQueueGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDCallqueueQueueIDDelete

> ServiceDocsCallQueueGetSingle v1AccountAccountIDCallqueueQueueIDDelete(accountID, queueID)

Delete Call Queue

Remove the call queue from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let queueID = "queueID_example"; // String | Queue ID, 32 alpha numeric
apiInstance.v1AccountAccountIDCallqueueQueueIDDelete(accountID, queueID, (error, data, response) => {
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
 **queueID** | **String**| Queue ID, 32 alpha numeric | 

### Return type

[**ServiceDocsCallQueueGetSingle**](ServiceDocsCallQueueGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDCallqueueQueueIDGet

> ServiceDocsCallQueueGetSingle v1AccountAccountIDCallqueueQueueIDGet(accountID, queueID)

Get Call Queue Details

Capture metadata about a specific queue, such as queue_type and agent_wrapup_time.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let queueID = "queueID_example"; // String | Queue ID, 32 alpha numeric
apiInstance.v1AccountAccountIDCallqueueQueueIDGet(accountID, queueID, (error, data, response) => {
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
 **queueID** | **String**| Queue ID, 32 alpha numeric | 

### Return type

[**ServiceDocsCallQueueGetSingle**](ServiceDocsCallQueueGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDCallqueueQueueIDPut

> ServiceDocsCallQueueGetSingle v1AccountAccountIDCallqueueQueueIDPut(accountID, queueID, reqBody)

Update Call Queue

Update the metadata mentioned above.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let queueID = "queueID_example"; // String | Queue ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueAddEditData(); // ServiceVOIPCallQueueAddEditData | payload fields
apiInstance.v1AccountAccountIDCallqueueQueueIDPut(accountID, queueID, reqBody, (error, data, response) => {
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
 **queueID** | **String**| Queue ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPCallQueueAddEditData**](ServiceVOIPCallQueueAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsCallQueueGetSingle**](ServiceDocsCallQueueGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDCallqueueQueueIDStatusGet

> ServiceDocsCallQueueGetSingleStatus v1AccountAccountIDCallqueueQueueIDStatusGet(accountID, queueID)

Get Call Queue Status

Access the status of a call queue in an account, such as the number of available agents (recipients), estimated wait time, and number of active sessions.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let queueID = "queueID_example"; // String | Queue ID, 32 alpha numeric
apiInstance.v1AccountAccountIDCallqueueQueueIDStatusGet(accountID, queueID, (error, data, response) => {
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
 **queueID** | **String**| Queue ID, 32 alpha numeric | 

### Return type

[**ServiceDocsCallQueueGetSingleStatus**](ServiceDocsCallQueueGetSingleStatus.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDQueuerolesGet

> ServiceDocsCallQueueGetRoles v1AccountAccountIDQueuerolesGet(accountID)

Get Queue Roles of Account

Obtain data about each queue role in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDQueuerolesGet(accountID, (error, data, response) => {
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

[**ServiceDocsCallQueueGetRoles**](ServiceDocsCallQueueGetRoles.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDQueuerolesQueueIDPost

> ServiceAPIResponse v1AccountAccountIDQueuerolesQueueIDPost(accountID, queueID, reqBody)

Assign Queue Role to Call Queue

Assign roles to members in a call queue.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueManagementApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let queueID = "queueID_example"; // String | Queue ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueRoleAssignData(); // ServiceVOIPCallQueueRoleAssignData | payload fields
apiInstance.v1AccountAccountIDQueuerolesQueueIDPost(accountID, queueID, reqBody, (error, data, response) => {
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
 **queueID** | **String**| Queue ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPCallQueueRoleAssignData**](ServiceVOIPCallQueueRoleAssignData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

