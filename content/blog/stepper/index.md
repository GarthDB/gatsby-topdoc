---
name: Stepper
status: Deprecated
markup: |
  <div class="spectrum-Stepper">
    <input type="number" class="spectrum-Textfield spectrum-Stepper-input" placeholder="Enter a number" min="-2" max="2" step="0.5">
    <span class="spectrum-Stepper-buttons">
      <button class="spectrum-ActionButton spectrum-Stepper-stepUp" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronUpSmall spectrum-Stepper-stepUpIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronUpSmall" />
        </svg>
      </button>
      <button class="spectrum-ActionButton spectrum-Stepper-stepDown" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownSmall spectrum-Stepper-stepDownIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownSmall" />
        </svg>
      </button>
    </span>
  </div>

  <div class="spectrum-Stepper is-focused">
    <input type="number" class="spectrum-Textfield spectrum-Stepper-input" placeholder="Enter a number" min="-2" max="2" step="0.5">
    <span class="spectrum-Stepper-buttons">
      <button class="spectrum-ActionButton spectrum-Stepper-stepUp" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronUpSmall spectrum-Stepper-stepUpIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronUpSmall" />
        </svg>
      </button>
      <button class="spectrum-ActionButton spectrum-Stepper-stepDown" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownSmall spectrum-Stepper-stepDownIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownSmall" />
        </svg>
      </button>
    </span>
  </div>

  <div class="spectrum-Stepper is-invalid">
    <input type="number" class="spectrum-Textfield spectrum-Stepper-input" placeholder="Enter a number" min="-2" max="2" step="0.5">
    <span class="spectrum-Stepper-buttons">
      <button class="spectrum-ActionButton spectrum-Stepper-stepUp" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronUpSmall spectrum-Stepper-stepUpIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronUpSmall" />
        </svg>
      </button>
      <button class="spectrum-ActionButton spectrum-Stepper-stepDown" tabindex="-1">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownSmall spectrum-Stepper-stepDownIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownSmall" />
        </svg>
      </button>
    </span>
  </div>

  <div class="spectrum-Stepper">
    <input type="number" class="spectrum-Textfield spectrum-Stepper-input" placeholder="Enter a number" min="-2" max="2" step="0.5" disabled>
    <span class="spectrum-Stepper-buttons">
      <button class="spectrum-ActionButton spectrum-Stepper-stepUp" tabindex="-1" disabled>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronUpSmall spectrum-Stepper-stepUpIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronUpSmall" />
        </svg>
      </button>
      <button class="spectrum-ActionButton spectrum-Stepper-stepDown" tabindex="-1" disabled>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownSmall spectrum-Stepper-stepDownIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownSmall" />
        </svg>
      </button>
    </span>
  </div>
directory: stepper
filename: stepper-default
commentStart:
  line: 29467
  column: 1
commentEnd:
  line: 29539
  column: 2
title: Stepper
---
Note that you must manually apply the `.is-focused` class, and that the `.is-focused` styles below don't look correct unless your cursor is actually in the stepper input field.