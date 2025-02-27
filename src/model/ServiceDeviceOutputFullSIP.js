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
 * ServiceDeviceOutputFullSIP
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceDeviceOutputFullSIP {
  @.annotation.Nullable
  private String inviteFormat;

  @.annotation.Nullable
  private String password;

  @.annotation.Nullable
  private String username;

  public ServiceDeviceOutputFullSIP() {
  }

  public ServiceDeviceOutputFullSIP inviteFormat(@.annotation.Nullable String inviteFormat) {
    
    this.inviteFormat = inviteFormat;
    return this;
  }

  /**
   * Get inviteFormat
   * @return inviteFormat
   */
  @.annotation.Nullable

  public String getInviteFormat() {
    return inviteFormat;
  }


  public void setInviteFormat(@.annotation.Nullable String inviteFormat) {
    this.inviteFormat = inviteFormat;
  }

  public ServiceDeviceOutputFullSIP password(@.annotation.Nullable String password) {
    
    this.password = password;
    return this;
  }

  /**
   * Get password
   * @return password
   */
  @.annotation.Nullable

  public String getPassword() {
    return password;
  }


  public void setPassword(@.annotation.Nullable String password) {
    this.password = password;
  }

  public ServiceDeviceOutputFullSIP username(@.annotation.Nullable String username) {
    
    this.username = username;
    return this;
  }

  /**
   * Get username
   * @return username
   */
  @.annotation.Nullable

  public String getUsername() {
    return username;
  }


  public void setUsername(@.annotation.Nullable String username) {
    this.username = username;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceDeviceOutputFullSIP serviceDeviceOutputFullSIP = (ServiceDeviceOutputFullSIP) o;
    return Objects.equals(this.inviteFormat, serviceDeviceOutputFullSIP.inviteFormat) &&
        Objects.equals(this.password, serviceDeviceOutputFullSIP.password) &&
        Objects.equals(this.username, serviceDeviceOutputFullSIP.username);
  }

  @Override
  public int hashCode() {
    return Objects.hash(inviteFormat, password, username);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceDeviceOutputFullSIP {\n");
    sb.append("    inviteFormat: ").append(toIndentedString(inviteFormat)).append("\n");
    sb.append("    password: ").append(toIndentedString(password)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
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

