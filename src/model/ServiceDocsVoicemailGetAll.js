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
import ServiceVoicemailOutputShort;

/**
 * ServiceDocsVoicemailGetAll
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceDocsVoicemailGetAll {
  @.annotation.Nullable
  private ServiceVoicemailOutputShort data;

  @.annotation.Nullable
  private String nextStartKey;

  @.annotation.Nullable
  private Number pageSize;

  @.annotation.Nullable
  private String requestId;

  @.annotation.Nullable
  private String startKey;

  @.annotation.Nullable
  private Number statusCode;

  public ServiceDocsVoicemailGetAll() {
  }

  public ServiceDocsVoicemailGetAll data(@.annotation.Nullable ServiceVoicemailOutputShort data) {
    
    this.data = data;
    return this;
  }

  /**
   * Get data
   * @return data
   */
  @.annotation.Nullable

  public ServiceVoicemailOutputShort getData() {
    return data;
  }


  public void setData(@.annotation.Nullable ServiceVoicemailOutputShort data) {
    this.data = data;
  }

  public ServiceDocsVoicemailGetAll nextStartKey(@.annotation.Nullable String nextStartKey) {
    
    this.nextStartKey = nextStartKey;
    return this;
  }

  /**
   * Get nextStartKey
   * @return nextStartKey
   */
  @.annotation.Nullable

  public String getNextStartKey() {
    return nextStartKey;
  }


  public void setNextStartKey(@.annotation.Nullable String nextStartKey) {
    this.nextStartKey = nextStartKey;
  }

  public ServiceDocsVoicemailGetAll pageSize(@.annotation.Nullable Number pageSize) {
    
    this.pageSize = pageSize;
    return this;
  }

  /**
   * Get pageSize
   * @return pageSize
   */
  @.annotation.Nullable

  public Number getPageSize() {
    return pageSize;
  }


  public void setPageSize(@.annotation.Nullable Number pageSize) {
    this.pageSize = pageSize;
  }

  public ServiceDocsVoicemailGetAll requestId(@.annotation.Nullable String requestId) {
    
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

  public ServiceDocsVoicemailGetAll startKey(@.annotation.Nullable String startKey) {
    
    this.startKey = startKey;
    return this;
  }

  /**
   * Get startKey
   * @return startKey
   */
  @.annotation.Nullable

  public String getStartKey() {
    return startKey;
  }


  public void setStartKey(@.annotation.Nullable String startKey) {
    this.startKey = startKey;
  }

  public ServiceDocsVoicemailGetAll statusCode(@.annotation.Nullable Number statusCode) {
    
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
    ServiceDocsVoicemailGetAll serviceDocsVoicemailGetAll = (ServiceDocsVoicemailGetAll) o;
    return Objects.equals(this.data, serviceDocsVoicemailGetAll.data) &&
        Objects.equals(this.nextStartKey, serviceDocsVoicemailGetAll.nextStartKey) &&
        Objects.equals(this.pageSize, serviceDocsVoicemailGetAll.pageSize) &&
        Objects.equals(this.requestId, serviceDocsVoicemailGetAll.requestId) &&
        Objects.equals(this.startKey, serviceDocsVoicemailGetAll.startKey) &&
        Objects.equals(this.statusCode, serviceDocsVoicemailGetAll.statusCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, nextStartKey, pageSize, requestId, startKey, statusCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceDocsVoicemailGetAll {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    nextStartKey: ").append(toIndentedString(nextStartKey)).append("\n");
    sb.append("    pageSize: ").append(toIndentedString(pageSize)).append("\n");
    sb.append("    requestId: ").append(toIndentedString(requestId)).append("\n");
    sb.append("    startKey: ").append(toIndentedString(startKey)).append("\n");
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

