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

/**
 * ServiceAPIResponseStatusCodeOnly
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceAPIResponseStatusCodeOnly {
  @.annotation.Nullable
  private String requestId;

  @.annotation.Nullable
  private Number statusCode;

  public ServiceAPIResponseStatusCodeOnly() {
  }

  public ServiceAPIResponseStatusCodeOnly requestId(@.annotation.Nullable String requestId) {
    
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

  public ServiceAPIResponseStatusCodeOnly statusCode(@.annotation.Nullable Number statusCode) {
    
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
    ServiceAPIResponseStatusCodeOnly serviceAPIResponseStatusCodeOnly = (ServiceAPIResponseStatusCodeOnly) o;
    return Objects.equals(this.requestId, serviceAPIResponseStatusCodeOnly.requestId) &&
        Objects.equals(this.statusCode, serviceAPIResponseStatusCodeOnly.statusCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(requestId, statusCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceAPIResponseStatusCodeOnly {\n");
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

