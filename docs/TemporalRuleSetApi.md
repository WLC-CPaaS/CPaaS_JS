# WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDTemporalrulesetGet**](TemporalRuleSetApi.md#v1AccountAccountIDTemporalrulesetGet) | **GET** /v1/account/{accountID}/temporalruleset | Get Temporal Rule Set List
[**v1AccountAccountIDTemporalrulesetPost**](TemporalRuleSetApi.md#v1AccountAccountIDTemporalrulesetPost) | **POST** /v1/account/{accountID}/temporalruleset | Create Temporal Rule Set
[**v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete**](TemporalRuleSetApi.md#v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete) | **DELETE** /v1/account/{accountID}/temporalruleset/{temporalRuleSetID} | Delete Temporal Rule Set
[**v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet**](TemporalRuleSetApi.md#v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet) | **GET** /v1/account/{accountID}/temporalruleset/{temporalRuleSetID} | Get Temporal Rule Set Details
[**v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut**](TemporalRuleSetApi.md#v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut) | **PUT** /v1/account/{accountID}/temporalruleset/{temporalRuleSetID} | Update Temporal Rule Set



## v1AccountAccountIDTemporalrulesetGet

> ServiceDocsTemporalRuleSetGetAll v1AccountAccountIDTemporalrulesetGet(accountID, opts)

Get Temporal Rule Set List

Access the temporal rule set list in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDTemporalrulesetGet(accountID, opts, (error, data, response) => {
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

[**ServiceDocsTemporalRuleSetGetAll**](ServiceDocsTemporalRuleSetGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalrulesetPost

> ServiceDocsTemporalRuleSetGetSingle v1AccountAccountIDTemporalrulesetPost(accountID, temporalruleset)

Create Temporal Rule Set

Develop a new temporal rule set for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
let accountID = "accountID_example"; // String | Account ID, 32 alphanumeric
let temporalruleset = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPTemporalRuleSetAddEditData(); // ServiceVOIPTemporalRuleSetAddEditData | payload fields
apiInstance.v1AccountAccountIDTemporalrulesetPost(accountID, temporalruleset, (error, data, response) => {
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
 **temporalruleset** | [**ServiceVOIPTemporalRuleSetAddEditData**](ServiceVOIPTemporalRuleSetAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsTemporalRuleSetGetSingle**](ServiceDocsTemporalRuleSetGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete

> ServiceDocsTemporalRuleSetGetSingle v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete(accountID, temporalRuleSetID)

Delete Temporal Rule Set

Delete the temporal rule set from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleSetID = "temporalRuleSetID_example"; // String | temporal rule set ID, 32 alpha numeric
apiInstance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDDelete(accountID, temporalRuleSetID, (error, data, response) => {
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
 **temporalRuleSetID** | **String**| temporal rule set ID, 32 alpha numeric | 

### Return type

[**ServiceDocsTemporalRuleSetGetSingle**](ServiceDocsTemporalRuleSetGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet

> ServiceDocsTemporalRuleSetGetSingle v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet(accountID, temporalRuleSetID)

Get Temporal Rule Set Details

Acquire details about a temporal rule set in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleSetID = "temporalRuleSetID_example"; // String | Temporal Ruleset ID, 32 alpha numeric
apiInstance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDGet(accountID, temporalRuleSetID, (error, data, response) => {
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
 **temporalRuleSetID** | **String**| Temporal Ruleset ID, 32 alpha numeric | 

### Return type

[**ServiceDocsTemporalRuleSetGetSingle**](ServiceDocsTemporalRuleSetGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut

> ServiceDocsTemporalRuleSetGetSingle v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut(accountID, temporalRuleSetID, reqBody)

Update Temporal Rule Set

Efficiently adjust the temporal rule set in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.TemporalRuleSetApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let temporalRuleSetID = "temporalRuleSetID_example"; // String | Temporal Ruleset ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPTemporalRuleSetAddEditData(); // ServiceVOIPTemporalRuleSetAddEditData | payload fields
apiInstance.v1AccountAccountIDTemporalrulesetTemporalRuleSetIDPut(accountID, temporalRuleSetID, reqBody, (error, data, response) => {
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
 **temporalRuleSetID** | **String**| Temporal Ruleset ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPTemporalRuleSetAddEditData**](ServiceVOIPTemporalRuleSetAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsTemporalRuleSetGetSingle**](ServiceDocsTemporalRuleSetGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

