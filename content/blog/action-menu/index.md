---
name: Action Menu
markup: >
  <button class="spectrum-ActionButton spectrum-ActionButton--quiet
  is-selected">
    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-More" />
    </svg>
    <span class="spectrum-ActionButton-label">More Actions</span>
  </button>

  <br>


  <div class="spectrum-Popover spectrum-Popover--bottom is-open">
    <ul class="spectrum-Menu" role="menu">
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 1</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 2</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 3</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 4</span>
      </li>
    </ul>
  </div>


  <div class="dummy-spacing"></div>


  <button class="spectrum-ActionButton spectrum-ActionButton--quiet
  is-selected">
    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-More" />
    </svg>
  </button>

  <br>


  <div class="spectrum-Popover spectrum-Popover--bottom is-open">
    <ul class="spectrum-Menu" role="menu">
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 1</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 2</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 3</span>
      </li>
      <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
        <span class="spectrum-Menu-itemLabel">Action 4</span>
      </li>
    </ul>
  </div>


  <div class="dummy-spacing"></div>


  <button class="spectrum-ActionButton spectrum-ActionButton--quiet">
    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-icon-18-More" />
    </svg>
    <span class="spectrum-ActionButton-label">More Actions</span>
  </button>
directory: actionmenu
filename: actionmenu
commentStart:
  line: 16564
  column: 1
commentEnd:
  line: 16631
  column: 2
title: Action Menu
---
Simply an action button with a Popover. Note that the `is-selected` class should be applied to the button when the menu is open. Also note the accessibility roles are different for an action menu vs a normal menu.