---
name: Text Field - Decorated
markup: |
  <h4>Default</h4>
  <div class="spectrum-DecoratedTextfield is-decorated">
    <label for="DecoratedTextField-single" class="spectrum-FieldLabel">Search</label>

    <input id="DecoratedTextField-single" placeholder="Enter your name" class="spectrum-Textfield spectrum-DecoratedTextfield-field" aria-invalid="false" type="text">

    <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Icon--sizeS spectrum-DecoratedTextfield-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-InfoMedium" />
    </svg>
  </div>

  <h4>Multiline</h4>
  <div class="spectrum-DecoratedTextfield is-decorated">
    <label for="DecoratedTextField-multiline" class="spectrum-FieldLabel spectrum-FieldLabel--left">Search</label>

    <textarea id="DecoratedTextField-multiline" placeholder="Enter your life story" name="field" value="" class="spectrum-Textfield spectrum-Textfield--multiline spectrum-DecoratedTextfield-field"></textarea>

    <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Icon--sizeS spectrum-DecoratedTextfield-icon" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-InfoMedium" />
    </svg>
  </div>
directory: decoratedtextfield
filename: decoratedtextfield
commentStart:
  line: 11169
  column: 1
commentEnd:
  line: 11198
  column: 2
title: Text Field - Decorated
---
A Spectrum text field with an additional icon. The icon must be the Small size (18px) in order for it to be positioned correctly.