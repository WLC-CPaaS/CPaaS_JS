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
 * ModelInvoice
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ModelInvoice {
  @.annotation.Nullable
  private Number apiCallCost;

  @.annotation.Nullable
  private Number apiCallCount;

  @.annotation.Nullable
  private Number callMinuteCost;

  @.annotation.Nullable
  private Number callMinuteCount;

  @.annotation.Nullable
  private Number invoiceCost;

  @.annotation.Nullable
  private Number month;

  @.annotation.Nullable
  private Number year;

  public ModelInvoice() {
  }

  public ModelInvoice apiCallCost(@.annotation.Nullable Number apiCallCost) {
    
    this.apiCallCost = apiCallCost;
    return this;
  }

  /**
   * Get apiCallCost
   * @return apiCallCost
   */
  @.annotation.Nullable

  public Number getApiCallCost() {
    return apiCallCost;
  }


  public void setApiCallCost(@.annotation.Nullable Number apiCallCost) {
    this.apiCallCost = apiCallCost;
  }

  public ModelInvoice apiCallCount(@.annotation.Nullable Number apiCallCount) {
    
    this.apiCallCount = apiCallCount;
    return this;
  }

  /**
   * Get apiCallCount
   * @return apiCallCount
   */
  @.annotation.Nullable

  public Number getApiCallCount() {
    return apiCallCount;
  }


  public void setApiCallCount(@.annotation.Nullable Number apiCallCount) {
    this.apiCallCount = apiCallCount;
  }

  public ModelInvoice callMinuteCost(@.annotation.Nullable Number callMinuteCost) {
    
    this.callMinuteCost = callMinuteCost;
    return this;
  }

  /**
   * Get callMinuteCost
   * @return callMinuteCost
   */
  @.annotation.Nullable

  public Number getCallMinuteCost() {
    return callMinuteCost;
  }


  public void setCallMinuteCost(@.annotation.Nullable Number callMinuteCost) {
    this.callMinuteCost = callMinuteCost;
  }

  public ModelInvoice callMinuteCount(@.annotation.Nullable Number callMinuteCount) {
    
    this.callMinuteCount = callMinuteCount;
    return this;
  }

  /**
   * Get callMinuteCount
   * @return callMinuteCount
   */
  @.annotation.Nullable

  public Number getCallMinuteCount() {
    return callMinuteCount;
  }


  public void setCallMinuteCount(@.annotation.Nullable Number callMinuteCount) {
    this.callMinuteCount = callMinuteCount;
  }

  public ModelInvoice invoiceCost(@.annotation.Nullable Number invoiceCost) {
    
    this.invoiceCost = invoiceCost;
    return this;
  }

  /**
   * Get invoiceCost
   * @return invoiceCost
   */
  @.annotation.Nullable

  public Number getInvoiceCost() {
    return invoiceCost;
  }


  public void setInvoiceCost(@.annotation.Nullable Number invoiceCost) {
    this.invoiceCost = invoiceCost;
  }

  public ModelInvoice month(@.annotation.Nullable Number month) {
    
    this.month = month;
    return this;
  }

  /**
   * Get month
   * @return month
   */
  @.annotation.Nullable

  public Number getMonth() {
    return month;
  }


  public void setMonth(@.annotation.Nullable Number month) {
    this.month = month;
  }

  public ModelInvoice year(@.annotation.Nullable Number year) {
    
    this.year = year;
    return this;
  }

  /**
   * Get year
   * @return year
   */
  @.annotation.Nullable

  public Number getYear() {
    return year;
  }


  public void setYear(@.annotation.Nullable Number year) {
    this.year = year;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelInvoice modelInvoice = (ModelInvoice) o;
    return Objects.equals(this.apiCallCost, modelInvoice.apiCallCost) &&
        Objects.equals(this.apiCallCount, modelInvoice.apiCallCount) &&
        Objects.equals(this.callMinuteCost, modelInvoice.callMinuteCost) &&
        Objects.equals(this.callMinuteCount, modelInvoice.callMinuteCount) &&
        Objects.equals(this.invoiceCost, modelInvoice.invoiceCost) &&
        Objects.equals(this.month, modelInvoice.month) &&
        Objects.equals(this.year, modelInvoice.year);
  }

  @Override
  public int hashCode() {
    return Objects.hash(apiCallCost, apiCallCount, callMinuteCost, callMinuteCount, invoiceCost, month, year);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelInvoice {\n");
    sb.append("    apiCallCost: ").append(toIndentedString(apiCallCost)).append("\n");
    sb.append("    apiCallCount: ").append(toIndentedString(apiCallCount)).append("\n");
    sb.append("    callMinuteCost: ").append(toIndentedString(callMinuteCost)).append("\n");
    sb.append("    callMinuteCount: ").append(toIndentedString(callMinuteCount)).append("\n");
    sb.append("    invoiceCost: ").append(toIndentedString(invoiceCost)).append("\n");
    sb.append("    month: ").append(toIndentedString(month)).append("\n");
    sb.append("    year: ").append(toIndentedString(year)).append("\n");
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

