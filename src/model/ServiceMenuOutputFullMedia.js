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
 * ServiceMenuOutputFullMedia
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceMenuOutputFullMedia {
  @.annotation.Nullable
  private String greeting;

  @.annotation.Nullable
  private Object invalidMedia;

  @.annotation.Nullable
  private Object transferMedia;

  public ServiceMenuOutputFullMedia() {
  }

  public ServiceMenuOutputFullMedia greeting(@.annotation.Nullable String greeting) {
    
    this.greeting = greeting;
    return this;
  }

  /**
   * Get greeting
   * @return greeting
   */
  @.annotation.Nullable

  public String getGreeting() {
    return greeting;
  }


  public void setGreeting(@.annotation.Nullable String greeting) {
    this.greeting = greeting;
  }

  public ServiceMenuOutputFullMedia invalidMedia(@.annotation.Nullable Object invalidMedia) {
    
    this.invalidMedia = invalidMedia;
    return this;
  }

  /**
   * Get invalidMedia
   * @return invalidMedia
   */
  @.annotation.Nullable

  public Object getInvalidMedia() {
    return invalidMedia;
  }


  public void setInvalidMedia(@.annotation.Nullable Object invalidMedia) {
    this.invalidMedia = invalidMedia;
  }

  public ServiceMenuOutputFullMedia transferMedia(@.annotation.Nullable Object transferMedia) {
    
    this.transferMedia = transferMedia;
    return this;
  }

  /**
   * Get transferMedia
   * @return transferMedia
   */
  @.annotation.Nullable

  public Object getTransferMedia() {
    return transferMedia;
  }


  public void setTransferMedia(@.annotation.Nullable Object transferMedia) {
    this.transferMedia = transferMedia;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceMenuOutputFullMedia serviceMenuOutputFullMedia = (ServiceMenuOutputFullMedia) o;
    return Objects.equals(this.greeting, serviceMenuOutputFullMedia.greeting) &&
        Objects.equals(this.invalidMedia, serviceMenuOutputFullMedia.invalidMedia) &&
        Objects.equals(this.transferMedia, serviceMenuOutputFullMedia.transferMedia);
  }

  @Override
  public int hashCode() {
    return Objects.hash(greeting, invalidMedia, transferMedia);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceMenuOutputFullMedia {\n");
    sb.append("    greeting: ").append(toIndentedString(greeting)).append("\n");
    sb.append("    invalidMedia: ").append(toIndentedString(invalidMedia)).append("\n");
    sb.append("    transferMedia: ").append(toIndentedString(transferMedia)).append("\n");
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

