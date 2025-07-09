# WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountidUserGet**](VoIPUserApi.md#v1AccountAccountidUserGet) | **GET** /v1/account/{accountid}/user | Get User List
[**v1AccountAccountidUserPost**](VoIPUserApi.md#v1AccountAccountidUserPost) | **POST** /v1/account/{accountid}/user | Create User
[**v1AccountAccountidUserUseridDelete**](VoIPUserApi.md#v1AccountAccountidUserUseridDelete) | **DELETE** /v1/account/{accountid}/user/{userid} | Delete User
[**v1AccountAccountidUserUseridGet**](VoIPUserApi.md#v1AccountAccountidUserUseridGet) | **GET** /v1/account/{accountid}/user/{userid} | Get User Details
[**v1AccountAccountidUserUseridPut**](VoIPUserApi.md#v1AccountAccountidUserUseridPut) | **PUT** /v1/account/{accountid}/user/{userid} | Update User
[**v1AccountAccountidUserUseridUserauthPost**](VoIPUserApi.md#v1AccountAccountidUserUseridUserauthPost) | **POST** /v1/account/{accountid}/user/{userid}/userauth | Impersonate a User



## v1AccountAccountidUserGet

> ServiceDocsUserGetAll v1AccountAccountidUserGet(accountid, opts)

Get User List

Get a list of all VoIP users that includes first and last names, email addresses, extensions, and account statuses.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountidUserGet(accountid, opts, (error, data, response) => {
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

[**ServiceDocsUserGetAll**](ServiceDocsUserGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidUserPost

> ServiceDocsUserGetSingle v1AccountAccountidUserPost(accountid, user)

Create User

Add new users to the account. When a user is added, the system generates their unique 32 alpha numeric ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let user = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPUserAdd2(); // ServiceVOIPUserAdd2 | user fields
apiInstance.v1AccountAccountidUserPost(accountid, user, (error, data, response) => {
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
 **user** | [**ServiceVOIPUserAdd2**](ServiceVOIPUserAdd2.md)| user fields | 

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountidUserUseridDelete

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridDelete(accountid, userid)

Delete User

Delete VoIP user access to maintain the security of your accounts.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let userid = "userid_example"; // String | User ID, 32 alpha numeric
apiInstance.v1AccountAccountidUserUseridDelete(accountid, userid, (error, data, response) => {
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
 **userid** | **String**| User ID, 32 alpha numeric | 

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidUserUseridGet

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridGet(accountid, userid)

Get User Details

View specific user details.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let userid = "userid_example"; // String | User ID, 32 alpha numeric
apiInstance.v1AccountAccountidUserUseridGet(accountid, userid, (error, data, response) => {
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
 **userid** | **String**| User ID, 32 alpha numeric | 

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountidUserUseridPut

> ServiceDocsUserGetSingle v1AccountAccountidUserUseridPut(accountid, userid, user)

Update User

Keep user information current. Modify the first and last name, extension, and other pertinent information.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let userid = "userid_example"; // String | User ID, 32 alpha numeric
let user = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPUserAdd2(); // ServiceVOIPUserAdd2 | user fields
apiInstance.v1AccountAccountidUserUseridPut(accountid, userid, user, (error, data, response) => {
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
 **userid** | **String**| User ID, 32 alpha numeric | 
 **user** | [**ServiceVOIPUserAdd2**](ServiceVOIPUserAdd2.md)| user fields | 

### Return type

[**ServiceDocsUserGetSingle**](ServiceDocsUserGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountidUserUseridUserauthPost

> ServiceDocsImpersonateUserGetSingle v1AccountAccountidUserUseridUserauthPost(accountid, userid, user)

Impersonate a User

Retrieve a token for making presence calls.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoIPUserApi();
let accountid = "accountid_example"; // String | Account ID, 32 alpha numeric
let userid = "userid_example"; // String | User ID, 32 alpha numeric
let user = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPImpersonateUser(); // ServiceVOIPImpersonateUser | Payload for impersonate a user
apiInstance.v1AccountAccountidUserUseridUserauthPost(accountid, userid, user, (error, data, response) => {
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
 **userid** | **String**| User ID, 32 alpha numeric | 
 **user** | [**ServiceVOIPImpersonateUser**](ServiceVOIPImpersonateUser.md)| Payload for impersonate a user | 

### Return type

[**ServiceDocsImpersonateUserGetSingle**](ServiceDocsImpersonateUserGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

