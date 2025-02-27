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
 * ServiceVoicemailMessageOutput
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceVoicemailMessageOutput {
  @.annotation.Nullable
  private String callId;

  @.annotation.Nullable
  private String callerIdName;

  @.annotation.Nullable
  private String callerIdNumber;

  @.annotation.Nullable
  private String folder;

  @.annotation.Nullable
  private String from;

  @.annotation.Nullable
  private Number length;

  @.annotation.Nullable
  private String mediaId;

  @.annotation.Nullable
  private [String] succeeded;

  @.annotation.Nullable
  private Number timestamp;

  @.annotation.Nullable
  private String to;

  public ServiceVoicemailMessageOutput() {
  }

  public ServiceVoicemailMessageOutput callId(@.annotation.Nullable String callId) {
    
    this.callId = callId;
    return this;
  }

  /**
   * Get callId
   * @return callId
   */
  @.annotation.Nullable

  public String getCallId() {
    return callId;
  }


  public void setCallId(@.annotation.Nullable String callId) {
    this.callId = callId;
  }

  public ServiceVoicemailMessageOutput callerIdName(@.annotation.Nullable String callerIdName) {
    
    this.callerIdName = callerIdName;
    return this;
  }

  /**
   * Get callerIdName
   * @return callerIdName
   */
  @.annotation.Nullable

  public String getCallerIdName() {
    return callerIdName;
  }


  public void setCallerIdName(@.annotation.Nullable String callerIdName) {
    this.callerIdName = callerIdName;
  }

  public ServiceVoicemailMessageOutput callerIdNumber(@.annotation.Nullable String callerIdNumber) {
    
    this.callerIdNumber = callerIdNumber;
    return this;
  }

  /**
   * Get callerIdNumber
   * @return callerIdNumber
   */
  @.annotation.Nullable

  public String getCallerIdNumber() {
    return callerIdNumber;
  }


  public void setCallerIdNumber(@.annotation.Nullable String callerIdNumber) {
    this.callerIdNumber = callerIdNumber;
  }

  public ServiceVoicemailMessageOutput folder(@.annotation.Nullable String folder) {
    
    this.folder = folder;
    return this;
  }

  /**
   * Get folder
   * @return folder
   */
  @.annotation.Nullable

  public String getFolder() {
    return folder;
  }


  public void setFolder(@.annotation.Nullable String folder) {
    this.folder = folder;
  }

  public ServiceVoicemailMessageOutput from(@.annotation.Nullable String from) {
    
    this.from = from;
    return this;
  }

  /**
   * Get from
   * @return from
   */
  @.annotation.Nullable

  public String getFrom() {
    return from;
  }


  public void setFrom(@.annotation.Nullable String from) {
    this.from = from;
  }

  public ServiceVoicemailMessageOutput length(@.annotation.Nullable Number length) {
    
    this.length = length;
    return this;
  }

  /**
   * Get length
   * @return length
   */
  @.annotation.Nullable

  public Number getLength() {
    return length;
  }


  public void setLength(@.annotation.Nullable Number length) {
    this.length = length;
  }

  public ServiceVoicemailMessageOutput mediaId(@.annotation.Nullable String mediaId) {
    
    this.mediaId = mediaId;
    return this;
  }

  /**
   * Get mediaId
   * @return mediaId
   */
  @.annotation.Nullable

  public String getMediaId() {
    return mediaId;
  }


  public void setMediaId(@.annotation.Nullable String mediaId) {
    this.mediaId = mediaId;
  }

  public ServiceVoicemailMessageOutput succeeded(@.annotation.Nullable [String] succeeded) {
    
    this.succeeded = succeeded;
    return this;
  }

  public ServiceVoicemailMessageOutput addSucceededItem(String succeededItem) {
    if (this.succeeded == null) {
      this.succeeded = new ArrayList<>();
    }
    this.succeeded.add(succeededItem);
    return this;
  }

  /**
   * Get succeeded
   * @return succeeded
   */
  @.annotation.Nullable

  public [String] getSucceeded() {
    return succeeded;
  }


  public void setSucceeded(@.annotation.Nullable [String] succeeded) {
    this.succeeded = succeeded;
  }

  public ServiceVoicemailMessageOutput timestamp(@.annotation.Nullable Number timestamp) {
    
    this.timestamp = timestamp;
    return this;
  }

  /**
   * Get timestamp
   * @return timestamp
   */
  @.annotation.Nullable

  public Number getTimestamp() {
    return timestamp;
  }


  public void setTimestamp(@.annotation.Nullable Number timestamp) {
    this.timestamp = timestamp;
  }

  public ServiceVoicemailMessageOutput to(@.annotation.Nullable String to) {
    
    this.to = to;
    return this;
  }

  /**
   * Get to
   * @return to
   */
  @.annotation.Nullable

  public String getTo() {
    return to;
  }


  public void setTo(@.annotation.Nullable String to) {
    this.to = to;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceVoicemailMessageOutput serviceVoicemailMessageOutput = (ServiceVoicemailMessageOutput) o;
    return Objects.equals(this.callId, serviceVoicemailMessageOutput.callId) &&
        Objects.equals(this.callerIdName, serviceVoicemailMessageOutput.callerIdName) &&
        Objects.equals(this.callerIdNumber, serviceVoicemailMessageOutput.callerIdNumber) &&
        Objects.equals(this.folder, serviceVoicemailMessageOutput.folder) &&
        Objects.equals(this.from, serviceVoicemailMessageOutput.from) &&
        Objects.equals(this.length, serviceVoicemailMessageOutput.length) &&
        Objects.equals(this.mediaId, serviceVoicemailMessageOutput.mediaId) &&
        Objects.equals(this.succeeded, serviceVoicemailMessageOutput.succeeded) &&
        Objects.equals(this.timestamp, serviceVoicemailMessageOutput.timestamp) &&
        Objects.equals(this.to, serviceVoicemailMessageOutput.to);
  }

  @Override
  public int hashCode() {
    return Objects.hash(callId, callerIdName, callerIdNumber, folder, from, length, mediaId, succeeded, timestamp, to);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceVoicemailMessageOutput {\n");
    sb.append("    callId: ").append(toIndentedString(callId)).append("\n");
    sb.append("    callerIdName: ").append(toIndentedString(callerIdName)).append("\n");
    sb.append("    callerIdNumber: ").append(toIndentedString(callerIdNumber)).append("\n");
    sb.append("    folder: ").append(toIndentedString(folder)).append("\n");
    sb.append("    from: ").append(toIndentedString(from)).append("\n");
    sb.append("    length: ").append(toIndentedString(length)).append("\n");
    sb.append("    mediaId: ").append(toIndentedString(mediaId)).append("\n");
    sb.append("    succeeded: ").append(toIndentedString(succeeded)).append("\n");
    sb.append("    timestamp: ").append(toIndentedString(timestamp)).append("\n");
    sb.append("    to: ").append(toIndentedString(to)).append("\n");
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

