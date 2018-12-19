---
name: Button - Quiet Over Background
status: Verified
markup: >
  <div style="background-color: rgb(15, 121, 125); color: rgb(15, 121, 125);
  padding: 15px 20px; display: inline-block;">
    <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
      <span class="spectrum-Button-label">Button</span>
    </button>

    <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet" disabled>
      <span class="spectrum-Button-label">Button</span>
    </button>
  </div>
directory: button
filename: button-quiet-over-background
commentStart:
  line: 25064
  column: 1
commentEnd:
  line: 25082
  column: 2
title: Button - Quiet Over Background
---
A Spectrum quiet button that's meant to be placed over a non-standard color. In order to implement this button, you must set the CSS color property of a parent element to the same value as the background the button is placed against.