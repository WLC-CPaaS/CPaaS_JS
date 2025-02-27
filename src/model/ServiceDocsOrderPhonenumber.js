/*
 * White Label Communications CPaas API Documentation
 * A CPaaS platform API
 *
 * The version of the OpenAPI document: 1.1
 * Contact: support@whitelabelcomm.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package model;

import java.util.Objects;
import java.util.Arrays;
import ServicePhoneNumberResult;

/**
 * ServiceDocsOrderPhonenumber
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceDocsOrderPhonenumber {
  @.annotation.Nullable
  private [ServicePhoneNumberResult] data;

  @.annotation.Nullable
  private String requestId;

  @.annotation.Nullable
  private Number statusCode;

  public ServiceDocsOrderPhonenumber() {
  }

  public ServiceDocsOrderPhonenumber data(@.annotation.Nullable [ServicePhoneNumberResult] data) {
    
    this.data = data;
    return this;
  }

  public ServiceDocsOrderPhonenumber addDataItem(ServicePhoneNumberResult dataItem) {
    if (this.data == null) {
      this.data = new ArrayList<>();
    }
    this.data.add(dataItem);
    return this;
  }

  /**
   * Get data
   * @return data
   */
  @.annotation.Nullable

  public [ServicePhoneNumberResult] getData() {
    return data;
  }


  public void setData(@.annotation.Nullable [ServicePhoneNumberResult] data) {
    this.data = data;
  }

  public ServiceDocsOrderPhonenumber requestId(@.annotation.Nullable String requestId) {
    
    this.requestId = requestId;
    return this;
  }

  /**
   * Get requestId
   * @return requestId
   */
  @.annotation.Nullable

  public String getRequestId() {
    return requestId;
  }


  public void setRequestId(@.annotation.Nullable String requestId) {
    this.requestId = requestId;
  }

  public ServiceDocsOrderPhonenumber statusCode(@.annotation.Nullable Number statusCode) {
    
    this.statusCode = statusCode;
    return this;
  }

  /**
   * Get statusCode
   * @return statusCode
   */
  @.annotation.Nullable

  public Number getStatusCode() {
    return statusCode;
  }


  public void setStatusCode(@.annotation.Nullable Number statusCode) {
    this.statusCode = statusCode;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceDocsOrderPhonenumber serviceDocsOrderPhonenumber = (ServiceDocsOrderPhonenumber) o;
    return Objects.equals(this.data, serviceDocsOrderPhonenumber.data) &&
        Objects.equals(this.requestId, serviceDocsOrderPhonenumber.requestId) &&
        Objects.equals(this.statusCode, serviceDocsOrderPhonenumber.statusCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, requestId, statusCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceDocsOrderPhonenumber {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    statusCode: ").append(toIndentedString(statusCode)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

