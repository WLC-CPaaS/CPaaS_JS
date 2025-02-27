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
import ServiceMenuOutputFullMedia;

/**
 * ServiceMenuOutputFull
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceMenuOutputFull {
  @.annotation.Nullable
  private String id;

  @.annotation.Nullable
  private ServiceMenuOutputFullMedia media;

  @.annotation.Nullable
  private String name;

  @.annotation.Nullable
  private Number timeout;

  public ServiceMenuOutputFull() {
  }

  public ServiceMenuOutputFull id(@.annotation.Nullable String id) {
    
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @.annotation.Nullable

  public String getId() {
    return id;
  }


  public void setId(@.annotation.Nullable String id) {
    this.id = id;
  }

  public ServiceMenuOutputFull media(@.annotation.Nullable ServiceMenuOutputFullMedia media) {
    
    this.media = media;
    return this;
  }

  /**
   * Get media
   * @return media
   */
  @.annotation.Nullable

  public ServiceMenuOutputFullMedia getMedia() {
    return media;
  }


  public void setMedia(@.annotation.Nullable ServiceMenuOutputFullMedia media) {
    this.media = media;
  }

  public ServiceMenuOutputFull name(@.annotation.Nullable String name) {
    
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @.annotation.Nullable

  public String getName() {
    return name;
  }


  public void setName(@.annotation.Nullable String name) {
    this.name = name;
  }

  public ServiceMenuOutputFull timeout(@.annotation.Nullable Number timeout) {
    
    this.timeout = timeout;
    return this;
  }

  /**
   * Get timeout
   * @return timeout
   */
  @.annotation.Nullable

  public Number getTimeout() {
    return timeout;
  }


  public void setTimeout(@.annotation.Nullable Number timeout) {
    this.timeout = timeout;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceMenuOutputFull serviceMenuOutputFull = (ServiceMenuOutputFull) o;
    return Objects.equals(this.id, serviceMenuOutputFull.id) &&
        Objects.equals(this.media, serviceMenuOutputFull.media) &&
        Objects.equals(this.name, serviceMenuOutputFull.name) &&
        Objects.equals(this.timeout, serviceMenuOutputFull.timeout);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, media, name, timeout);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceMenuOutputFull {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    media: ").append(toIndentedString(media)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    timeout: ").append(toIndentedString(timeout)).append("\n");
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

