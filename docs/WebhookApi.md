# WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WebhookAccountAccountIDGet**](WebhookApi.md#v1WebhookAccountAccountIDGet) | **GET** /v1/webhook/account/{accountID} | Get Webhook List
[**v1WebhookAccountAccountIDPost**](WebhookApi.md#v1WebhookAccountAccountIDPost) | **POST** /v1/webhook/account/{accountID} | Create Webhook
[**v1WebhookAccountAccountIDWebhookIDDelete**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDDelete) | **DELETE** /v1/webhook/account/{accountID}/{webhookID} | Delete Webhook
[**v1WebhookAccountAccountIDWebhookIDGet**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDGet) | **GET** /v1/webhook/account/{accountID}/{webhookID} | Get Webhook Details
[**v1WebhookAccountAccountIDWebhookIDPut**](WebhookApi.md#v1WebhookAccountAccountIDWebhookIDPut) | **PUT** /v1/webhook/account/{accountID}/{webhookID} | Update Webhook



## v1WebhookAccountAccountIDGet

> ServiceDocsWebhookGetAll v1WebhookAccountAccountIDGet(accountID, opts)

Get Webhook List

Retrieve the webhook list in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi();
let accountID = "accountID_example"; // String | Account ID
let opts = {
  'pageSize': 56, // Number | number of records to return, range 1 to 50
  'currentPage': 56 // Number | Current Page
};
apiInstance.v1WebhookAccountAccountIDGet(accountID, opts, (error, data, response) => {
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
 **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] 
 **currentPage** | **Number**| Current Page | [optional] 

### Return type

[**ServiceDocsWebhookGetAll**](ServiceDocsWebhookGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1WebhookAccountAccountIDPost

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDPost(accountID, body)

Create Webhook

Create a webhook for a specific account ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi();
let accountID = "accountID_example"; // String | Account ID
let body = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceWebhookAdd(); // ServiceWebhookAdd | Webhook data
apiInstance.v1WebhookAccountAccountIDPost(accountID, body, (error, data, response) => {
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
 **body** | [**ServiceWebhookAdd**](ServiceWebhookAdd.md)| Webhook data | 

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1WebhookAccountAccountIDWebhookIDDelete

> ServiceDocsWebhookDelete v1WebhookAccountAccountIDWebhookIDDelete(accountID, webhookID)

Delete Webhook

Remove a webhook identified by its ID for a particular account ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi();
let accountID = "accountID_example"; // String | Account ID
let webhookID = 56; // Number | Webhook ID
apiInstance.v1WebhookAccountAccountIDWebhookIDDelete(accountID, webhookID, (error, data, response) => {
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
 **webhookID** | **Number**| Webhook ID | 

### Return type

[**ServiceDocsWebhookDelete**](ServiceDocsWebhookDelete.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1WebhookAccountAccountIDWebhookIDGet

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDWebhookIDGet(accountID, webhookID)

Get Webhook Details

Access details about a single webhook ID for an individual account ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi();
let accountID = "accountID_example"; // String | Account ID
let webhookID = 56; // Number | Webhook ID
apiInstance.v1WebhookAccountAccountIDWebhookIDGet(accountID, webhookID, (error, data, response) => {
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
 **webhookID** | **Number**| Webhook ID | 

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1WebhookAccountAccountIDWebhookIDPut

> ServiceDocsWebhookGetSingle v1WebhookAccountAccountIDWebhookIDPut(accountID, webhookID, body)

Update Webhook

Update a webhook identified by its ID for a distinct account ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.WebhookApi();
let accountID = "accountID_example"; // String | Account ID
let webhookID = "webhookID_example"; // String | Webhook ID
let body = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceWebhookEdit(); // ServiceWebhookEdit | Updated webhook data
apiInstance.v1WebhookAccountAccountIDWebhookIDPut(accountID, webhookID, body, (error, data, response) => {
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
 **webhookID** | **String**| Webhook ID | 
 **body** | [**ServiceWebhookEdit**](ServiceWebhookEdit.md)| Updated webhook data | 

### Return type

[**ServiceDocsWebhookGetSingle**](ServiceDocsWebhookGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

