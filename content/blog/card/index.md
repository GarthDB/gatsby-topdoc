---
name: Card
markup: |
  <div style="width: 208px;">
    <div class="spectrum-Card">
      <div class="spectrum-Card-coverPhoto" style="background-image: url(img/example-card-portrait.jpg)"></div>
      <div class="spectrum-Card-body">
        <div class="spectrum-Card-header">
          <div class="spectrum-Card-title">Card Title</div>
          <div class="spectrum-Card-actionButton">
            <button aria-haspopup="true" class="spectrum-ActionButton spectrum-ActionButton--quiet">
              <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
                <use xlink:href="#spectrum-icon-18-More" />
              </svg>
            </button>
          </div>
        </div>
        <div class="spectrum-Card-content">
          <div class="spectrum-Card-subtitle">jpg</div>
        </div>
      </div>
      <div class="spectrum-Card-footer">
        Footer
      </div>
      <div class="spectrum-QuickActions spectrum-Card-quickActions">
        <div class="spectrum-Checkbox">
          <input type="checkbox" class="spectrum-Checkbox-input" aria-checked="false" title="Select" value="">
          <span class="spectrum-Checkbox-box">
            <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkSmall spectrum-Checkbox-checkmark" focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-CheckmarkSmall" />
            </svg>
            <svg class="spectrum-Icon spectrum-UIIcon-DashSmall spectrum-Checkbox-partialCheckmark" focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-DashSmall" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
directory: card
filename: card
commentStart:
  line: 21041
  column: 1
commentEnd:
  line: 21084
  column: 2
title: Card
---
The standard Card component with cover photo and footer.