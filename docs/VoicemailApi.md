# WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDVoicemailGet**](VoicemailApi.md#v1AccountAccountIDVoicemailGet) | **GET** /v1/account/{accountID}/voicemail | Get Voicemail Box List
[**v1AccountAccountIDVoicemailPost**](VoicemailApi.md#v1AccountAccountIDVoicemailPost) | **POST** /v1/account/{accountID}/voicemail | Create Voicemail Box
[**v1AccountAccountIDVoicemailVoicemailIDDelete**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDDelete) | **DELETE** /v1/account/{accountID}/voicemail/{voicemailID} | Delete Voicemail Box
[**v1AccountAccountIDVoicemailVoicemailIDGet**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDGet) | **GET** /v1/account/{accountID}/voicemail/{voicemailID} | Get Voicemail Box Details
[**v1AccountAccountIDVoicemailVoicemailIDMessageGet**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageGet) | **GET** /v1/account/{accountID}/voicemail/{voicemailID}/message | Get Voicemail Message List
[**v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete) | **DELETE** /v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID} | Delete Voicemail Message
[**v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet) | **GET** /v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID} | Get Voicemail Message Details
[**v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut) | **PUT** /v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID} | Update Voicemail Message
[**v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet) | **GET** /v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}/raw | Get Voicemail Message File
[**v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost) | **POST** /v1/account/{accountID}/voicemail/{voicemailID}/message/{messageID}/raw | Add Voicemail Message File
[**v1AccountAccountIDVoicemailVoicemailIDMessagePost**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDMessagePost) | **POST** /v1/account/{accountID}/voicemail/{voicemailID}/message | Create Voicemail Message
[**v1AccountAccountIDVoicemailVoicemailIDPut**](VoicemailApi.md#v1AccountAccountIDVoicemailVoicemailIDPut) | **PUT** /v1/account/{accountID}/voicemail/{voicemailID} | Update Voicemail Box



## v1AccountAccountIDVoicemailGet

> ServiceDocsVoicemailGetAll v1AccountAccountIDVoicemailGet(accountID, opts)

Get Voicemail Box List

List all voicemail boxes in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDVoicemailGet(accountID, opts, (error, data, response) => {
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

[**ServiceDocsVoicemailGetAll**](ServiceDocsVoicemailGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailPost

> ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailPost(accountID, voicemail)

Create Voicemail Box

Create a voicemail box for receiving and storing voicemail messages.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | account ID, 32 alphanumeric
let voicemail = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPVoicemailAddEditData(); // ServiceVOIPVoicemailAddEditData | voicemail payload fields
apiInstance.v1AccountAccountIDVoicemailPost(accountID, voicemail, (error, data, response) => {
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
 **accountID** | **String**| account ID, 32 alphanumeric | 
 **voicemail** | [**ServiceVOIPVoicemailAddEditData**](ServiceVOIPVoicemailAddEditData.md)| voicemail payload fields | 

### Return type

[**ServiceDocsVoicemailGetSingle**](ServiceDocsVoicemailGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDDelete

> ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDDelete(accountID, voicemailID)

Delete Voicemail Box

Delete a voicemail box in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
apiInstance.v1AccountAccountIDVoicemailVoicemailIDDelete(accountID, voicemailID, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 

### Return type

[**ServiceDocsVoicemailGetSingle**](ServiceDocsVoicemailGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDGet

> ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDGet(accountID, voicemailID)

Get Voicemail Box Details

Get information about a single voicemail box.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
apiInstance.v1AccountAccountIDVoicemailVoicemailIDGet(accountID, voicemailID, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 

### Return type

[**ServiceDocsVoicemailGetSingle**](ServiceDocsVoicemailGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessageGet

> ServiceDocsVoicemailMessageGetAll v1AccountAccountIDVoicemailVoicemailIDMessageGet(accountID, voicemailID, opts)

Get Voicemail Message List

Get a list of voicemail messages from an account&#39;s voicemail box.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | voicemail ID, 32 alpha numeric
let opts = {
  'startKey': "startKey_example", // String | start_key for pagination that was returned as next_start_key from your previous call
  'pageSize': 56 // Number | number of records to return, range 1 to 50
};
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageGet(accountID, voicemailID, opts, (error, data, response) => {
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
 **voicemailID** | **String**| voicemail ID, 32 alpha numeric | 
 **startKey** | **String**| start_key for pagination that was returned as next_start_key from your previous call | [optional] 
 **pageSize** | **Number**| number of records to return, range 1 to 50 | [optional] 

### Return type

[**ServiceDocsVoicemailMessageGetAll**](ServiceDocsVoicemailMessageGetAll.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete

> ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete(accountID, voicemailID, messageID)

Delete Voicemail Message

Delete a voicemail message from a voicemail box in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
let messageID = "messageID_example"; // String | message ID, 32 alpha numeric
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDDelete(accountID, voicemailID, messageID, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 
 **messageID** | **String**| message ID, 32 alpha numeric | 

### Return type

[**ServiceDocsVoicemailMessageGetSingle**](ServiceDocsVoicemailMessageGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet

> ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet(accountID, voicemailID, messageID)

Get Voicemail Message Details

Retrieve the container details of an individual voicemail message. This includes a reference to the audio file, but not the message itself.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
let messageID = "messageID_example"; // String | Message ID, 39 (yyyymm-<32 id>)
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDGet(accountID, voicemailID, messageID, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 
 **messageID** | **String**| Message ID, 39 (yyyymm-&lt;32 id&gt;) | 

### Return type

[**ServiceDocsVoicemailMessageGetSingle**](ServiceDocsVoicemailMessageGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut

> ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut(accountID, voicemailID, messageID, reqBody)

Update Voicemail Message

Copy or move a voicemail message to a different folder in the same voicemail box or move the message to a separate voicemail box.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
let messageID = "messageID_example"; // String | Message ID, 39 (yyyymm-<32 id>)
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPVoicemailMessageChange(); // ServiceVOIPVoicemailMessageChange | payload fields
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDPut(accountID, voicemailID, messageID, reqBody, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 
 **messageID** | **String**| Message ID, 39 (yyyymm-&lt;32 id&gt;) | 
 **reqBody** | [**ServiceVOIPVoicemailMessageChange**](ServiceVOIPVoicemailMessageChange.md)| payload fields | 

### Return type

[**ServiceDocsVoicemailMessageGetSingle**](ServiceDocsVoicemailMessageGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet

> File v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet(accountID, voicemailID, messageID)

Get Voicemail Message File

Get the original audio content of a specific voicemail message identified by its unique ID within an account&#39;s voicemail box. URL Param \&quot;voicemailID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific voicemail box. URL Param \&quot;messageID\&quot; is a unique 32-character alphanumeric identifier assigned by the system, which refers to a specific message within a voicemail box.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, unique 32-character alphanumeric identifier
let voicemailID = "voicemailID_example"; // String | Voicemail Box ID, unique 32-character alphanumeric identifier
let messageID = "messageID_example"; // String | Message ID, unique 32-character alphanumeric identifier
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawGet(accountID, voicemailID, messageID, (error, data, response) => {
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
 **accountID** | **String**| Account ID, unique 32-character alphanumeric identifier | 
 **voicemailID** | **String**| Voicemail Box ID, unique 32-character alphanumeric identifier | 
 **messageID** | **String**| Message ID, unique 32-character alphanumeric identifier | 

### Return type

**File**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/octet-stream


## v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost

> {String: Object} v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost(accountID, voicemailID, messageID, file)

Add Voicemail Message File

Associate an audio recording file with the voicemail to fully complete the message.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alphanumeric characters
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alphanumeric characters
let messageID = "messageID_example"; // String | Message ID, 32 alphanumeric characters
let file = "/path/to/file"; // File | Audio file to upload
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessageMessageIDRawPost(accountID, voicemailID, messageID, file, (error, data, response) => {
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
 **accountID** | **String**| Account ID, 32 alphanumeric characters | 
 **voicemailID** | **String**| Voicemail ID, 32 alphanumeric characters | 
 **messageID** | **String**| Message ID, 32 alphanumeric characters | 
 **file** | **File**| Audio file to upload | 

### Return type

**{String: Object}**

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDMessagePost

> ServiceDocsVoicemailMessageGetSingle v1AccountAccountIDVoicemailVoicemailIDMessagePost(accountID, voicemailID, message)

Create Voicemail Message

Create the container information for a recorded voicemail message in a voicemail box.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | account ID, 32 alphanumeric
let voicemailID = "voicemailID_example"; // String | voicemail ID, 32 alphanumeric
let message = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPVoicemailMessageAddData(); // ServiceVOIPVoicemailMessageAddData | voicemail message payload fields
apiInstance.v1AccountAccountIDVoicemailVoicemailIDMessagePost(accountID, voicemailID, message, (error, data, response) => {
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
 **accountID** | **String**| account ID, 32 alphanumeric | 
 **voicemailID** | **String**| voicemail ID, 32 alphanumeric | 
 **message** | [**ServiceVOIPVoicemailMessageAddData**](ServiceVOIPVoicemailMessageAddData.md)| voicemail message payload fields | 

### Return type

[**ServiceDocsVoicemailMessageGetSingle**](ServiceDocsVoicemailMessageGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1AccountAccountIDVoicemailVoicemailIDPut

> ServiceDocsVoicemailGetSingle v1AccountAccountIDVoicemailVoicemailIDPut(accountID, voicemailID, reqBody)

Update Voicemail Box

Update the settings in an individual voicemail box, such as the owner, PIN, etc.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.VoicemailApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let voicemailID = "voicemailID_example"; // String | Voicemail ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPVoicemailAddEditData(); // ServiceVOIPVoicemailAddEditData | payload fields
apiInstance.v1AccountAccountIDVoicemailVoicemailIDPut(accountID, voicemailID, reqBody, (error, data, response) => {
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
 **voicemailID** | **String**| Voicemail ID, 32 alpha numeric | 
 **reqBody** | [**ServiceVOIPVoicemailAddEditData**](ServiceVOIPVoicemailAddEditData.md)| payload fields | 

### Return type

[**ServiceDocsVoicemailGetSingle**](ServiceDocsVoicemailGetSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

