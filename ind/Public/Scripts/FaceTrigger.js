// @input Component.SpriteVisual animationSprite
// @input string AnimationTrigger = MouthWasJustOpenedEvent { "widget": "combobox", "values": [ { "label": "Brows Lowered", "value": "BrowsLoweredEvent" }, { "label": "Brows Raised", "value": "BrowsRaisedEvent" }, { "label": "Brows Returned To Normal", "value": "BrowsReturnedToNormalEvent" }, { "label": "Face Found", "value": "FaceFoundEvent" }, { "label": "Face Lost", "value": "FaceLostEvent" }, { "label": "Kiss Finished", "value": "KissFinishedEvent" }, { "label": "Kiss Started", "value": "KissStartedEvent" }, { "label": "Mouth Closed", "value": "MouthClosedEvent" }, { "label": "Mouth Opened", "value": "MouthWasJustOpenedEvent" }, { "label": "Smile Finished", "value": "SmileFinishedEvent" }, { "label": "Smile Started", "value": "SmileStartedEvent" }, { "label": "Touch Start", "value": "TouchStartEvent" }, { "label": "Touch End", "value": "TouchEndEvent" }, { "label": "Tap", "value": "TapEvent" } ] }
// @input float TriggerDisableTime = 0


script.animationSprite.mainPass.baseTex.control.pauseAtFrame(0);
var triggerStartTime = getTime() - script.TriggerDisableTime;


function onTriggered()
{
    print("FaceTriggerAnim: " + script.AnimationTrigger + " triggered");
    script.animationSprite.mainPass.baseTex.control.play(1, 0);
}

function triggerCallback()
{ 
    if (getTime() >= triggerStartTime + script.TriggerDisableTime) {
        triggerStartTime = getTime();
        onTriggered();
    }
}

script.createEvent(script.AnimationTrigger).bind(triggerCallback);