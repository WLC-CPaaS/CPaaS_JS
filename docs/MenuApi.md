# WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDMenuGet**](MenuApi.md#v1AccountAccountIDMenuGet) | **GET** /v1/account/{accountID}/menu | Get Menu List
[**v1AccountAccountIDMenuMenuIDDelete**](MenuApi.md#v1AccountAccountIDMenuMenuIDDelete) | **DELETE** /v1/account/{accountID}/menu/{menuID} | Delete Menu
[**v1AccountAccountIDMenuMenuIDGet**](MenuApi.md#v1AccountAccountIDMenuMenuIDGet) | **GET** /v1/account/{accountID}/menu/{menuID} | Get Menu Details
[**v1AccountAccountIDMenuMenuIDPut**](MenuApi.md#v1AccountAccountIDMenuMenuIDPut) | **PUT** /v1/account/{accountID}/menu/{menuID} | Update Menu
[**v1AccountAccountIDMenuPost**](MenuApi.md#v1AccountAccountIDMenuPost) | **POST** /v1/account/{accountID}/menu | Create Menu



## v1AccountAccountIDMenuGet

> ServiceDocsMenuGetAll v1AccountAccountIDMenuGet(accountID, opts)

Get Menu List

Users can access data about all menus in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDMenuGet(accountID, opts, (error, data, response) => {
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

[**ServiceDocsMenuGetAll**](ServiceDocsMenuGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDMenuMenuIDDelete

> ServiceDocsMenuGetSingle v1AccountAccountIDMenuMenuIDDelete(accountID, menuID)

Delete Menu

Delete a menu from an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let menuID = "menuID_example"; // String | Menu ID, 32 alpha numeric
apiInstance.v1AccountAccountIDMenuMenuIDDelete(accountID, menuID, (error, data, response) => {
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
 **menuID** | **String**| Menu ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMenuGetSingle**](ServiceDocsMenuGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDMenuMenuIDGet

> ServiceDocsMenuGetSingle v1AccountAccountIDMenuMenuIDGet(accountID, menuID)

Get Menu Details

Get details about a menu in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let menuID = "menuID_example"; // String | Menu ID, 32 alpha numeric
apiInstance.v1AccountAccountIDMenuMenuIDGet(accountID, menuID, (error, data, response) => {
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
 **menuID** | **String**| Menu ID, 32 alpha numeric | 

### Return type

[**ServiceDocsMenuGetSingle**](ServiceDocsMenuGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDMenuMenuIDPut

> ServiceDocsMenuGetSingle v1AccountAccountIDMenuMenuIDPut(accountID, menuID, reqBody)

Update Menu

Edit an account menu.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let menuID = "menuID_example"; // String | Menu ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMenuAddEditData(); // ServiceVOIPMenuAddEditData | payload fields
apiInstance.v1AccountAccountIDMenuMenuIDPut(accountID, menuID, reqBody, (error, data, response) => {
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
 **menuID** | **String**| Menu ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPMenuAddEditData**](ServiceVOIPMenuAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsMenuGetSingle**](ServiceDocsMenuGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDMenuPost

> ServiceDocsMenuGetSingle v1AccountAccountIDMenuPost(accountID, menu)

Create Menu

Create a new menu for an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.MenuApi();
let accountID = "accountID_example"; // String | Account ID, 32 alphanumeric
let menu = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPMenuAddEditData(); // ServiceVOIPMenuAddEditData | Menu data
apiInstance.v1AccountAccountIDMenuPost(accountID, menu, (error, data, response) => {
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
 **menu** | [**ServiceVOIPMenuAddEditData**](ServiceVOIPMenuAddEditData.md)| Menu data | 

### Return type

[**ServiceDocsMenuGetSingle**](ServiceDocsMenuGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

