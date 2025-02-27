# WhiteLabelCommunicationsCPaasApiDocumentation.ServiceVOIPDeviceAddEdit2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callForward** | [**ServiceCallForward**](ServiceCallForward.md) |  | [optional] 
**callRecording** | [**ServiceCallRecordingSettings**](ServiceCallRecordingSettings.md) |  | [optional] 
**callerId** | [**ServiceVOIPDeviceAddEdit3c**](ServiceVOIPDeviceAddEdit3c.md) |  | [optional] 
**deviceType** | **String** |  | [optional] 
**doNotDisturb** | [**ServiceVOIPSharedDoNotDisturb**](ServiceVOIPSharedDoNotDisturb.md) |  | [optional] 
**enabled** | **Boolean** | cannot use required, else it has to be true and false is not allowed | [optional] 
**macAddress** | **String** | dont use mac, it enforces :, which voip does not like | [optional] 
**musicOnHold** | [**ServiceMusicOnHold**](ServiceMusicOnHold.md) |  | [optional] 
**name** | **String** |  | 
**ownerId** | **String** | json omitempty is needed else voip fails on \&quot;\&quot; for owner_id | [optional] 
**sip** | [**ServiceVOIPDeviceAddEdit3a**](ServiceVOIPDeviceAddEdit3a.md) |  | 



## Enum: DeviceTypeEnum


* `softphone` (value: `"softphone"`)

* `sip_uri` (value: `"sip_uri"`)




