# WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueMembershipApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDQueuemembershipPost**](CallQueueMembershipApi.md#v1AccountAccountIDQueuemembershipPost) | **POST** /v1/account/{accountID}/queuemembership | Grant Queue Membership to User
[**v1AccountAccountIDQueuemembershipRecipientIDDisablePost**](CallQueueMembershipApi.md#v1AccountAccountIDQueuemembershipRecipientIDDisablePost) | **POST** /v1/account/{accountID}/queuemembership/{recipientID}/disable | Disable Queue Membership
[**v1AccountAccountIDQueuemembershipRecipientIDEnablePost**](CallQueueMembershipApi.md#v1AccountAccountIDQueuemembershipRecipientIDEnablePost) | **POST** /v1/account/{accountID}/queuemembership/{recipientID}/enable | Enable Queue Membership



## v1AccountAccountIDQueuemembershipPost

> ServiceDocsCallQueueMemberGetSingle v1AccountAccountIDQueuemembershipPost(accountID, reqBody)

Grant Queue Membership to User

Allow users to create queue memberships for recipients.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueMembershipApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPQueueMembershipAddData(); // ServiceVOIPQueueMembershipAddData | payload fields
apiInstance.v1AccountAccountIDQueuemembershipPost(accountID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPQueueMembershipAddData**](ServiceVOIPQueueMembershipAddData.md)| payload fields | 

### Return type

[**ServiceDocsCallQueueMemberGetSingle**](ServiceDocsCallQueueMemberGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDQueuemembershipRecipientIDDisablePost

> ServiceAPIResponse v1AccountAccountIDQueuemembershipRecipientIDDisablePost(accountID, recipientID)

Disable Queue Membership

Deactivate queue membership for a recipient.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueMembershipApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
apiInstance.v1AccountAccountIDQueuemembershipRecipientIDDisablePost(accountID, recipientID, (error, data, response) => {
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

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDQueuemembershipRecipientIDEnablePost

> ServiceAPIResponse v1AccountAccountIDQueuemembershipRecipientIDEnablePost(accountID, recipientID, reqBody)

Enable Queue Membership

Activate queue membership for a recipient.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CallQueueMembershipApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let recipientID = "recipientID_example"; // String | Recipient ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPCallQueueEnableMembershipData(); // ServiceVOIPCallQueueEnableMembershipData | payload fields
apiInstance.v1AccountAccountIDQueuemembershipRecipientIDEnablePost(accountID, recipientID, reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceVOIPCallQueueEnableMembershipData**](ServiceVOIPCallQueueEnableMembershipData.md)| payload fields | 

### Return type

[**ServiceAPIResponse**](ServiceAPIResponse.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

