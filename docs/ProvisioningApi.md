# WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1AccountAccountIDProvisionFilenameGet**](ProvisioningApi.md#v1AccountAccountIDProvisionFilenameGet) | **GET** /v1/account/{accountID}/provision/{filename} | Get Config File Details
[**v1ApBrandBrandFamilyFamilyGet**](ProvisioningApi.md#v1ApBrandBrandFamilyFamilyGet) | **GET** /v1/ap/brand/{brand}/family/{family} | Get Family Details
[**v1ApBrandBrandFamilyFamilyModelGet**](ProvisioningApi.md#v1ApBrandBrandFamilyFamilyModelGet) | **GET** /v1/ap/brand/{brand}/family/{family}/model | Get Model List
[**v1ApBrandBrandFamilyFamilyModelModelGet**](ProvisioningApi.md#v1ApBrandBrandFamilyFamilyModelModelGet) | **GET** /v1/ap/brand/{brand}/family/{family}/model/{model} | Get Model Details
[**v1ApBrandBrandFamilyFamilyModelModelTemplateGet**](ProvisioningApi.md#v1ApBrandBrandFamilyFamilyModelModelTemplateGet) | **GET** /v1/ap/brand/{brand}/family/{family}/model/{model}/template | Get Template List
[**v1ApBrandBrandFamilyFamilyModelModelTemplateTemplateGet**](ProvisioningApi.md#v1ApBrandBrandFamilyFamilyModelModelTemplateTemplateGet) | **GET** /v1/ap/brand/{brand}/family/{family}/model/{model}/template/{template} | Get Template Details
[**v1ApBrandBrandFamilyGet**](ProvisioningApi.md#v1ApBrandBrandFamilyGet) | **GET** /v1/ap/brand/{brand}/family | Get Family List
[**v1ApBrandBrandGet**](ProvisioningApi.md#v1ApBrandBrandGet) | **GET** /v1/ap/brand/{brand} | Get Brand Details
[**v1ApBrandGet**](ProvisioningApi.md#v1ApBrandGet) | **GET** /v1/ap/brand | Get Brand List
[**v1ApConfigfileGeneratePost**](ProvisioningApi.md#v1ApConfigfileGeneratePost) | **POST** /v1/ap/configfile/generate | Generate Config File



## v1AccountAccountIDProvisionFilenameGet

> File v1AccountAccountIDProvisionFilenameGet(accountID, filename)

Get Config File Details

Retrieve the configuration details (e.g., settings and parameters) for a device.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
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


## v1ApBrandBrandFamilyFamilyGet

> ProvisioningDocsDocsFamilyOutputSingle v1ApBrandBrandFamilyFamilyGet(brand, family)

Get Family Details

Retrieve a family&#39;s details by the randomly generated ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let family = "family_example"; // String | family
apiInstance.v1ApBrandBrandFamilyFamilyGet(brand, family, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **family** | **String**| family | 

### Return type

[**ProvisioningDocsDocsFamilyOutputSingle**](ProvisioningDocsDocsFamilyOutputSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandFamilyFamilyModelGet

> ProvisioningDocsDocsModelOutput v1ApBrandBrandFamilyFamilyModelGet(brand, family, opts)

Get Model List

Retrieve a list of all models within a family for a brand (e.g., Yealink and Polycom).

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let family = "family_example"; // String | family
let opts = {
  'modelName': "modelName_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.v1ApBrandBrandFamilyFamilyModelGet(brand, family, opts, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **family** | **String**| family | 
 **modelName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**ProvisioningDocsDocsModelOutput**](ProvisioningDocsDocsModelOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandFamilyFamilyModelModelGet

> ProvisioningDocsDocsModelOutputSingle v1ApBrandBrandFamilyFamilyModelModelGet(brand, family, model)

Get Model Details

Retrieve a model&#39;s details by the randomly generated ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let family = "family_example"; // String | family
let model = "model_example"; // String | model
apiInstance.v1ApBrandBrandFamilyFamilyModelModelGet(brand, family, model, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **family** | **String**| family | 
 **model** | **String**| model | 

### Return type

[**ProvisioningDocsDocsModelOutputSingle**](ProvisioningDocsDocsModelOutputSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandFamilyFamilyModelModelTemplateGet

> ProvisioningDocsDocsTemplatesOutput v1ApBrandBrandFamilyFamilyModelModelTemplateGet(brand, family, model, opts)

Get Template List

Retrieve a list of all templates for a model within a brand (e.g., Yealink and Polycom).

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let family = "family_example"; // String | family
let model = "model_example"; // String | model
let opts = {
  'firmware': "firmware_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'status': "status_example", // String | 
  'templateName': "templateName_example" // String | 
};
apiInstance.v1ApBrandBrandFamilyFamilyModelModelTemplateGet(brand, family, model, opts, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **family** | **String**| family | 
 **model** | **String**| model | 
 **firmware** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 
 **templateName** | **String**|  | [optional] 

### Return type

[**ProvisioningDocsDocsTemplatesOutput**](ProvisioningDocsDocsTemplatesOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandFamilyFamilyModelModelTemplateTemplateGet

> ProvisioningDocsDocsTemplateOutputSingle v1ApBrandBrandFamilyFamilyModelModelTemplateTemplateGet(brand, family, model, template)

Get Template Details

Retrieve details about a template for a model by the randomly generated ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let family = "family_example"; // String | family
let model = "model_example"; // String | model
let template = "template_example"; // String | template
apiInstance.v1ApBrandBrandFamilyFamilyModelModelTemplateTemplateGet(brand, family, model, template, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **family** | **String**| family | 
 **model** | **String**| model | 
 **template** | **String**| template | 

### Return type

[**ProvisioningDocsDocsTemplateOutputSingle**](ProvisioningDocsDocsTemplateOutputSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandFamilyGet

> ProvisioningDocsDocsFamilyOutput v1ApBrandBrandFamilyGet(brand, opts)

Get Family List

Retrieve a list of all families for a brand (e.g., Yealink and Polycom).

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand
let opts = {
  'familyName': "familyName_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.v1ApBrandBrandFamilyGet(brand, opts, (error, data, response) => {
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
 **brand** | **String**| brand | 
 **familyName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**ProvisioningDocsDocsFamilyOutput**](ProvisioningDocsDocsFamilyOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandBrandGet

> ProvisioningDocsDocsBrandOutputSingle v1ApBrandBrandGet(brand)

Get Brand Details

Retrieve a brand&#39;s details by the randomly generated ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let brand = "brand_example"; // String | brand id to retrieve a brand
apiInstance.v1ApBrandBrandGet(brand, (error, data, response) => {
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
 **brand** | **String**| brand id to retrieve a brand | 

### Return type

[**ProvisioningDocsDocsBrandOutputSingle**](ProvisioningDocsDocsBrandOutputSingle.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApBrandGet

> ProvisioningDocsDocsBrandsOutput v1ApBrandGet(opts)

Get Brand List

Retrieve a list of all brands (e.g., Yealink and Polycom) by client.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let opts = {
  'brandName': "brandName_example", // String | 
  'pageSize': 56, // Number | 
  'startKey': "startKey_example", // String | 
  'status': "status_example" // String | 
};
apiInstance.v1ApBrandGet(opts, (error, data, response) => {
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
 **brandName** | **String**|  | [optional] 
 **pageSize** | **Number**|  | [optional] 
 **startKey** | **String**|  | [optional] 
 **status** | **String**|  | [optional] 

### Return type

[**ProvisioningDocsDocsBrandsOutput**](ProvisioningDocsDocsBrandsOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ApConfigfileGeneratePost

> ProvisioningDocsDocsConfigFileOutput v1ApConfigfileGeneratePost(params)

Generate Config File

Generate a configuration file that includes a list of parameters passed to the specified template_id in the request payload, with populated values returned in the response.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';
let defaultClient = WhiteLabelCommunicationsCPaasApiDocumentation.ApiClient.instance;
// Configure API key authorization: BearerAuth
let BearerAuth = defaultClient.authentications['BearerAuth'];
BearerAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerAuth.apiKeyPrefix = 'Token';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.ProvisioningApi();
let params = new WhiteLabelCommunicationsCPaasApiDocumentation.ModelsGenerateConfigFileRequest(); // ModelsGenerateConfigFileRequest | body params to generate config file
apiInstance.v1ApConfigfileGeneratePost(params, (error, data, response) => {
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
 **params** | [**ModelsGenerateConfigFileRequest**](ModelsGenerateConfigFileRequest.md)| body params to generate config file | 

### Return type

[**ProvisioningDocsDocsConfigFileOutput**](ProvisioningDocsDocsConfigFileOutput.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

