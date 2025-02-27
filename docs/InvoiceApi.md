# InvoiceApi

All URIs are relative to *http://api.cpaaslabs.net*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1FinanceDailyreportGet**](InvoiceApi.md#v1FinanceDailyreportGet) | **GET** /v1/finance/dailyreport | Get Daily Account Summary |
| [**v1FinanceInvoiceGet**](InvoiceApi.md#v1FinanceInvoiceGet) | **GET** /v1/finance/invoice | Get Invoice Summary |
| [**v1FinanceMonthlysummaryGet**](InvoiceApi.md#v1FinanceMonthlysummaryGet) | **GET** /v1/finance/monthlysummary | Get Monthly Summary |



## v1FinanceDailyreportGet

> ServiceDocDailyAccountSummaryOutput v1FinanceDailyreportGet(year, month, componentId)

Get Daily Account Summary

Retrieve the daily account summary for the month, year, and component.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.InvoiceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        InvoiceApi apiInstance = new InvoiceApi(defaultClient);
        String year = "year_example"; // String | Year of the century
        String month = "month_example"; // String | Month of the year
        String componentId = "componentId_example"; // String | Component id of the routes
        try {
            ServiceDocDailyAccountSummaryOutput result = apiInstance.v1FinanceDailyreportGet(year, month, componentId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InvoiceApi#v1FinanceDailyreportGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **year** | **String**| Year of the century | |
| **month** | **String**| Month of the year | |
| **componentId** | **String**| Component id of the routes | |

### Return type

[**ServiceDocDailyAccountSummaryOutput**](ServiceDocDailyAccountSummaryOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |


## v1FinanceInvoiceGet

> ServiceDocInvoiceOutput v1FinanceInvoiceGet(year, month)

Get Invoice Summary

Get the invoice summary for the given month, year, and client.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.InvoiceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        InvoiceApi apiInstance = new InvoiceApi(defaultClient);
        String year = "year_example"; // String | Invoice year
        String month = "month_example"; // String | Invoice Month
        try {
            ServiceDocInvoiceOutput result = apiInstance.v1FinanceInvoiceGet(year, month);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InvoiceApi#v1FinanceInvoiceGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **year** | **String**| Invoice year | |
| **month** | **String**| Invoice Month | |

### Return type

[**ServiceDocInvoiceOutput**](ServiceDocInvoiceOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |


## v1FinanceMonthlysummaryGet

> ServiceDocMonthlySummaryOutput v1FinanceMonthlysummaryGet(year, month)

Get Monthly Summary

Obtain the monthly account summary for the month, year, and client.

### Example

```java
// Import classes:
import .ApiClient;
import .ApiException;
import .Configuration;
import .auth.*;
import .models.*;
import api.InvoiceApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://api.cpaaslabs.net");
        
        // Configure API key authorization: BearerAuth
        ApiKeyAuth BearerAuth = (ApiKeyAuth) defaultClient.getAuthentication("BearerAuth");
        BearerAuth.setApiKey("YOUR API KEY");
        // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
        //BearerAuth.setApiKeyPrefix("Token");

        InvoiceApi apiInstance = new InvoiceApi(defaultClient);
        String year = "year_example"; // String | Invoice year
        String month = "month_example"; // String | Invoice month
        try {
            ServiceDocMonthlySummaryOutput result = apiInstance.v1FinanceMonthlysummaryGet(year, month);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling InvoiceApi#v1FinanceMonthlysummaryGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **year** | **String**| Invoice year | |
| **month** | **String**| Invoice month | |

### Return type

[**ServiceDocMonthlySummaryOutput**](ServiceDocMonthlySummaryOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **400** | Bad Request |  -  |
| **500** | Internal Server Error |  -  |

