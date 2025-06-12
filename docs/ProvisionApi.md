# WhiteLabelCommunicationsCPaasApiDocumentation.ProvisionApi

All URIs are relative to *http://API_HOSTNAME*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDProvisionFilenameGet**](ProvisionApi.md#v1AccountAccountIDProvisionFilenameGet) | **GET** /v1/account/{accountID}/provision/{filename} | 



## v1AccountAccountIDProvisionFilenameGet

> File v1AccountAccountIDProvisionFilenameGet(accountID, filename)



Retrieve the configuration details (e.g., settings and parameters) for a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisionApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let filename = "filename_example"; // String | Name of config file
apiInstance.v1AccountAccountIDProvisionFilenameGet(accountID, filename, (error, data, response) => {
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
 **filename** | **String**| Name of config file | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

