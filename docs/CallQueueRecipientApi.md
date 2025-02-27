# WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueRecipientApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDLoginrecipientRecipientIDPost**](CallQueueRecipientApi.md#v1AccountAccountIDLoginrecipientRecipientIDPost) | **POST** /v1/account/{accountID}/loginrecipient/{recipientID} | Login as Recipient
[**v1AccountAccountIDQueuerecipientGet**](CallQueueRecipientApi.md#v1AccountAccountIDQueuerecipientGet) | **GET** /v1/account/{accountID}/queuerecipient | Change Recipient Status
[**v1AccountAccountIDRecipientRecipientIDStatusPost**](CallQueueRecipientApi.md#v1AccountAccountIDRecipientRecipientIDStatusPost) | **POST** /v1/account/{accountID}/recipient/{recipientID}/status | Get Recipient List



## v1AccountAccountIDLoginrecipientRecipientIDPost

> ServiceDocsCallQueueResponseShort v1AccountAccountIDLoginrecipientRecipientIDPost(accountID, recipientID, reqBody)

Login as Recipient

Agents must log in to receive calls. Depending on their membership, they can log in to one or more queues. (If an agent is a member of more than one queue, they will receive calls from all the queues they are a part of.)

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueRecipientApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueRecipientLoginLogoutData(); // ServiceVOIPCallQueueRecipientLoginLogoutData | payload fields
apiInstance.v1AccountAccountIDLoginrecipientRecipientIDPost(accountID, recipientID, reqBody, (error, data, response) => {
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
 **recipientID** | **String**| Recipient ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPCallQueueRecipientLoginLogoutData**](ServiceVOIPCallQueueRecipientLoginLogoutData.md)| payload fields | 

### Return type

[**ServiceDocsCallQueueResponseShort**](ServiceDocsCallQueueResponseShort.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDQueuerecipientGet

> ServiceDocsGetQueueRecipients v1AccountAccountIDQueuerecipientGet(accountID)

Change Recipient Status

Get a list of all recipients in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueRecipientApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountIDQueuerecipientGet(accountID, (error, data, response) => {
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

[**ServiceDocsGetQueueRecipients**](ServiceDocsGetQueueRecipients.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDRecipientRecipientIDStatusPost

> ServiceAPIResponse v1AccountAccountIDRecipientRecipientIDStatusPost(accountID, recipientID, reqBody)

Get Recipient List

Change the status of a recipient to ready, away, etc.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueRecipientApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueRecipientStatusData(); // ServiceVOIPCallQueueRecipientStatusData | payload fields
apiInstance.v1AccountAccountIDRecipientRecipientIDStatusPost(accountID, recipientID, reqBody, (error, data, response) => {
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
 **recipientID** | **String**| Recipient ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPCallQueueRecipientStatusData**](ServiceVOIPCallQueueRecipientStatusData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

