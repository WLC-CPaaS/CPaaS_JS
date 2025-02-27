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
 * ServiceTemporalRuleSetOutputShort
 */
@.annotation.Generated(value = "org.openapitools.codegen.languages.JavascriptClientCodegen", comments = "Generator version: 7.11.0-SNAPSHOT")
public class ServiceTemporalRuleSetOutputShort {
  @.annotation.Nullable
  private [String] features;

  @.annotation.Nullable
  private [String] flags;

  @.annotation.Nullable
  private String id;

  @.annotation.Nullable
  private String name;

  @.annotation.Nullable
  private [String] rules;

  public ServiceTemporalRuleSetOutputShort() {
  }

  public ServiceTemporalRuleSetOutputShort features(@.annotation.Nullable [String] features) {
    
    this.features = features;
    return this;
  }

  public ServiceTemporalRuleSetOutputShort addFeaturesItem(String featuresItem) {
    if (this.features == null) {
      this.features = new ArrayList<>();
    }
    this.features.add(featuresItem);
    return this;
  }

  /**
   * Get features
   * @return features
   */
  @.annotation.Nullable

  public [String] getFeatures() {
    return features;
  }


  public void setFeatures(@.annotation.Nullable [String] features) {
    this.features = features;
  }

  public ServiceTemporalRuleSetOutputShort flags(@.annotation.Nullable [String] flags) {
    
    this.flags = flags;
    return this;
  }

  public ServiceTemporalRuleSetOutputShort addFlagsItem(String flagsItem) {
    if (this.flags == null) {
      this.flags = new ArrayList<>();
    }
    this.flags.add(flagsItem);
    return this;
  }

  /**
   * Get flags
   * @return flags
   */
  @.annotation.Nullable

  public [String] getFlags() {
    return flags;
  }


  public void setFlags(@.annotation.Nullable [String] flags) {
    this.flags = flags;
  }

  public ServiceTemporalRuleSetOutputShort id(@.annotation.Nullable String id) {
    
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

  public ServiceTemporalRuleSetOutputShort name(@.annotation.Nullable String name) {
    
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

  public ServiceTemporalRuleSetOutputShort rules(@.annotation.Nullable [String] rules) {
    
    this.rules = rules;
    return this;
  }

  public ServiceTemporalRuleSetOutputShort addRulesItem(String rulesItem) {
    if (this.rules == null) {
      this.rules = new ArrayList<>();
    }
    this.rules.add(rulesItem);
    return this;
  }

  /**
   * Get rules
   * @return rules
   */
  @.annotation.Nullable

  public [String] getRules() {
    return rules;
  }


  public void setRules(@.annotation.Nullable [String] rules) {
    this.rules = rules;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ServiceTemporalRuleSetOutputShort serviceTemporalRuleSetOutputShort = (ServiceTemporalRuleSetOutputShort) o;
    return Objects.equals(this.features, serviceTemporalRuleSetOutputShort.features) &&
        Objects.equals(this.flags, serviceTemporalRuleSetOutputShort.flags) &&
        Objects.equals(this.id, serviceTemporalRuleSetOutputShort.id) &&
        Objects.equals(this.name, serviceTemporalRuleSetOutputShort.name) &&
        Objects.equals(this.rules, serviceTemporalRuleSetOutputShort.rules);
  }

  @Override
  public int hashCode() {
    return Objects.hash(features, flags, id, name, rules);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ServiceTemporalRuleSetOutputShort {\n");
    sb.append("    features: ").append(toIndentedString(features)).append("\n");
    sb.append("    flags: ").append(toIndentedString(flags)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    rules: ").append(toIndentedString(rules)).append("\n");
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

