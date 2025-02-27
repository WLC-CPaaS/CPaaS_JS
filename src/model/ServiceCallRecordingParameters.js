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
 * ServiceCallRecordingParameters
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceCallRecordingParameters {
  @.annotation.Nullable
  private Boolean enabled;

  /**
   * Gets or Sets format
   */
  public enum FormatEnum {
    mp3(String.valueOf("mp3")),
    
    wav(String.valueOf("wav"));

    private String value;

    FormatEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static FormatEnum fromValue(String value) {
      for (FormatEnum b : FormatEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  @.annotation.Nullable
  private FormatEnum format;

  @.annotation.Nullable
  private Number recordMinSec;

  @.annotation.Nullable
  private Boolean recordOnAnswer;

  @.annotation.Nullable
  private Boolean recordOnBridge;

  @.annotation.Nullable
  private Number recordSampleRate;

  @.annotation.Nullable
  private Number timeLimit;

  @.annotation.Nullable
  private String url;

  public ServiceCallRecordingParameters() {
  }

  public ServiceCallRecordingParameters enabled(@.annotation.Nullable Boolean enabled) {
    
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

  public ServiceCallRecordingParameters format(@.annotation.Nullable FormatEnum format) {
    
    this.format = format;
    return this;
  }

  /**
   * Get format
   * @return format
   */
  @.annotation.Nullable

  public FormatEnum getFormat() {
    return format;
  }


  public void setFormat(@.annotation.Nullable FormatEnum format) {
    this.format = format;
  }

  public ServiceCallRecordingParameters recordMinSec(@.annotation.Nullable Number recordMinSec) {
    
    this.recordMinSec = recordMinSec;
    return this;
  }

  /**
   * Get recordMinSec
   * @return recordMinSec
   */
  @.annotation.Nullable

  public Number getRecordMinSec() {
    return recordMinSec;
  }


  public void setRecordMinSec(@.annotation.Nullable Number recordMinSec) {
    this.recordMinSec = recordMinSec;
  }

  public ServiceCallRecordingParameters recordOnAnswer(@.annotation.Nullable Boolean recordOnAnswer) {
    
    this.recordOnAnswer = recordOnAnswer;
    return this;
  }

  /**
   * Get recordOnAnswer
   * @return recordOnAnswer
   */
  @.annotation.Nullable

  public Boolean getRecordOnAnswer() {
    return recordOnAnswer;
  }


  public void setRecordOnAnswer(@.annotation.Nullable Boolean recordOnAnswer) {
    this.recordOnAnswer = recordOnAnswer;
  }

  public ServiceCallRecordingParameters recordOnBridge(@.annotation.Nullable Boolean recordOnBridge) {
    
    this.recordOnBridge = recordOnBridge;
    return this;
  }

  /**
   * Get recordOnBridge
   * @return recordOnBridge
   */
  @.annotation.Nullable

  public Boolean getRecordOnBridge() {
    return recordOnBridge;
  }


  public void setRecordOnBridge(@.annotation.Nullable Boolean recordOnBridge) {
    this.recordOnBridge = recordOnBridge;
  }

  public ServiceCallRecordingParameters recordSampleRate(@.annotation.Nullable Number recordSampleRate) {
    
    this.recordSampleRate = recordSampleRate;
    return this;
  }

  /**
   * Get recordSampleRate
   * @return recordSampleRate
   */
  @.annotation.Nullable

  public Number getRecordSampleRate() {
    return recordSampleRate;
  }


  public void setRecordSampleRate(@.annotation.Nullable Number recordSampleRate) {
    this.recordSampleRate = recordSampleRate;
  }

  public ServiceCallRecordingParameters timeLimit(@.annotation.Nullable Number timeLimit) {
    
    this.timeLimit = timeLimit;
    return this;
  }

  /**
   * Get timeLimit
   * minimum: 5
   * maximum: 10800
   * @return timeLimit
   */
  @.annotation.Nullable

  public Number getTimeLimit() {
    return timeLimit;
  }


  public void setTimeLimit(@.annotation.Nullable Number timeLimit) {
    this.timeLimit = timeLimit;
  }

  public ServiceCallRecordingParameters url(@.annotation.Nullable String url) {
    
    this.url = url;
    return this;
  }

  /**
   * Get url
   * @return url
   */
  @.annotation.Nullable

  public String getUrl() {
    return url;
  }


  public void setUrl(@.annotation.Nullable String url) {
    this.url = url;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceCallRecordingParameters serviceCallRecordingParameters = (ServiceCallRecordingParameters) o;
    return Objects.equals(this.enabled, serviceCallRecordingParameters.enabled) &&
        Objects.equals(this.format, serviceCallRecordingParameters.format) &&
        Objects.equals(this.recordMinSec, serviceCallRecordingParameters.recordMinSec) &&
        Objects.equals(this.recordOnAnswer, serviceCallRecordingParameters.recordOnAnswer) &&
        Objects.equals(this.recordOnBridge, serviceCallRecordingParameters.recordOnBridge) &&
        Objects.equals(this.recordSampleRate, serviceCallRecordingParameters.recordSampleRate) &&
        Objects.equals(this.timeLimit, serviceCallRecordingParameters.timeLimit) &&
        Objects.equals(this.url, serviceCallRecordingParameters.url);
  }

  @Override
  public int hashCode() {
    return Objects.hash(enabled, format, recordMinSec, recordOnAnswer, recordOnBridge, recordSampleRate, timeLimit, url);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceCallRecordingParameters {\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    format: ").append(toIndentedString(format)).append("\n");
    sb.append("    recordMinSec: ").append(toIndentedString(recordMinSec)).append("\n");
    sb.append("    recordOnAnswer: ").append(toIndentedString(recordOnAnswer)).append("\n");
    sb.append("    recordOnBridge: ").append(toIndentedString(recordOnBridge)).append("\n");
    sb.append("    recordSampleRate: ").append(toIndentedString(recordSampleRate)).append("\n");
    sb.append("    timeLimit: ").append(toIndentedString(timeLimit)).append("\n");
    sb.append("    url: ").append(toIndentedString(url)).append("\n");
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

