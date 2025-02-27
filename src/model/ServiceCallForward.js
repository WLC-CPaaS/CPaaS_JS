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
 * ServiceCallForward
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceCallForward {
  @.annotation.Nullable
  private Boolean enabled;

  @.annotation.Nullable
  private String number;

  public ServiceCallForward() {
  }

  public ServiceCallForward enabled(@.annotation.Nullable Boolean enabled) {
    
    this.enabled = enabled;
    return this;
  }

  /**
   * Get enabled
   * @return enabled
   */
  @.annotation.Nullable

  public Boolean getEnabled() {
    return enabled;
  }


  public void setEnabled(@.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
  }

  public ServiceCallForward number(@.annotation.Nullable String number) {
    
    this.number = number;
    return this;
  }

  /**
   * Get number
   * @return number
   */
  @.annotation.Nullable

  public String getNumber() {
    return number;
  }


  public void setNumber(@.annotation.Nullable String number) {
    this.number = number;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceCallForward serviceCallForward = (ServiceCallForward) o;
    return Objects.equals(this.enabled, serviceCallForward.enabled) &&
        Objects.equals(this.number, serviceCallForward.number);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enabled, number);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceCallForward {\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
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

