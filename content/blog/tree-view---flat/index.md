---
id: treeview
name: Tree View - Flat
markup: |
  <ul class="spectrum-TreeView" style="width: 250px">
    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">Layer 1 with a long name that doesn't fit at all</a>
    </li>

    <li class="spectrum-TreeView-item is-open">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        Group 1
      </a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent1">
      <a class="spectrum-TreeView-itemLink" href="#">Layer 2</a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent1">
      <a class="spectrum-TreeView-itemLink" href="#">Layer 3</a>
    </li>

    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">Layer 4</a>
    </li>

    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">Layer 5</a>
    </li>

    <li class="spectrum-TreeView-item is-open">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        Group 2
      </a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent1 is-open">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        Group 3
      </a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent2">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        Group 4
      </a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent3" hidden>
      <a class="spectrum-TreeView-itemLink" href="#">Layer 6</a>
    </li>

    <li class="spectrum-TreeView-item spectrum-TreeView-item--indent3" hidden>
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        Group 5
      </a>
    </li>
  </ul>
directory: treeview
filename: treeview-flat
commentStart:
  line: 20406
  column: 1
commentEnd:
  line: 20487
  column: 2
title: Tree View - Flat
---
A Spectrum tree view drawn without nesting, suitable for infinite scrolling.
With this version of the tree, you must manage the visibility of "child items" manually based on the open state of the "parent item."
