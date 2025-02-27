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
 * ServiceCampaignTagDetagPhonenumbersOutput
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceCampaignTagDetagPhonenumbersOutput {
  @.annotation.Nullable
  private String orderId;

  @.annotation.Nullable
  private String orderStatus;

  public ServiceCampaignTagDetagPhonenumbersOutput() {
  }

  public ServiceCampaignTagDetagPhonenumbersOutput orderId(@.annotation.Nullable String orderId) {
    
    this.orderId = orderId;
    return this;
  }

  /**
   * Get orderId
   * @return orderId
   */
  @.annotation.Nullable

  public String getOrderId() {
    return orderId;
  }


  public void setOrderId(@.annotation.Nullable String orderId) {
    this.orderId = orderId;
  }

  public ServiceCampaignTagDetagPhonenumbersOutput orderStatus(@.annotation.Nullable String orderStatus) {
    
    this.orderStatus = orderStatus;
    return this;
  }

  /**
   * Get orderStatus
   * @return orderStatus
   */
  @.annotation.Nullable

  public String getOrderStatus() {
    return orderStatus;
  }


  public void setOrderStatus(@.annotation.Nullable String orderStatus) {
    this.orderStatus = orderStatus;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceCampaignTagDetagPhonenumbersOutput serviceCampaignTagDetagPhonenumbersOutput = (ServiceCampaignTagDetagPhonenumbersOutput) o;
    return Objects.equals(this.orderId, serviceCampaignTagDetagPhonenumbersOutput.orderId) &&
        Objects.equals(this.orderStatus, serviceCampaignTagDetagPhonenumbersOutput.orderStatus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderId, orderStatus);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceCampaignTagDetagPhonenumbersOutput {\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    orderStatus: ").append(toIndentedString(orderStatus)).append("\n");
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

