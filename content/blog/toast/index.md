---
name: Toast
components:
  toast:
    status: Verified
    markup: |
      <div class="spectrum-Toast">
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">Button.xd has been archived</div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Undo</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-info:
    status: Verified
    markup: |
      <div class="spectrum-Toast spectrum-Toast--info">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">The toast is done</div>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-negative:
    status: Verified
    markup: |
      <div class="spectrum-Toast spectrum-Toast--negative">
        <svg class="spectrum-Icon spectrum-UIIcon-AlertMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-AlertMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">The toast is on fire</div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Eject</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-positive:
    status: Verified
    markup: |
      <div class="spectrum-Toast spectrum-Toast--positive">
        <svg class="spectrum-Icon spectrum-UIIcon-SuccessMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-SuccessMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">The toast is golden brown</div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Eject</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-wrapping:
    name: Toast Wrapping Behavior
    status: Verified
    markup: |

      <div class="spectrum-Toast spectrum-Toast--info">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">
            A new version of Lightroom Classic is now available
          </div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Update</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>

      <br><br>

      <div class="spectrum-Toast spectrum-Toast--info" style="width: 318px;">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">
            A new version of Lightroom Classic is now available
          </div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Update</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>

      <br><br>

      <div class="spectrum-Toast spectrum-Toast--info" style="width: 332px;">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">
            A new version of Lightroom Classic is now available
          </div>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>

      <br><br>

      <div class="spectrum-Toast spectrum-Toast--info">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">An update is available</div>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-error:
    details: Use `negative` variant instead
    markup: |
      <div class="spectrum-Toast spectrum-Toast--error">
        <svg class="spectrum-Icon spectrum-UIIcon-AlertMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-AlertMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">The toast is on fire</div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Eject</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-success:
    details: Use `positive` variant instead
    markup: |
      <div class="spectrum-Toast spectrum-Toast--success">
        <svg class="spectrum-Icon spectrum-UIIcon-SuccessMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-SuccessMedium" />
        </svg>
        <div class="spectrum-Toast-body">
          <div class="spectrum-Toast-content">The toast is golden brown</div>
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Eject</span>
          </button>
        </div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
  toast-oldmarkup:
    name: Deprecated Markup
    status: Deprecated
    description: >-
      The old markup for Toast (no `.spectrum-Toast-body` and both buttons
      inside of `.spectrum-Toast-buttons`) still works, but will be removed in
      the next major version.
    markup: |
      <div class="spectrum-Toast">
        <div class="spectrum-Toast-content">Button.xd has been archived</div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Undo</span>
          </button>
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>

      <br><br>

      <div class="spectrum-Toast spectrum-Toast--info">
        <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Toast-typeIcon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-InfoMedium" />
        </svg>
        <div class="spectrum-Toast-content">Don't use this markup, it's deprecated</div>
        <div class="spectrum-Toast-buttons">
          <button class="spectrum-Button spectrum-Button--overBackground spectrum-Button--quiet">
            <span class="spectrum-Button-label">Ok</span>
          </button>
          <button class="spectrum-ClearButton spectrum-ClearButton--medium spectrum-ClearButton--overBackground">
            <svg class="spectrum-Icon spectrum-UIIcon-CrossMedium focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CrossMedium" />
            </svg>
          </button>
        </div>
      </div>
directory: toast
filename: toast
commentStart:
  line: 13002
  column: 1
commentEnd:
  line: 13259
  column: 2
title: Toast
---
No description