---
id: switch
name: Switch - A/B toggle
ignoreDNA: true
status: Verified
markup: |
  <div class="spectrum-ToggleSwitch spectrum-ToggleSwitch--ab">
    <input type="checkbox" class="spectrum-ToggleSwitch-input" id="toggle-ab-0">
    <span class="spectrum-ToggleSwitch-switch"></span>
    <label class="spectrum-ToggleSwitch-label" for="toggle-ab-0">Toggle A</label>
  </div>
  <div class="spectrum-ToggleSwitch spectrum-ToggleSwitch--ab">
    <input type="checkbox" class="spectrum-ToggleSwitch-input" id="toggle-ab-1" checked>
    <span class="spectrum-ToggleSwitch-switch"></span>
    <label class="spectrum-ToggleSwitch-label" for="toggle-ab-1">Toggle B</label>
  </div>

  <br>

  <div class="spectrum-ToggleSwitch spectrum-ToggleSwitch--ab">
    <input type="checkbox" class="spectrum-ToggleSwitch-input" id="toggle-onoff-disabled-0" disabled>
    <span class="spectrum-ToggleSwitch-switch"></span>
    <label class="spectrum-ToggleSwitch-label" for="toggle-onoff-disabled-0">Toggle A</label>
  </div>
  <div class="spectrum-ToggleSwitch spectrum-ToggleSwitch--ab">
    <input type="checkbox" class="spectrum-ToggleSwitch-input" id="toggle-onoff-disabled-1" checked disabled>
    <span class="spectrum-ToggleSwitch-switch"></span>
    <label class="spectrum-ToggleSwitch-label" for="toggle-onoff-disabled-1">Toggle B</label>
  </div>
directory: toggle
filename: toggle-abdefault
commentStart:
  line: 15302
  column: 1
commentEnd:
  line: 15336
  column: 2
title: Switch - A/B toggle
---
The a/b toggle variant of the switch.