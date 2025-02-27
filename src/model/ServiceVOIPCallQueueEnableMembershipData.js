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
 * ServiceVOIPCallQueueEnableMembershipData
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceVOIPCallQueueEnableMembershipData {
  @.annotation.Nonnull
  private Boolean acceptCharges;

  public ServiceVOIPCallQueueEnableMembershipData() {
  }

  public ServiceVOIPCallQueueEnableMembershipData acceptCharges(@.annotation.Nonnull Boolean acceptCharges) {
    
    this.acceptCharges = acceptCharges;
    return this;
  }

  /**
   * Get acceptCharges
   * @return acceptCharges
   */
  @.annotation.Nonnull

  public Boolean getAcceptCharges() {
    return acceptCharges;
  }


  public void setAcceptCharges(@.annotation.Nonnull Boolean acceptCharges) {
    this.acceptCharges = acceptCharges;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceVOIPCallQueueEnableMembershipData serviceVOIPCallQueueEnableMembershipData = (ServiceVOIPCallQueueEnableMembershipData) o;
    return Objects.equals(this.acceptCharges, serviceVOIPCallQueueEnableMembershipData.acceptCharges);
  }

  @Override
  public int hashCode() {
    return Objects.hash(acceptCharges);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceVOIPCallQueueEnableMembershipData {\n");
    sb.append("    acceptCharges: ").append(toIndentedString(acceptCharges)).append("\n");
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

