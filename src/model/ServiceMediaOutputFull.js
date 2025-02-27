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
import ServiceTTS;

/**
 * ServiceMediaOutputFull
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceMediaOutputFull {
  @.annotation.Nullable
  private Number contentLength;

  @.annotation.Nullable
  private String contentType;

  @.annotation.Nullable
  private String description;

  @.annotation.Nullable
  private String id;

  @.annotation.Nullable
  private String language;

  @.annotation.Nullable
  private String mediaSource;

  @.annotation.Nullable
  private String name;

  @.annotation.Nullable
  private Boolean streamable;

  @.annotation.Nullable
  private ServiceTTS tts;

  public ServiceMediaOutputFull() {
  }

  public ServiceMediaOutputFull contentLength(@.annotation.Nullable Number contentLength) {
    
    this.contentLength = contentLength;
    return this;
  }

  /**
   * Get contentLength
   * @return contentLength
   */
  @.annotation.Nullable

  public Number getContentLength() {
    return contentLength;
  }


  public void setContentLength(@.annotation.Nullable Number contentLength) {
    this.contentLength = contentLength;
  }

  public ServiceMediaOutputFull contentType(@.annotation.Nullable String contentType) {
    
    this.contentType = contentType;
    return this;
  }

  /**
   * Get contentType
   * @return contentType
   */
  @.annotation.Nullable

  public String getContentType() {
    return contentType;
  }


  public void setContentType(@.annotation.Nullable String contentType) {
    this.contentType = contentType;
  }

  public ServiceMediaOutputFull description(@.annotation.Nullable String description) {
    
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  @.annotation.Nullable

  public String getDescription() {
    return description;
  }


  public void setDescription(@.annotation.Nullable String description) {
    this.description = description;
  }

  public ServiceMediaOutputFull id(@.annotation.Nullable String id) {
    
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

  public ServiceMediaOutputFull language(@.annotation.Nullable String language) {
    
    this.language = language;
    return this;
  }

  /**
   * Get language
   * @return language
   */
  @.annotation.Nullable

  public String getLanguage() {
    return language;
  }


  public void setLanguage(@.annotation.Nullable String language) {
    this.language = language;
  }

  public ServiceMediaOutputFull mediaSource(@.annotation.Nullable String mediaSource) {
    
    this.mediaSource = mediaSource;
    return this;
  }

  /**
   * Get mediaSource
   * @return mediaSource
   */
  @.annotation.Nullable

  public String getMediaSource() {
    return mediaSource;
  }


  public void setMediaSource(@.annotation.Nullable String mediaSource) {
    this.mediaSource = mediaSource;
  }

  public ServiceMediaOutputFull name(@.annotation.Nullable String name) {
    
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

  public ServiceMediaOutputFull streamable(@.annotation.Nullable Boolean streamable) {
    
    this.streamable = streamable;
    return this;
  }

  /**
   * Get streamable
   * @return streamable
   */
  @.annotation.Nullable

  public Boolean getStreamable() {
    return streamable;
  }


  public void setStreamable(@.annotation.Nullable Boolean streamable) {
    this.streamable = streamable;
  }

  public ServiceMediaOutputFull tts(@.annotation.Nullable ServiceTTS tts) {
    
    this.tts = tts;
    return this;
  }

  /**
   * Get tts
   * @return tts
   */
  @.annotation.Nullable

  public ServiceTTS getTts() {
    return tts;
  }


  public void setTts(@.annotation.Nullable ServiceTTS tts) {
    this.tts = tts;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceMediaOutputFull serviceMediaOutputFull = (ServiceMediaOutputFull) o;
    return Objects.equals(this.contentLength, serviceMediaOutputFull.contentLength) &&
        Objects.equals(this.contentType, serviceMediaOutputFull.contentType) &&
        Objects.equals(this.description, serviceMediaOutputFull.description) &&
        Objects.equals(this.id, serviceMediaOutputFull.id) &&
        Objects.equals(this.language, serviceMediaOutputFull.language) &&
        Objects.equals(this.mediaSource, serviceMediaOutputFull.mediaSource) &&
        Objects.equals(this.name, serviceMediaOutputFull.name) &&
        Objects.equals(this.streamable, serviceMediaOutputFull.streamable) &&
        Objects.equals(this.tts, serviceMediaOutputFull.tts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(contentLength, contentType, description, id, language, mediaSource, name, streamable, tts);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceMediaOutputFull {\n");
    sb.append("    contentLength: ").append(toIndentedString(contentLength)).append("\n");
    sb.append("    contentType: ").append(toIndentedString(contentType)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    language: ").append(toIndentedString(language)).append("\n");
    sb.append("    mediaSource: ").append(toIndentedString(mediaSource)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    streamable: ").append(toIndentedString(streamable)).append("\n");
    sb.append("    tts: ").append(toIndentedString(tts)).append("\n");
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

