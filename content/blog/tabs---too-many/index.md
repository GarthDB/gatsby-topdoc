---
id: tabs
name: Tabs - Too many
ignoreDNA: true
status: Verified
components:
  tabs-too-many:
    id: tabs
    status: Verified
    name: Basic tabs with overflow
    markup: |
      <div class="spectrum-Tabs spectrum-Tabs--horizontal" style="width: 409px">
        <div class="spectrum-Tabs-item is-selected" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 1</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 2</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 3</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 4</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 5</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 6</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 7</label>
        </div>

        <button class="spectrum-ActionButton spectrum-ActionButton--quiet">
          <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-icon-18-More" />
          </svg>
        </button>
        <div class="spectrum-Tabs-selectionIndicator" style="width: 27px; left: 0px;"></div>
      </div>
  tabs-too-many-compact:
    id: tabs
    status: Verified
    name: Compact tabs with overflow
    markup: >
      <div class="spectrum-Tabs spectrum-Tabs--horizontal spectrum-Tabs--quiet
      spectrum-Tabs--compact">
        <div class="spectrum-Tabs-item is-selected" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 1</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 2</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 3</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 4</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 5</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 6</label>
        </div>
        <div class="spectrum-Tabs-item" tabindex="0">
          <label class="spectrum-Tabs-itemLabel">Tab 7</label>
        </div>

        <button class="spectrum-ActionButton spectrum-ActionButton--quiet">
          <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-icon-18-More" />
          </svg>
        </button>
        <div class="spectrum-Tabs-selectionIndicator" style="width: 27px; left: 0px;"></div>
      </div>
directory: tabs
filename: tabs-toomany
commentStart:
  line: 14688
  column: 1
commentEnd:
  line: 14770
  column: 2
title: Tabs - Too many
---
How to handle too many tabs.