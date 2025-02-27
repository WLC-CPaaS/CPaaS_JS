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
import ServiceCallForward;
import ServiceCallRecordingSettings;
import ServiceMusicOnHold;
import ServiceVOIPDeviceAddEdit3a;
import ServiceVOIPDeviceAddEdit3c;
import ServiceVOIPSharedDoNotDisturb;

/**
 * ServiceVOIPDeviceAddEdit2
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceVOIPDeviceAddEdit2 {
  @.annotation.Nullable
  private ServiceCallForward callForward;

  @.annotation.Nullable
  private ServiceCallRecordingSettings callRecording;

  @.annotation.Nullable
  private ServiceVOIPDeviceAddEdit3c callerId;

  /**
   * Gets or Sets deviceType
   */
  public enum DeviceTypeEnum {
    softphone(String.valueOf("softphone")),
    
    sip_uri(String.valueOf("sip_uri"));

    private String value;

    DeviceTypeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static DeviceTypeEnum fromValue(String value) {
      for (DeviceTypeEnum b : DeviceTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  @.annotation.Nullable
  private DeviceTypeEnum deviceType;

  @.annotation.Nullable
  private ServiceVOIPSharedDoNotDisturb doNotDisturb;

  @.annotation.Nullable
  private Boolean enabled;

  @.annotation.Nullable
  private String macAddress;

  @.annotation.Nullable
  private ServiceMusicOnHold musicOnHold;

  @.annotation.Nonnull
  private String name;

  @.annotation.Nullable
  private String ownerId;

  @.annotation.Nonnull
  private ServiceVOIPDeviceAddEdit3a sip;

  public ServiceVOIPDeviceAddEdit2() {
  }

  public ServiceVOIPDeviceAddEdit2 callForward(@.annotation.Nullable ServiceCallForward callForward) {
    
    this.callForward = callForward;
    return this;
  }

  /**
   * Get callForward
   * @return callForward
   */
  @.annotation.Nullable

  public ServiceCallForward getCallForward() {
    return callForward;
  }


  public void setCallForward(@.annotation.Nullable ServiceCallForward callForward) {
    this.callForward = callForward;
  }

  public ServiceVOIPDeviceAddEdit2 callRecording(@.annotation.Nullable ServiceCallRecordingSettings callRecording) {
    
    this.callRecording = callRecording;
    return this;
  }

  /**
   * Get callRecording
   * @return callRecording
   */
  @.annotation.Nullable

  public ServiceCallRecordingSettings getCallRecording() {
    return callRecording;
  }


  public void setCallRecording(@.annotation.Nullable ServiceCallRecordingSettings callRecording) {
    this.callRecording = callRecording;
  }

  public ServiceVOIPDeviceAddEdit2 callerId(@.annotation.Nullable ServiceVOIPDeviceAddEdit3c callerId) {
    
    this.callerId = callerId;
    return this;
  }

  /**
   * Get callerId
   * @return callerId
   */
  @.annotation.Nullable

  public ServiceVOIPDeviceAddEdit3c getCallerId() {
    return callerId;
  }


  public void setCallerId(@.annotation.Nullable ServiceVOIPDeviceAddEdit3c callerId) {
    this.callerId = callerId;
  }

  public ServiceVOIPDeviceAddEdit2 deviceType(@.annotation.Nullable DeviceTypeEnum deviceType) {
    
    this.deviceType = deviceType;
    return this;
  }

  /**
   * Get deviceType
   * @return deviceType
   */
  @.annotation.Nullable

  public DeviceTypeEnum getDeviceType() {
    return deviceType;
  }


  public void setDeviceType(@.annotation.Nullable DeviceTypeEnum deviceType) {
    this.deviceType = deviceType;
  }

  public ServiceVOIPDeviceAddEdit2 doNotDisturb(@.annotation.Nullable ServiceVOIPSharedDoNotDisturb doNotDisturb) {
    
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

  public ServiceVOIPDeviceAddEdit2 enabled(@.annotation.Nullable Boolean enabled) {
    
    this.enabled = enabled;
    return this;
  }

  /**
   * cannot use required, else it has to be true and false is not allowed
   * @return enabled
   */
  @.annotation.Nullable

  public Boolean getEnabled() {
    return enabled;
  }


  public void setEnabled(@.annotation.Nullable Boolean enabled) {
    this.enabled = enabled;
  }

  public ServiceVOIPDeviceAddEdit2 macAddress(@.annotation.Nullable String macAddress) {
    
    this.macAddress = macAddress;
    return this;
  }

  /**
   * dont use mac, it enforces :, which voip does not like
   * @return macAddress
   */
  @.annotation.Nullable

  public String getMacAddress() {
    return macAddress;
  }


  public void setMacAddress(@.annotation.Nullable String macAddress) {
    this.macAddress = macAddress;
  }

  public ServiceVOIPDeviceAddEdit2 musicOnHold(@.annotation.Nullable ServiceMusicOnHold musicOnHold) {
    
    this.musicOnHold = musicOnHold;
    return this;
  }

  /**
   * Get musicOnHold
   * @return musicOnHold
   */
  @.annotation.Nullable

  public ServiceMusicOnHold getMusicOnHold() {
    return musicOnHold;
  }


  public void setMusicOnHold(@.annotation.Nullable ServiceMusicOnHold musicOnHold) {
    this.musicOnHold = musicOnHold;
  }

  public ServiceVOIPDeviceAddEdit2 name(@.annotation.Nonnull String name) {
    
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

  public ServiceVOIPDeviceAddEdit2 ownerId(@.annotation.Nullable String ownerId) {
    
    this.ownerId = ownerId;
    return this;
  }

  /**
   * json omitempty is needed else voip fails on \&quot;\&quot; for owner_id
   * @return ownerId
   */
  @.annotation.Nullable

  public String getOwnerId() {
    return ownerId;
  }


  public void setOwnerId(@.annotation.Nullable String ownerId) {
    this.ownerId = ownerId;
  }

  public ServiceVOIPDeviceAddEdit2 sip(@.annotation.Nonnull ServiceVOIPDeviceAddEdit3a sip) {
    
    this.sip = sip;
    return this;
  }

  /**
   * Get sip
   * @return sip
   */
  @.annotation.Nonnull

  public ServiceVOIPDeviceAddEdit3a getSip() {
    return sip;
  }


  public void setSip(@.annotation.Nonnull ServiceVOIPDeviceAddEdit3a sip) {
    this.sip = sip;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceVOIPDeviceAddEdit2 serviceVOIPDeviceAddEdit2 = (ServiceVOIPDeviceAddEdit2) o;
    return Objects.equals(this.callForward, serviceVOIPDeviceAddEdit2.callForward) &&
        Objects.equals(this.callRecording, serviceVOIPDeviceAddEdit2.callRecording) &&
        Objects.equals(this.callerId, serviceVOIPDeviceAddEdit2.callerId) &&
        Objects.equals(this.deviceType, serviceVOIPDeviceAddEdit2.deviceType) &&
        Objects.equals(this.doNotDisturb, serviceVOIPDeviceAddEdit2.doNotDisturb) &&
        Objects.equals(this.enabled, serviceVOIPDeviceAddEdit2.enabled) &&
        Objects.equals(this.macAddress, serviceVOIPDeviceAddEdit2.macAddress) &&
        Objects.equals(this.musicOnHold, serviceVOIPDeviceAddEdit2.musicOnHold) &&
        Objects.equals(this.name, serviceVOIPDeviceAddEdit2.name) &&
        Objects.equals(this.ownerId, serviceVOIPDeviceAddEdit2.ownerId) &&
        Objects.equals(this.sip, serviceVOIPDeviceAddEdit2.sip);
  }

  @Override
  public int hashCode() {
    return Objects.hash(callForward, callRecording, callerId, deviceType, doNotDisturb, enabled, macAddress, musicOnHold, name, ownerId, sip);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceVOIPDeviceAddEdit2 {\n");
    sb.append("    callForward: ").append(toIndentedString(callForward)).append("\n");
    sb.append("    callRecording: ").append(toIndentedString(callRecording)).append("\n");
    sb.append("    callerId: ").append(toIndentedString(callerId)).append("\n");
    sb.append("    deviceType: ").append(toIndentedString(deviceType)).append("\n");
    sb.append("    doNotDisturb: ").append(toIndentedString(doNotDisturb)).append("\n");
    sb.append("    enabled: ").append(toIndentedString(enabled)).append("\n");
    sb.append("    macAddress: ").append(toIndentedString(macAddress)).append("\n");
    sb.append("    musicOnHold: ").append(toIndentedString(musicOnHold)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ownerId: ").append(toIndentedString(ownerId)).append("\n");
    sb.append("    sip: ").append(toIndentedString(sip)).append("\n");
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

