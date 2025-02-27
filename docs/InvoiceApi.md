# WhiteLabelCommunicationsCPaasApiDocumentation.InvoiceApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1FinanceDailyreportGet**](InvoiceApi.md#v1FinanceDailyreportGet) | **GET** /v1/finance/dailyreport | Get Daily Account Summary
[**v1FinanceInvoiceGet**](InvoiceApi.md#v1FinanceInvoiceGet) | **GET** /v1/finance/invoice | Get Invoice Summary
[**v1FinanceMonthlysummaryGet**](InvoiceApi.md#v1FinanceMonthlysummaryGet) | **GET** /v1/finance/monthlysummary | Get Monthly Summary



## v1FinanceDailyreportGet

> ServiceDocDailyAccountSummaryOutput v1FinanceDailyreportGet(year, month, componentId)

Get Daily Account Summary

Retrieve the daily account summary for the month, year, and component.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.InvoiceApi();
let year = "year_example"; // String | Year of the century
let month = "month_example"; // String | Month of the year
let componentId = "componentId_example"; // String | Component id of the routes
apiInstance.v1FinanceDailyreportGet(year, month, componentId, (error, data, response) => {
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
 **year** | **String**| Year of the century | 
 **month** | **String**| Month of the year | 
 **componentId** | **String**| Component id of the routes | 

### Return type

[**ServiceDocDailyAccountSummaryOutput**](ServiceDocDailyAccountSummaryOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1FinanceInvoiceGet

> ServiceDocInvoiceOutput v1FinanceInvoiceGet(year, month)

Get Invoice Summary

Get the invoice summary for the given month, year, and client.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.InvoiceApi();
let year = "year_example"; // String | Invoice year
let month = "month_example"; // String | Invoice Month
apiInstance.v1FinanceInvoiceGet(year, month, (error, data, response) => {
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
 **year** | **String**| Invoice year | 
 **month** | **String**| Invoice Month | 

### Return type

[**ServiceDocInvoiceOutput**](ServiceDocInvoiceOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1FinanceMonthlysummaryGet

> ServiceDocMonthlySummaryOutput v1FinanceMonthlysummaryGet(year, month)

Get Monthly Summary

Obtain the monthly account summary for the month, year, and client.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.InvoiceApi();
let year = "year_example"; // String | Invoice year
let month = "month_example"; // String | Invoice month
apiInstance.v1FinanceMonthlysummaryGet(year, month, (error, data, response) => {
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
 **year** | **String**| Invoice year | 
 **month** | **String**| Invoice month | 

### Return type

[**ServiceDocMonthlySummaryOutput**](ServiceDocMonthlySummaryOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

