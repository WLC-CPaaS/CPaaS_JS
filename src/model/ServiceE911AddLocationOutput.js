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
import ServiceE911LocationOutput;

/**
 * ServiceE911AddLocationOutput
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceE911AddLocationOutput {
  @.annotation.Nullable
  private ServiceE911LocationOutput location;

  public ServiceE911AddLocationOutput() {
  }

  public ServiceE911AddLocationOutput location(@.annotation.Nullable ServiceE911LocationOutput location) {
    
    this.location = location;
    return this;
  }

  /**
   * Get location
   * @return location
   */
  @.annotation.Nullable

  public ServiceE911LocationOutput getLocation() {
    return location;
  }


  public void setLocation(@.annotation.Nullable ServiceE911LocationOutput location) {
    this.location = location;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceE911AddLocationOutput serviceE911AddLocationOutput = (ServiceE911AddLocationOutput) o;
    return Objects.equals(this.location, serviceE911AddLocationOutput.location);
  }

  @Override
  public int hashCode() {
    return Objects.hash(location);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceE911AddLocationOutput {\n");
    sb.append("    location: ").append(toIndentedString(location)).append("\n");
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

