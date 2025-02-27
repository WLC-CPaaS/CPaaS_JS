# WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDTemporalruleGet**](TemporalRuleApi.md#v1AccountAccountIDTemporalruleGet) | **GET** /v1/account/{accountID}/temporalrule | Get Temporal Rule List
[**v1AccountAccountIDTemporalrulePost**](TemporalRuleApi.md#v1AccountAccountIDTemporalrulePost) | **POST** /v1/account/{accountID}/temporalrule | Create Temporal Rule
[**v1AccountAccountIDTemporalruleTemporalRuleIDDelete**](TemporalRuleApi.md#v1AccountAccountIDTemporalruleTemporalRuleIDDelete) | **DELETE** /v1/account/{accountID}/temporalrule/{temporalRuleID} | Delete Temporal Rule
[**v1AccountAccountIDTemporalruleTemporalRuleIDGet**](TemporalRuleApi.md#v1AccountAccountIDTemporalruleTemporalRuleIDGet) | **GET** /v1/account/{accountID}/temporalrule/{temporalRuleID} | Get Temporal Rule Details
[**v1AccountAccountIDTemporalruleTemporalRuleIDPut**](TemporalRuleApi.md#v1AccountAccountIDTemporalruleTemporalRuleIDPut) | **PUT** /v1/account/{accountID}/temporalrule/{temporalRuleID} | Update Temporal Rule



## v1AccountAccountIDTemporalruleGet

> ServiceDocsTemporalRuleGetAll v1AccountAccountIDTemporalruleGet(accountID, opts)

Get Temporal Rule List

Access all temporal rules for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDTemporalruleGet(accountID, opts, (error, data, response) => {
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

[**ServiceDocsTemporalRuleGetAll**](ServiceDocsTemporalRuleGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalrulePost

> ServiceDocsTemporalRuleGetSingle v1AccountAccountIDTemporalrulePost(accountID, temporalrule)

Create Temporal Rule

Create temporal rules for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi();
let accountID = "accountID_example"; // String | Account ID, 32 alphanumeric
let temporalrule = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPTemporalRuleAddEdit2(); // ServiceVOIPTemporalRuleAddEdit2 | payload fields
apiInstance.v1AccountAccountIDTemporalrulePost(accountID, temporalrule, (error, data, response) => {
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
 **accountID** | **String**| Account ID, 32 alphanumeric | 
 **temporalrule** | [**ServiceVOIPTemporalRuleAddEdit2**](ServiceVOIPTemporalRuleAddEdit2.md)| payload fields | 

### Return type

[**ServiceDocsTemporalRuleGetSingle**](ServiceDocsTemporalRuleGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDTemporalruleTemporalRuleIDDelete

> ServiceDocsTemporalRuleGetSingle v1AccountAccountIDTemporalruleTemporalRuleIDDelete(accountID, temporalRuleID)

Delete Temporal Rule

Remove a temporal rule from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleID = "temporalRuleID_example"; // String | temporal rule ID, 32 alpha numeric
apiInstance.v1AccountAccountIDTemporalruleTemporalRuleIDDelete(accountID, temporalRuleID, (error, data, response) => {
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
 **temporalRuleID** | **String**| temporal rule ID, 32 alpha numeric | 

### Return type

[**ServiceDocsTemporalRuleGetSingle**](ServiceDocsTemporalRuleGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalruleTemporalRuleIDGet

> ServiceDocsTemporalRuleGetSingle v1AccountAccountIDTemporalruleTemporalRuleIDGet(accountID, temporalRuleID)

Get Temporal Rule Details

View details about individual time rules.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleID = "temporalRuleID_example"; // String | Temporal Rule ID, 32 alpha numeric
apiInstance.v1AccountAccountIDTemporalruleTemporalRuleIDGet(accountID, temporalRuleID, (error, data, response) => {
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
 **temporalRuleID** | **String**| Temporal Rule ID, 32 alpha numeric | 

### Return type

[**ServiceDocsTemporalRuleGetSingle**](ServiceDocsTemporalRuleGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalruleTemporalRuleIDPut

> ServiceDocsTemporalRuleGetSingle v1AccountAccountIDTemporalruleTemporalRuleIDPut(accountID, temporalRuleID, reqBody)

Update Temporal Rule

Edit the existing temporal rules in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleID = "temporalRuleID_example"; // String | Temporal Rule ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPTemporalRuleAddEdit2(); // ServiceVOIPTemporalRuleAddEdit2 | payload fields
apiInstance.v1AccountAccountIDTemporalruleTemporalRuleIDPut(accountID, temporalRuleID, reqBody, (error, data, response) => {
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
 **temporalRuleID** | **String**| Temporal Rule ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPTemporalRuleAddEdit2**](ServiceVOIPTemporalRuleAddEdit2.md)| payload fields | 

### Return type

[**ServiceDocsTemporalRuleGetSingle**](ServiceDocsTemporalRuleGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

