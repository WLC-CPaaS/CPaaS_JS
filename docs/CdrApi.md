# WhiteLabelCommunicationsCPaasApiDocumentation.CdrApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDCdrCdrIDGet**](CdrApi.md#v1AccountAccountIDCdrCdrIDGet) | **GET** /v1/account/{accountID}/cdr/{cdrID} | 
[**v1AccountAccountIDCdrGet**](CdrApi.md#v1AccountAccountIDCdrGet) | **GET** /v1/account/{accountID}/cdr | 



## v1AccountAccountIDCdrCdrIDGet

> ServiceDocsCdrGetSingle v1AccountAccountIDCdrCdrIDGet(accountID, cdrID)



Retrieve the details of a single CDR record from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CdrApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let cdrID = "cdrID_example"; // String | CDR ID, string
apiInstance.v1AccountAccountIDCdrCdrIDGet(accountID, cdrID, (error, data, response) => {
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
 **cdrID** | **String**| CDR ID, string | 

### Return type

[**ServiceDocsCdrGetSingle**](ServiceDocsCdrGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDCdrGet

> ServiceDocsCdrGetAll v1AccountAccountIDCdrGet(accountID, pageSize, startKey, createdFrom, createdTo)



Retrieve a list of CDRs in a specific account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.CdrApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let pageSize = "pageSize_example"; // String | Page size (Maximum number of results to display per page)
let startKey = "startKey_example"; // String | Start key (Starting offset for displaying results)
let createdFrom = "createdFrom_example"; // String | For displaying records which are created on or after this timestamp (Supported timestamp formats: iso 8601, unix time in seconds or milliseconds or microseconds or nanoseconds)
let createdTo = "createdTo_example"; // String | For displaying records which are created on or before this timestamp (Supported timestamp formats: iso 8601, unix time in seconds or milliseconds or microseconds or nanoseconds)
apiInstance.v1AccountAccountIDCdrGet(accountID, pageSize, startKey, createdFrom, createdTo, (error, data, response) => {
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
 **pageSize** | **String**| Page size (Maximum number of results to display per page) | 
 **startKey** | **String**| Start key (Starting offset for displaying results) | 
 **createdFrom** | **String**| For displaying records which are created on or after this timestamp (Supported timestamp formats: iso 8601, unix time in seconds or milliseconds or microseconds or nanoseconds) | 
 **createdTo** | **String**| For displaying records which are created on or before this timestamp (Supported timestamp formats: iso 8601, unix time in seconds or milliseconds or microseconds or nanoseconds) | 

### Return type

[**ServiceDocsCdrGetAll**](ServiceDocsCdrGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

