---
id: selectlist
name: Menu
markup: >
  <div style="display: flex; align-items: flex-start; justify-content:
  space-around;">

    <div class="spectrum-Popover is-open" style="position: relative">
      <ul class="spectrum-Menu" role="menu">
        <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Deselect</span>
        </li>
        <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Select Inverse</span>
        </li>
        <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Feather...</span>
        </li>
        <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Select and Mask...</span>
        </li>
        <li class="spectrum-Menu-divider" role="separator"></li>
        <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
          <span class="spectrum-Menu-itemLabel">Save Selection</span>
        </li>
        <li class="spectrum-Menu-item is-disabled" role="menuitem" aria-disabled="true">
          <span class="spectrum-Menu-itemLabel">Make Work Path</span>
        </li>
      </ul>
    </div>

    <div class="spectrum-Popover is-open" style="position: relative">
      <ul class="spectrum-Menu" role="menu">
        <li role="presentation">
          <span class="spectrum-Menu-sectionHeading" id="menu-heading-category-1"  aria-hidden="true">Section Heading</span>
          <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-category-1">
            <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
              <span class="spectrum-Menu-itemLabel">Action 1</span>
            </li>
            <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
              <span class="spectrum-Menu-itemLabel">Action 2</span>
            </li>
            <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
              <span class="spectrum-Menu-itemLabel">Action 3</span>
            </li>
          </ul>
        </li>
        <li class="spectrum-Menu-divider" role="separator"></li>
        <li role="presentation">
          <span class="spectrum-Menu-sectionHeading" id="menu-heading-category-2"  aria-hidden="true">Section Heading</span>
          <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-category-1" aria-disabled="true">
            <li class="spectrum-Menu-item" role="menuitem" tabindex="0">
              <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="SaveFloppy">
                <use xlink:href="#spectrum-icon-18-SaveFloppy"></use>
              </svg>
              <span class="spectrum-Menu-itemLabel">Save</span>
            </li>
            <li class="spectrum-Menu-item is-disabled" role="menuitem" aria-disabled="true">
              <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="DataDownload">
                <use xlink:href="#spectrum-icon-18-DataDownload"></use>
              </svg>
              <span class="spectrum-Menu-itemLabel">Download</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="spectrum-Popover is-open" style="position: relative; width: 200px">
      <ul class="spectrum-Menu" role="listbox">
        <li role="presentation">
          <span class="spectrum-Menu-sectionHeading" id="menu-heading-sf" aria-hidden="true">San Francisco</span>
          <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-sf">
            <li class="spectrum-Menu-item" role="option" aria-selected="true" tabindex="0">
              <span class="spectrum-Menu-itemLabel">Financial District</span>
            </li>
            <li class="spectrum-Menu-item" role="option" tabindex="0">
              <span class="spectrum-Menu-itemLabel">South of Market</span>
            </li>
            <li class="spectrum-Menu-item" role="option" tabindex="0">
              <span class="spectrum-Menu-itemLabel">North Beach</span>
            </li>
          </ul>
        </li>
        <li class="spectrum-Menu-divider" role="separator"></li>
        <li role="presentation">
          <span class="spectrum-Menu-sectionHeading" id="menu-heading-oak" aria-hidden="true">Oakland</span>
          <ul class="spectrum-Menu" role="group" aria-labelledby="menu-heading-oak">
            <li class="spectrum-Menu-item" role="option" tabindex="0">
              <span class="spectrum-Menu-itemLabel">City Center</span>
            </li>
            <li class="spectrum-Menu-item is-disabled" role="option">
              <span class="spectrum-Menu-itemLabel">Jack London Square</span>
            </li>
            <li class="spectrum-Menu-item is-selected" role="option" tabindex="0">
              <span class="spectrum-Menu-itemLabel">My best friend's mom's house in the burbs just off Silverado street</span>
              <svg class="spectrum-Icon spectrum-UIIcon-CheckmarkMedium spectrum-Menu-checkmark" focusable="false" aria-hidden="true">
                <use xlink:href="#spectrum-css-icon-CheckmarkMedium" />
              </svg>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
directory: menu
filename: menu-default
commentStart:
  line: 29042
  column: 1
commentEnd:
  line: 29151
  column: 2
title: Menu
---
No description