# WhiteLabelCommunicationsCPaasApiDocumentation.DataApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1DataCallDailySummaryGet**](DataApi.md#v1DataCallDailySummaryGet) | **GET** /v1/data/call_daily_summary | Get Call Daily Summary List
[**v1DataCallDetailGet**](DataApi.md#v1DataCallDetailGet) | **GET** /v1/data/call_detail | Get Call Detail List
[**v1DataCallMonthlySummaryGet**](DataApi.md#v1DataCallMonthlySummaryGet) | **GET** /v1/data/call_monthly_summary | Get Call Detail List
[**v1DataEndpointListGet**](DataApi.md#v1DataEndpointListGet) | **GET** /v1/data/endpoint_list | Get Endpoint List
[**v1DataEventDailySummaryGet**](DataApi.md#v1DataEventDailySummaryGet) | **GET** /v1/data/event_daily_summary | Get Event Daily Summary List
[**v1DataEventDetailGet**](DataApi.md#v1DataEventDetailGet) | **GET** /v1/data/event_detail | Get Event Details
[**v1DataEventMonthlySummaryGet**](DataApi.md#v1DataEventMonthlySummaryGet) | **GET** /v1/data/event_monthly_summary | Get Event Monthly Summary List
[**v1DataFeatureDailySummaryGet**](DataApi.md#v1DataFeatureDailySummaryGet) | **GET** /v1/data/feature_daily_summary | Get Feature Daily Summary List
[**v1DataFeatureMonthlySummaryGet**](DataApi.md#v1DataFeatureMonthlySummaryGet) | **GET** /v1/data/feature_monthly_summary | Get Feature Monthly Summary List



## v1DataCallDailySummaryGet

> ServiceDocsCallDailySummary v1DataCallDailySummaryGet(opts)

Get Call Daily Summary List

Retrieve a paginated list of call daily summary based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'accountId': "accountId_example", // String | 
  'callType': "callType_example", // String | 
  'endDate': "endDate_example", // String | 
  'pageSize': 56, // Number | 
  'startDate': "startDate_example", // String | 
  'startKey': "startKey_example" // String | 
};
apiInstance.v1DataCallDailySummaryGet(opts, (error, data, response) => {
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
 **accountId** | **String**|  | [optional] 
 **callType** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startDate** | **String**|  | [optional] 
 **startKey** | **String**|  | [optional] 

### Return type

[**ServiceDocsCallDailySummary**](ServiceDocsCallDailySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataCallDetailGet

> ServiceDocsCallDetail v1DataCallDetailGet(opts)

Get Call Detail List

Retrieve a paginated list of call details based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'account': "account_example", // String | 
  'callType': "callType_example", // String | 
  'calleeName': "calleeName_example", // String | 
  'calleeNumber': "calleeNumber_example", // String | 
  'callerName': "callerName_example", // String | 
  'callerNumber': "callerNumber_example", // String | 
  'endDate': "endDate_example", // String | 
  'pageSize': 56, // Number | 
  'startDate': "startDate_example", // String | 
  'startKey': "startKey_example" // String | 
};
apiInstance.v1DataCallDetailGet(opts, (error, data, response) => {
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
 **account** | **String**|  | [optional] 
 **callType** | **String**|  | [optional] 
 **calleeName** | **String**|  | [optional] 
 **calleeNumber** | **String**|  | [optional] 
 **callerName** | **String**|  | [optional] 
 **callerNumber** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startDate** | **String**|  | [optional] 
 **startKey** | **String**|  | [optional] 

### Return type

[**ServiceDocsCallDetail**](ServiceDocsCallDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataCallMonthlySummaryGet

> ServiceDocsCallMonthlySummary v1DataCallMonthlySummaryGet(opts)

Get Call Detail List

Retrieve a paginated list of call monthly summary based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'account': "account_example", // String | 
  'callType': "callType_example", // String | 
  'endMonth': 56, // Number | 
  'endYear': 56, // Number | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'startMonth': 56, // Number | 
  'startYear': 56 // Number | 
};
apiInstance.v1DataCallMonthlySummaryGet(opts, (error, data, response) => {
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
 **account** | **String**|  | [optional] 
 **callType** | **String**|  | [optional] 
 **endMonth** | **Number**|  | [optional] 
 **endYear** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **startMonth** | **Number**|  | [optional] 
 **startYear** | **Number**|  | [optional] 

### Return type

[**ServiceDocsCallMonthlySummary**](ServiceDocsCallMonthlySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataEndpointListGet

> ServiceDocsEndpointList v1DataEndpointListGet(opts)

Get Endpoint List

Retrieve a paginated list of endpoints based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'endpointName': "endpointName_example", // String | 
  'featureName': "featureName_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'transactionType': "transactionType_example", // String | 
  'version': "version_example" // String | 
};
apiInstance.v1DataEndpointListGet(opts, (error, data, response) => {
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
 **endpointName** | **String**|  | [optional] 
 **featureName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **transactionType** | **String**|  | [optional] 
 **version** | **String**|  | [optional] 

### Return type

[**ServiceDocsEndpointList**](ServiceDocsEndpointList.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataEventDailySummaryGet

> ServiceDocsEventDailySummary v1DataEventDailySummaryGet(opts)

Get Event Daily Summary List

Retrieve a paginated list of event daily summaries based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'accountId': "accountId_example", // String | 
  'component': "component_example", // String | 
  'endDate': "endDate_example", // String | 
  'pageSize': 56, // Number | 
  'startDate': "startDate_example", // String | 
  'startKey': "startKey_example" // String | 
};
apiInstance.v1DataEventDailySummaryGet(opts, (error, data, response) => {
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
 **accountId** | **String**|  | [optional] 
 **component** | **String**|  | [optional] 
 **endDate** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startDate** | **String**|  | [optional] 
 **startKey** | **String**|  | [optional] 

### Return type

[**ServiceDocsEventDailySummary**](ServiceDocsEventDailySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataEventDetailGet

> ServiceDocsEventDetail v1DataEventDetailGet(opts)

Get Event Details

Retrieve a paginated list of event detail based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'accountId': "accountId_example", // String | 
  'component': "component_example", // String | 
  'endDateTime': "endDateTime_example", // String | 
  'eventName': "eventName_example", // String | 
  'execStatus': "execStatus_example", // String | 
  'pageSize': 56, // Number | 
  'startDateTime': "startDateTime_example", // String | 
  'startKey': "startKey_example", // String | 
  'username': "username_example" // String | 
};
apiInstance.v1DataEventDetailGet(opts, (error, data, response) => {
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
 **accountId** | **String**|  | [optional] 
 **component** | **String**|  | [optional] 
 **endDateTime** | **String**|  | [optional] 
 **eventName** | **String**|  | [optional] 
 **execStatus** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startDateTime** | **String**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **username** | **String**|  | [optional] 

### Return type

[**ServiceDocsEventDetail**](ServiceDocsEventDetail.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataEventMonthlySummaryGet

> ServiceDocsEventMonthlySummary v1DataEventMonthlySummaryGet(opts)

Get Event Monthly Summary List

Retrieve a paginated list of event monthly summaries based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'accountId': "accountId_example", // String | 
  'component': "component_example", // String | 
  'endMonth': 56, // Number | 
  'endYear': 56, // Number | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'startMonth': 56, // Number | 
  'startYear': 56 // Number | 
};
apiInstance.v1DataEventMonthlySummaryGet(opts, (error, data, response) => {
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
 **accountId** | **String**|  | [optional] 
 **component** | **String**|  | [optional] 
 **endMonth** | **Number**|  | [optional] 
 **endYear** | **Number**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **startMonth** | **Number**|  | [optional] 
 **startYear** | **Number**|  | [optional] 

### Return type

[**ServiceDocsEventMonthlySummary**](ServiceDocsEventMonthlySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataFeatureDailySummaryGet

> ServiceDocsFeatureDailySummary v1DataFeatureDailySummaryGet(opts)

Get Feature Daily Summary List

Retrieve a paginated list of feature daily summary based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'endDate': "endDate_example", // String | 
  'featureName': "featureName_example", // String | 
  'pageSize': 56, // Number | 
  'startDate': "startDate_example", // String | 
  'startKey': "startKey_example" // String | 
};
apiInstance.v1DataFeatureDailySummaryGet(opts, (error, data, response) => {
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
 **endDate** | **String**|  | [optional] 
 **featureName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startDate** | **String**|  | [optional] 
 **startKey** | **String**|  | [optional] 

### Return type

[**ServiceDocsFeatureDailySummary**](ServiceDocsFeatureDailySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## v1DataFeatureMonthlySummaryGet

> ServiceDocsFeatureMonthlySummary v1DataFeatureMonthlySummaryGet(opts)

Get Feature Monthly Summary List

Retrieve a paginated list of feature monthly summary based on query parameters.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DataApi();
let opts = {
  'endMonth': 56, // Number | 
  'endYear': 56, // Number | 
  'featureName': "featureName_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'startMonth': 56, // Number | 
  'startYear': 56 // Number | 
};
apiInstance.v1DataFeatureMonthlySummaryGet(opts, (error, data, response) => {
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
 **endMonth** | **Number**|  | [optional] 
 **endYear** | **Number**|  | [optional] 
 **featureName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **startMonth** | **Number**|  | [optional] 
 **startYear** | **Number**|  | [optional] 

### Return type

[**ServiceDocsFeatureMonthlySummary**](ServiceDocsFeatureMonthlySummary.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

