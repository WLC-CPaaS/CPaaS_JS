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
 * ServiceVOIPMediaAddEditData
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceVOIPMediaAddEditData {
  @.annotation.Nullable
  private String description;

  /**
   * Gets or Sets mediaSource
   */
  public enum MediaSourceEnum {
    upload(String.valueOf("upload")),
    
    recording(String.valueOf("recording")),
    
    tts(String.valueOf("tts"));

    private String value;

    MediaSourceEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static MediaSourceEnum fromValue(String value) {
      for (MediaSourceEnum b : MediaSourceEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  @.annotation.Nullable
  private MediaSourceEnum mediaSource;

  @.annotation.Nonnull
  private String name;

  @.annotation.Nullable
  private ServiceTTS tts;

  public ServiceVOIPMediaAddEditData() {
  }

  public ServiceVOIPMediaAddEditData description(@.annotation.Nullable String description) {
    
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

  public ServiceVOIPMediaAddEditData mediaSource(@.annotation.Nullable MediaSourceEnum mediaSource) {
    
    this.mediaSource = mediaSource;
    return this;
  }

  /**
   * Get mediaSource
   * @return mediaSource
   */
  @.annotation.Nullable

  public MediaSourceEnum getMediaSource() {
    return mediaSource;
  }


  public void setMediaSource(@.annotation.Nullable MediaSourceEnum mediaSource) {
    this.mediaSource = mediaSource;
  }

  public ServiceVOIPMediaAddEditData name(@.annotation.Nonnull String name) {
    
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @.annotation.Nonnull

  public String getName() {
    return name;
  }


  public void setName(@.annotation.Nonnull String name) {
    this.name = name;
  }

  public ServiceVOIPMediaAddEditData tts(@.annotation.Nullable ServiceTTS tts) {
    
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
    ServiceVOIPMediaAddEditData serviceVOIPMediaAddEditData = (ServiceVOIPMediaAddEditData) o;
    return Objects.equals(this.description, serviceVOIPMediaAddEditData.description) &&
        Objects.equals(this.mediaSource, serviceVOIPMediaAddEditData.mediaSource) &&
        Objects.equals(this.name, serviceVOIPMediaAddEditData.name) &&
        Objects.equals(this.tts, serviceVOIPMediaAddEditData.tts);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, mediaSource, name, tts);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceVOIPMediaAddEditData {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    mediaSource: ").append(toIndentedString(mediaSource)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
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

