# WhiteLabelCommunicationsCPaasApiDocumentation.E911Api

All URIs are relative to *http://api.beta.cpaaslabs.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1E911Get**](E911Api.md#v1E911Get) | **GET** /v1/e911 | Get E911 List
[**v1E911LocationLocationIDActivatePut**](E911Api.md#v1E911LocationLocationIDActivatePut) | **PUT** /v1/e911/location/{locationID}/activate | Activate E911 Location
[**v1E911LocationLocationIDDelete**](E911Api.md#v1E911LocationLocationIDDelete) | **DELETE** /v1/e911/location/{locationID} | Delete E911 Location
[**v1E911LocationValidatePut**](E911Api.md#v1E911LocationValidatePut) | **PUT** /v1/e911/location/validate | Validate a Location
[**v1E911PhoneNumberDelete**](E911Api.md#v1E911PhoneNumberDelete) | **DELETE** /v1/e911/{phoneNumber} | Delete E911 Phone Number
[**v1E911PhoneNumberLocationActiveGet**](E911Api.md#v1E911PhoneNumberLocationActiveGet) | **GET** /v1/e911/{phoneNumber}/location/active | Get Actvie Location for a Phone Number
[**v1E911PhoneNumberLocationGet**](E911Api.md#v1E911PhoneNumberLocationGet) | **GET** /v1/e911/{phoneNumber}/location | Get Location List for Phone Number
[**v1E911Post**](E911Api.md#v1E911Post) | **POST** /v1/e911 | Create an E911 Location



## v1E911Get

> ServiceDocsE911URIsApiOutput v1E911Get()

Get E911 List

Obtain e911 URIs associated with the provided account ID.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
apiInstance.v1E911Get((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ServiceDocsE911URIsApiOutput**](ServiceDocsE911URIsApiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911LocationLocationIDActivatePut

> ServiceDocsE911ActiveLocationOutput v1E911LocationLocationIDActivatePut(locationID)

Activate E911 Location

Edit the provision location.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let locationID = "locationID_example"; // String | Location ID
apiInstance.v1E911LocationLocationIDActivatePut(locationID, (error, data, response) => {
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
 **locationID** | **String**| Location ID | 

### Return type

[**ServiceDocsE911ActiveLocationOutput**](ServiceDocsE911ActiveLocationOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911LocationLocationIDDelete

> ServiceDocsE911RemoveLocationOutput v1E911LocationLocationIDDelete(locationID)

Delete E911 Location

Remove the location.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let locationID = "locationID_example"; // String | Location ID
apiInstance.v1E911LocationLocationIDDelete(locationID, (error, data, response) => {
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
 **locationID** | **String**| Location ID | 

### Return type

[**ServiceDocsE911RemoveLocationOutput**](ServiceDocsE911RemoveLocationOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911LocationValidatePut

> ServiceDocsE911ValidateLocationOutput v1E911LocationValidatePut(reqBody)

Validate a Location

Validate the location details.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911ValidateLocationInput(); // ServiceE911ValidateLocationInput | location details
apiInstance.v1E911LocationValidatePut(reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceE911ValidateLocationInput**](ServiceE911ValidateLocationInput.md)| location details | 

### Return type

[**ServiceDocsE911ValidateLocationOutput**](ServiceDocsE911ValidateLocationOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1E911PhoneNumberDelete

> ServiceDocsE911RemoveURIApiOutput v1E911PhoneNumberDelete(phoneNumber)

Delete E911 Phone Number

Delete the e911 URI connected with the account URI.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let phoneNumber = "phoneNumber_example"; // String | Phone Number
apiInstance.v1E911PhoneNumberDelete(phoneNumber, (error, data, response) => {
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
 **phoneNumber** | **String**| Phone Number | 

### Return type

[**ServiceDocsE911RemoveURIApiOutput**](ServiceDocsE911RemoveURIApiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911PhoneNumberLocationActiveGet

> ServiceDocsE911ActiveLocationURIApiOutput v1E911PhoneNumberLocationActiveGet(phoneNumber)

Get Actvie Location for a Phone Number

Get the e911 location connected with the URI.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let phoneNumber = "phoneNumber_example"; // String | Phone Number
apiInstance.v1E911PhoneNumberLocationActiveGet(phoneNumber, (error, data, response) => {
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
 **phoneNumber** | **String**| Phone Number | 

### Return type

[**ServiceDocsE911ActiveLocationURIApiOutput**](ServiceDocsE911ActiveLocationURIApiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911PhoneNumberLocationGet

> ServiceDocsE911LocationsURIApiOutput v1E911PhoneNumberLocationGet(phoneNumber)

Get Location List for Phone Number

Access a list of the e911 locations associated with the provided URI.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let phoneNumber = "phoneNumber_example"; // String | Phone Number
apiInstance.v1E911PhoneNumberLocationGet(phoneNumber, (error, data, response) => {
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
 **phoneNumber** | **String**| Phone Number | 

### Return type

[**ServiceDocsE911LocationsURIApiOutput**](ServiceDocsE911LocationsURIApiOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1E911Post

> ServiceDocsE911AddLocationOutput v1E911Post(reqBody)

Create an E911 Location

Enter new location details.

### Example

```javascript
import WhiteLabelCommunicationsCPaasApiDocumentation from 'white_label_communications_c_paas_api_documentation';

let apiInstance = new WhiteLabelCommunicationsCPaasApiDocumentation.E911Api();
let reqBody = new WhiteLabelCommunicationsCPaasApiDocumentation.ServiceE911AddLocationInput(); // ServiceE911AddLocationInput | location details
apiInstance.v1E911Post(reqBody, (error, data, response) => {
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
 **reqBody** | [**ServiceE911AddLocationInput**](ServiceE911AddLocationInput.md)| location details | 

### Return type

[**ServiceDocsE911AddLocationOutput**](ServiceDocsE911AddLocationOutput.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

