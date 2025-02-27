# WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi

All URIs are relative to *http://api.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1SmsAccountAccountIDCampaignCampaignIDImportGet**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDImportGet) | **GET** /v1/sms/account/{accountID}/campaign/{campaignID}/import | 
[**v1SmsAccountAccountIDCampaignCampaignIDImportPost**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDImportPost) | **POST** /v1/sms/account/{accountID}/campaign/{campaignID}/import | 
[**v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet) | **GET** /v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber | 
[**v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut**](SMSApi.md#v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut) | **PUT** /v1/sms/account/{accountID}/campaign/{campaignID}/phonenumber | 
[**v1SmsAccountAccountIDCampaignImportGet**](SMSApi.md#v1SmsAccountAccountIDCampaignImportGet) | **GET** /v1/sms/account/{accountID}/campaign/import | 



## v1SmsAccountAccountIDCampaignCampaignIDImportGet

> ServiceDocsCampaignImportOutput v1SmsAccountAccountIDCampaignCampaignIDImportGet(accountID, campaignID)



Get details about a single imported campaign in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let campaignID = "campaignID_example"; // String | Campaign ID
apiInstance.v1SmsAccountAccountIDCampaignCampaignIDImportGet(accountID, campaignID, (error, data, response) => {
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
 **campaignID** | **String**| Campaign ID | 

### Return type

[**ServiceDocsCampaignImportOutput**](ServiceDocsCampaignImportOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SmsAccountAccountIDCampaignCampaignIDImportPost

> ServiceDocsCampaignImportOutput v1SmsAccountAccountIDCampaignCampaignIDImportPost(accountID, campaignID)



Import campaign

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let campaignID = "campaignID_example"; // String | Campaign ID
apiInstance.v1SmsAccountAccountIDCampaignCampaignIDImportPost(accountID, campaignID, (error, data, response) => {
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
 **campaignID** | **String**| Campaign ID | 

### Return type

[**ServiceDocsCampaignImportOutput**](ServiceDocsCampaignImportOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet

> ServiceDocsCampaignPhoneNumberOutput v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet(accountID, campaignID, opts)



Get telephone numbers associated with a campaign.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let campaignID = "campaignID_example"; // String | Campaign ID
let opts = {
  'pageNum': 3.4, // Number | Page number
  'pageSize': 3.4 // Number | Page size
};
apiInstance.v1SmsAccountAccountIDCampaignCampaignIDPhonenumberGet(accountID, campaignID, opts, (error, data, response) => {
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
 **campaignID** | **String**| Campaign ID | 
 **pageNum** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Page size | [optional] 

### Return type

[**ServiceDocsCampaignPhoneNumberOutput**](ServiceDocsCampaignPhoneNumberOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut

> ServiceDocsCampaignTagDetagPhonenumbersOutput v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut(accountID, campaignID, reqBody)



Associate or dissociate telephone numbers with a campaign.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let campaignID = "campaignID_example"; // String | Campaign ID, 32 alpha numeric
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceCampaignTagDetagPhonenumbers(); // ServiceCampaignTagDetagPhonenumbers | payload fields
apiInstance.v1SmsAccountAccountIDCampaignCampaignIDPhonenumberPut(accountID, campaignID, reqBody, (error, data, response) => {
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
 **campaignID** | **String**| Campaign ID, 32 alpha numeric | 
 **reqBody** | [**ServiceCampaignTagDetagPhonenumbers**](ServiceCampaignTagDetagPhonenumbers.md)| payload fields | 

### Return type

[**ServiceDocsCampaignTagDetagPhonenumbersOutput**](ServiceDocsCampaignTagDetagPhonenumbersOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1SmsAccountAccountIDCampaignImportGet

> ServiceDocsCampaignImportedGetAllOutput v1SmsAccountAccountIDCampaignImportGet(accountID, opts)



Get a list of all imported campaigns in an account.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.SMSApi();
let accountID = "accountID_example"; // String | Account ID, 32 alpha numeric
let opts = {
  'pageNum': 3.4, // Number | Page number
  'pageSize': 3.4 // Number | Page size
};
apiInstance.v1SmsAccountAccountIDCampaignImportGet(accountID, opts, (error, data, response) => {
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
 **pageNum** | **Number**| Page number | [optional] 
 **pageSize** | **Number**| Page size | [optional] 

### Return type

[**ServiceDocsCampaignImportedGetAllOutput**](ServiceDocsCampaignImportedGetAllOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

