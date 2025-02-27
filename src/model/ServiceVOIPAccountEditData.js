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
import ServiceVOIPAccountCallRecording;
import ServiceVOIPAccountMusicOnHold;
import ServiceVOIPSharedDoNotDisturb;

/**
 * ServiceVOIPAccountEditData
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceVOIPAccountEditData {
  @.annotation.Nullable
  private ServiceVOIPAccountCallRecording callRecording;

  @.annotation.Nullable
  private ServiceVOIPSharedDoNotDisturb doNotDisturb;

  @.annotation.Nullable
  private Boolean enabled;

  @.annotation.Nullable
  private ServiceVOIPAccountMusicOnHold musicOnHold;

  @.annotation.Nonnull
  private String name;

  @.annotation.Nonnull
  private String timezone;

  public ServiceVOIPAccountEditData() {
  }

  public ServiceVOIPAccountEditData callRecording(@.annotation.Nullable ServiceVOIPAccountCallRecording callRecording) {
    
    this.callRecording = callRecording;
    return this;
  }

  /**
   * Get callRecording
   * @return callRecording
   */
  @.annotation.Nullable

  public ServiceVOIPAccountCallRecording getCallRecording() {
    return callRecording;
  }


  public void setCallRecording(@.annotation.Nullable ServiceVOIPAccountCallRecording callRecording) {
    this.callRecording = callRecording;
  }

  public ServiceVOIPAccountEditData doNotDisturb(@.annotation.Nullable ServiceVOIPSharedDoNotDisturb doNotDisturb) {
    
    this.doNotDisturb = doNotDisturb;
    return this;
  }

  /**
   * Get doNotDisturb
   * @return doNotDisturb
   */
  @.annotation.Nullable

  public ServiceVOIPSharedDoNotDisturb getDoNotDisturb() {
    return doNotDisturb;
  }


  public void setDoNotDisturb(@.annotation.Nullable ServiceVOIPSharedDoNotDisturb doNotDisturb) {
    this.doNotDisturb = doNotDisturb;
  }

  public ServiceVOIPAccountEditData enabled(@.annotation.Nullable Boolean enabled) {
    
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

  public ServiceVOIPAccountEditData musicOnHold(@.annotation.Nullable ServiceVOIPAccountMusicOnHold musicOnHold) {
    
    this.musicOnHold = musicOnHold;
    return this;
  }

  /**
   * Get musicOnHold
   * @return musicOnHold
   */
  @.annotation.Nullable

  public ServiceVOIPAccountMusicOnHold getMusicOnHold() {
    return musicOnHold;
  }


  public void setMusicOnHold(@.annotation.Nullable ServiceVOIPAccountMusicOnHold musicOnHold) {
    this.musicOnHold = musicOnHold;
  }

  public ServiceVOIPAccountEditData name(@.annotation.Nonnull String name) {
    
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

  public ServiceVOIPAccountEditData timezone(@.annotation.Nonnull String timezone) {
    
    this.timezone = timezone;
    return this;
  }

  /**
   * Get timezone
   * @return timezone
   */
  @.annotation.Nonnull

  public String getTimezone() {
    return timezone;
  }


  public void setTimezone(@.annotation.Nonnull String timezone) {
    this.timezone = timezone;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceVOIPAccountEditData serviceVOIPAccountEditData = (ServiceVOIPAccountEditData) o;
    return Objects.equals(this.callRecording, serviceVOIPAccountEditData.callRecording) &&
        Objects.equals(this.doNotDisturb, serviceVOIPAccountEditData.doNotDisturb) &&
        Objects.equals(this.enabled, serviceVOIPAccountEditData.enabled) &&
        Objects.equals(this.musicOnHold, serviceVOIPAccountEditData.musicOnHold) &&
        Objects.equals(this.name, serviceVOIPAccountEditData.name) &&
        Objects.equals(this.timezone, serviceVOIPAccountEditData.timezone);
  }

  @Override
  public int hashCode() {
    return Objects.hash(callRecording, doNotDisturb, enabled, musicOnHold, name, timezone);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceVOIPAccountEditData {\n");
    sb.append("    callRecording: ").append(toIndentedString(callRecording)).append("\n");
    sb.append("    doNotDisturb: ").append(toIndentedString(doNotDisturb)).append("\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    musicOnHold: ").append(toIndentedString(musicOnHold)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    timezone: ").append(toIndentedString(timezone)).append("\n");
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

