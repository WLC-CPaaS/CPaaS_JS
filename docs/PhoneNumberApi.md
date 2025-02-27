# WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountidPhonenumberGet**](PhoneNumberApi.md#v1AccountAccountidPhonenumberGet) | **GET** /v1/account/{accountid}/phonenumber | Get Assigned Numbers List
[**v1AccountPhonenumberAssignPost**](PhoneNumberApi.md#v1AccountPhonenumberAssignPost) | **POST** /v1/account/phonenumber/assign | Assign Number
[**v1AccountPhonenumberDisconnectPost**](PhoneNumberApi.md#v1AccountPhonenumberDisconnectPost) | **POST** /v1/account/phonenumber/disconnect | Disconnect Number
[**v1AccountPhonenumberGet**](PhoneNumberApi.md#v1AccountPhonenumberGet) | **GET** /v1/account/phonenumber | Get Unassigned Numbers List
[**v1AccountPhonenumberPost**](PhoneNumberApi.md#v1AccountPhonenumberPost) | **POST** /v1/account/phonenumber | Purchase Number
[**v1AccountPhonenumberUnassignPost**](PhoneNumberApi.md#v1AccountPhonenumberUnassignPost) | **POST** /v1/account/phonenumber/unassign | Unassign Number
[**v1PhonenumberSearchGet**](PhoneNumberApi.md#v1PhonenumberSearchGet) | **GET** /v1/phonenumber/search | Search New Numbers



## v1AccountAccountidPhonenumberGet

> ServiceDocsAccountPhonenumberGetAll v1AccountAccountidPhonenumberGet(accountid, opts)

Get Assigned Numbers List

Access all phone numbers assigned to a CPaaS account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | Start key for pagination, obtained from previous responses
  'pageSize': 56 // Number | Number of records to return per page (range: 1 to 50)
};
apiInstance.v1AccountAccountidPhonenumberGet(accountid, opts, (error, data, response) => {
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
 **startKey** | **String**| Start key for pagination, obtained from previous responses | [optional] 
 **pageSize** | **Number**| Number of records to return per page (range: 1 to 50) | [optional] 

### Return type

[**ServiceDocsAccountPhonenumberGetAll**](ServiceDocsAccountPhonenumberGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountPhonenumberAssignPost

> ServiceAPIResponseStatusCodeOnly v1AccountPhonenumberAssignPost(payload)

Assign Number

Assign a purchased phone number to an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let payload = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsPhonenumberAssignPayload(); // ServiceDocsPhonenumberAssignPayload | assignment payload
apiInstance.v1AccountPhonenumberAssignPost(payload, (error, data, response) => {
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
 **payload** | [**ServiceDocsPhonenumberAssignPayload**](ServiceDocsPhonenumberAssignPayload.md)| assignment payload | 

### Return type

[**ServiceAPIResponseStatusCodeOnly**](ServiceAPIResponseStatusCodeOnly.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountPhonenumberDisconnectPost

> ServiceAPIResponseStatusCodeOnly v1AccountPhonenumberDisconnectPost(payload)

Disconnect Number

Disconnecting a phone number from a CPaaS account relinquishes ownership of the number back to the carrier.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let payload = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsPhonenumberUnassignPayload(); // ServiceDocsPhonenumberUnassignPayload | disconnect payload
apiInstance.v1AccountPhonenumberDisconnectPost(payload, (error, data, response) => {
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
 **payload** | [**ServiceDocsPhonenumberUnassignPayload**](ServiceDocsPhonenumberUnassignPayload.md)| disconnect payload | 

### Return type

[**ServiceAPIResponseStatusCodeOnly**](ServiceAPIResponseStatusCodeOnly.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountPhonenumberGet

> ServiceDocsAccountPhonenumberGetAll v1AccountPhonenumberGet(opts)

Get Unassigned Numbers List

Obtain all phone numbers that have not been assigned to a CPaaS account within your organization.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let opts = {
  'startKey': "startKey_example", // String | Start key for pagination, obtained from previous responses
  'pageSize': 56 // Number | Number of records to return per page (range: 1 to 50)
};
apiInstance.v1AccountPhonenumberGet(opts, (error, data, response) => {
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
 **startKey** | **String**| Start key for pagination, obtained from previous responses | [optional] 
 **pageSize** | **Number**| Number of records to return per page (range: 1 to 50) | [optional] 

### Return type

[**ServiceDocsAccountPhonenumberGetAll**](ServiceDocsAccountPhonenumberGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountPhonenumberPost

> ServiceDocsOrderPhonenumber v1AccountPhonenumberPost(phonenumber)

Purchase Number

Purchase or activate a phone number for CPaaS accounts within your business.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let phonenumber = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceTelephoneNumberList(); // ServiceTelephoneNumberList | phonenumber fields
apiInstance.v1AccountPhonenumberPost(phonenumber, (error, data, response) => {
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
 **phonenumber** | [**ServiceTelephoneNumberList**](ServiceTelephoneNumberList.md)| phonenumber fields | 

### Return type

[**ServiceDocsOrderPhonenumber**](ServiceDocsOrderPhonenumber.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountPhonenumberUnassignPost

> ServiceAPIResponseStatusCodeOnly v1AccountPhonenumberUnassignPost(payload)

Unassign Number

Remove a phone number from an account and place it back on the list of unassigned phone numbers.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let payload = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceDocsPhonenumberUnassignPayload(); // ServiceDocsPhonenumberUnassignPayload | unassign payload
apiInstance.v1AccountPhonenumberUnassignPost(payload, (error, data, response) => {
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
 **payload** | [**ServiceDocsPhonenumberUnassignPayload**](ServiceDocsPhonenumberUnassignPayload.md)| unassign payload | 

### Return type

[**ServiceAPIResponseStatusCodeOnly**](ServiceAPIResponseStatusCodeOnly.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PhonenumberSearchGet

> ServiceDocsPhonenumberSearchGetAll v1PhonenumberSearchGet(areaCode, opts)

Search New Numbers

Conduct a search for available phone numbers for purchase within an area code.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.PhoneNumberApi();
let areaCode = "areaCode_example"; // String | Area code (exactly 3 numeric characters) example: 610 or 484
let opts = {
  'quantity': 100 // Number | Number of records to return (range: 1 to 100, defaults to 100 if not provided)
};
apiInstance.v1PhonenumberSearchGet(areaCode, opts, (error, data, response) => {
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
 **areaCode** | **String**| Area code (exactly 3 numeric characters) example: 610 or 484 | 
 **quantity** | **Number**| Number of records to return (range: 1 to 100, defaults to 100 if not provided) | [optional] [default to 100]

### Return type

[**ServiceDocsPhonenumberSearchGetAll**](ServiceDocsPhonenumberSearchGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

