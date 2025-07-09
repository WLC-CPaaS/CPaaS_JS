# WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountidDeviceDeviceidDelete**](DeviceApi.md#v1AccountAccountidDeviceDeviceidDelete) | **DELETE** /v1/account/{accountid}/device/{deviceid} | Delete Device
[**v1AccountAccountidDeviceDeviceidGet**](DeviceApi.md#v1AccountAccountidDeviceDeviceidGet) | **GET** /v1/account/{accountid}/device/{deviceid} | Get Device Details
[**v1AccountAccountidDeviceDeviceidPut**](DeviceApi.md#v1AccountAccountidDeviceDeviceidPut) | **PUT** /v1/account/{accountid}/device/{deviceid} | Update Device
[**v1AccountAccountidDeviceDeviceidRebootPost**](DeviceApi.md#v1AccountAccountidDeviceDeviceidRebootPost) | **POST** /v1/account/{accountid}/device/{deviceid}/reboot | Reboot Device
[**v1AccountAccountidDeviceGet**](DeviceApi.md#v1AccountAccountidDeviceGet) | **GET** /v1/account/{accountid}/device | Get Device List
[**v1AccountAccountidDevicePost**](DeviceApi.md#v1AccountAccountidDevicePost) | **POST** /v1/account/{accountid}/device | Create Device
[**v1AccountAccountidDeviceStatusGet**](DeviceApi.md#v1AccountAccountidDeviceStatusGet) | **GET** /v1/account/{accountid}/device/status | Get Device Status



## v1AccountAccountidDeviceDeviceidDelete

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidDelete(accountid, deviceid)

Delete Device

Remove one device from a CPaaS account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountidDeviceDeviceidDelete(accountid, deviceid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **deviceid** | **String**| Device ID, 32 alpha numeric | 

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidDeviceDeviceidGet

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidGet(accountid, deviceid)

Get Device Details

Permit a user to view specific device details.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountidDeviceDeviceidGet(accountid, deviceid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **deviceid** | **String**| Device ID, 32 alpha numeric | 

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidDeviceDeviceidPut

> ServiceDocsDeviceGetSingle v1AccountAccountidDeviceDeviceidPut(accountid, deviceid, device)

Update Device

Edit specifics about the device, such as the device type, name, and owner.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
let device = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPDeviceAddEdit2(); // ServiceVOIPDeviceAddEdit2 | device fields
apiInstance.v1AccountAccountidDeviceDeviceidPut(accountid, deviceid, device, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **deviceid** | **String**| Device ID, 32 alpha numeric | 
 **device** | [**ServiceVOIPDeviceAddEdit2**](ServiceVOIPDeviceAddEdit2.md)| device fields | 

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountidDeviceDeviceidRebootPost

> ServiceDocsDeviceReboot v1AccountAccountidDeviceDeviceidRebootPost(accountid, deviceid)

Reboot Device

Reboot a device in an account to mitigate malware and improve device performance.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let deviceid = "deviceid_example"; // String | Device ID, 32 alpha numeric
apiInstance.v1AccountAccountidDeviceDeviceidRebootPost(accountid, deviceid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **deviceid** | **String**| Device ID, 32 alpha numeric | 

### Return type

[**ServiceDocsDeviceReboot**](ServiceDocsDeviceReboot.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidDeviceGet

> ServiceDocsDeviceGetAll v1AccountAccountidDeviceGet(accountid, opts)

Get Device List

Obtain a list of all devices associated with an account such as fax machines, cell phones, and soft phones.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountidDeviceGet(accountid, opts, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **startKey** | **String**| start_key for pagination that was returned as next_start_key from your previous call | [optional] 
 **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] 

### Return type

[**ServiceDocsDeviceGetAll**](ServiceDocsDeviceGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidDevicePost

> ServiceDocsDeviceGetSingle v1AccountAccountidDevicePost(accountid, device)

Create Device

Connect a new device to an account to enhance communication methods.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let device = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPDeviceAddEdit2(); // ServiceVOIPDeviceAddEdit2 | device fields
apiInstance.v1AccountAccountidDevicePost(accountid, device, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 
 **device** | [**ServiceVOIPDeviceAddEdit2**](ServiceVOIPDeviceAddEdit2.md)| device fields | 

### Return type

[**ServiceDocsDeviceGetSingle**](ServiceDocsDeviceGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountidDeviceStatusGet

> ServiceDocsDeviceStatus v1AccountAccountidDeviceStatusGet(accountid)

Get Device Status

Retrieve a device’s status (e.g., registered or not registered) in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.DeviceApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
apiInstance.v1AccountAccountidDeviceStatusGet(accountid, (error, data, response) => {
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
 **accountid** | **String**| Account ID, 32 alpha numeric | 

### Return type

[**ServiceDocsDeviceStatus**](ServiceDocsDeviceStatus.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

