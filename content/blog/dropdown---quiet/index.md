---
name: Dropdown - Quiet
status: Verified
markup: >
  <h4>Closed</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger" aria-haspopup="true">
      <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>


  <h4>Open</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger is-selected" aria-haspopup="true">
      <span class="spectrum-Dropdown-label">Ballard</span>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>

  <div class="spectrum-Popover spectrum-Popover--bottom
  spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open"
  style="display: block;">
    <ul class="spectrum-Menu" role="listbox">
      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Ballard</span>
        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />
        </svg>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Fremont</span>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Greenwood</span>
      </li>
      <li class="spectrum-Menu-divider" role="separator"></li>
      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">
        <span class="spectrum-Menu-itemLabel">United States of America</span>
      </li>
    </ul>
  </div>


  <div class="dummy-spacing"></div>


  <h4>With Thumbnails</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger is-selected" aria-haspopup="true">
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">
        <use xlink:href="#spectrum-icon-18-Image" />
      </svg>
      <span class="spectrum-Dropdown-label">Ballard</span>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>

  <div class="spectrum-Popover spectrum-Popover--bottom
  spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open"
  style="display: block;">
    <ul class="spectrum-Menu" role="listbox">
      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">
          <use xlink:href="#spectrum-icon-18-Image" />
        </svg>
        <span class="spectrum-Menu-itemLabel">Ballard</span>
        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />
        </svg>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">
          <use xlink:href="#spectrum-icon-18-Image" />
        </svg>
        <span class="spectrum-Menu-itemLabel">Fremont</span>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">
          <use xlink:href="#spectrum-icon-18-Image" />
        </svg>
        <span class="spectrum-Menu-itemLabel">Greenwood</span>
      </li>
      <li class="spectrum-Menu-divider" role="separator"></li>
      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Image">
          <use xlink:href="#spectrum-icon-18-Image" />
        </svg>
        <span class="spectrum-Menu-itemLabel">United States of America</span>
      </li>
    </ul>
  </div>


  <div class="dummy-spacing"></div>


  <h4>Disabled</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-disabled">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet spectrum-Dropdown-trigger" disabled aria-haspopup="true">
      <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>


  <h4>Closed</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-invalid">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" aria-haspopup="true">
      <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>


  <h4>Open</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-open is-invalid">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" aria-haspopup="true">
      <span class="spectrum-Dropdown-label">Ballard</span>
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>

  <div class="spectrum-Popover spectrum-Popover--bottom
  spectrum-Dropdown-popover spectrum-Dropdown-popover--quiet is-open"
  style="display: block;">
    <ul class="spectrum-Menu" role="listbox">
      <li class="spectrum-Menu-item is-selected" role="option" aria-selected="true" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Ballard</span>
        <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />
        </svg>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Fremont</span>
      </li>
      <li class="spectrum-Menu-item" role="option" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Greenwood</span>
      </li>
      <li class="spectrum-Menu-divider" role="separator"></li>
      <li class="spectrum-Menu-item is-disabled" role="option" aria-disabled="true">
        <span class="spectrum-Menu-itemLabel">United States of America</span>
      </li>
    </ul>
  </div>


  <div class="dummy-spacing"></div>


  <h4>Disabled</h4>

  <div class="spectrum-Dropdown spectrum-Dropdown--quiet is-invalid
  is-disabled">
    <button class="spectrum-FieldButton spectrum-FieldButton--quiet is-invalid spectrum-Dropdown-trigger" disabled aria-haspopup="true">
      <span class="spectrum-Dropdown-label is-placeholder">Select a Country</span>
      <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
        <use xlink:href="#spectrum-icon-18-Alert" />
      </svg>
      <svg class="spectrum-Icon spectrum-UIIcon-ChevronDownMedium spectrum-Dropdown-icon" focusable="false" aria-hidden="true">
        <use xlink:href="#spectrum-css-icon-ChevronDownMedium" />
      </svg>
    </button>
  </div>
directory: dropdown
filename: dropdown-quiet
commentStart:
  line: 15785
  column: 1
commentEnd:
  line: 15951
  column: 2
title: Dropdown - Quiet
---
No description