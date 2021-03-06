---
name: Search Within
markup: |
  <h4>Default</h4>
  <form class="spectrum-SearchWithin">
    <div class="spectrum-Dropdown">
      <button type="button" class="spectrum-FieldButton spectrum-Dropdown-trigger" aria-haspopup="true">
        <span class="spectrum-Dropdown-label">All</span>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
        </svg>
      </button>
    </div>
    <input type="text" placeholder="Search" class="spectrum-Textfield">
    <button type="reset" class="spectrum-ClearButton">
      <svg class="spectrum-Icon spectrum-UIIcon-CrossSmall" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-CrossSmall" />
      </svg>
    </button>
  </form>

  <h4>Open</h4>
  <form class="spectrum-SearchWithin" style="margin-bottom: 180px;">
    <div class="spectrum-Dropdown is-open">
      <button type="button" class="spectrum-FieldButton spectrum-Dropdown-trigger is-selected" aria-haspopup="true">
        <span class="spectrum-Dropdown-label">All</span>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
        </svg>
      </button>
    </div>
    <input type="text" placeholder="Search" class="spectrum-Textfield">
    <button type="reset" class="spectrum-ClearButton">
      <svg class="spectrum-Icon spectrum-UIIcon-CrossSmall" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-CrossSmall" />
      </svg>
    </button>

    <div class="spectrum-Popover is-open" style="position: absolute; top: 38px; left: 0;">
      <ul class="spectrum-Menu" role="listbox">
        <li class="spectrum-Menu-item is-selected" role="option" tabindex="0">
          <span class="spectrum-Menu-itemLabel">All</span>
        </li>
        <li class="spectrum-Menu-item" role="option" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Campaigns</span>
        </li>
        <li class="spectrum-Menu-item" role="option" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Audiences</span>
        </li>
        <li class="spectrum-Menu-item" role="option" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Tags</span>
        </li>
      </ul>
    </div>
  </form>

  <h4>Default (Changed Selection)</h4>
  <form class="spectrum-SearchWithin">
    <div class="spectrum-Dropdown">
      <button type="button" class="spectrum-FieldButton spectrum-Dropdown-trigger" aria-haspopup="true">
        <span class="spectrum-Dropdown-label">Campaigns</span>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
        </svg>
      </button>
    </div>
    <input type="text" placeholder="Search" class="spectrum-Textfield">
    <button type="reset" class="spectrum-ClearButton">
      <svg class="spectrum-Icon spectrum-UIIcon-CrossSmall" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-CrossSmall" />
      </svg>
    </button>
  </form>

  <h4>Disabled</h4>
  <form class="spectrum-SearchWithin">
    <div class="spectrum-Dropdown is-disabled">
      <button type="button" class="spectrum-FieldButton spectrum-Dropdown-trigger" disabled aria-haspopup="true">
        <span class="spectrum-Dropdown-label">All</span>
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
        </svg>
      </button>
    </div>
    <input type="text" placeholder="Search" class="spectrum-Textfield" value="Term" disabled>
    <button type="reset" class="spectrum-ClearButton" disabled>
      <svg class="spectrum-Icon spectrum-UIIcon-CrossSmall" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-CrossSmall" />
      </svg>
    </button>
  </form>
directory: searchwithin
filename: searchwithin
commentStart:
  line: 19017
  column: 1
commentEnd:
  line: 19113
  column: 2
title: Search Within
---
Override the width of the component where necessary.