---
id: treeview
name: Tree View - Nested with icons
markup: |
  <ul class="spectrum-TreeView" style="width: 250px">
    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
          <use xlink:href="#spectrum-icon-18-Layers"></use>
        </svg>
        Layer 1
      </a>
    </li>

    <li class="spectrum-TreeView-item is-open">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
          <use xlink:href="#spectrum-icon-18-Folder"></use>
        </svg>
        Group 1
      </a>
      <ul class="spectrum-TreeView">
        <li class="spectrum-TreeView-item">
          <a class="spectrum-TreeView-itemLink" href="#">
            <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
              <use xlink:href="#spectrum-icon-18-Layers"></use>
            </svg>
            Layer 2
          </a>
        </li>
        <li class="spectrum-TreeView-item">
          <a class="spectrum-TreeView-itemLink" href="#">
            <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
              <use xlink:href="#spectrum-icon-18-Layers"></use>
            </svg>
            Layer 3
          </a>
        </li>
      </ul>
    </li>

    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
          <use xlink:href="#spectrum-icon-18-Layers"></use>
        </svg>
        Layer 4
      </a>
    </li>
    <li class="spectrum-TreeView-item">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
          <use xlink:href="#spectrum-icon-18-Layers"></use>
        </svg>
        Layer 5
      </a>
    </li>

    <li class="spectrum-TreeView-item is-open">
      <a class="spectrum-TreeView-itemLink" href="#">
        <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
          <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
        </svg>
        <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
          <use xlink:href="#spectrum-icon-18-Folder"></use>
        </svg>
        Group 2
      </a>
      <ul class="spectrum-TreeView">
        <li class="spectrum-TreeView-item is-open">
          <a class="spectrum-TreeView-itemLink" href="#">
            <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
              <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
            </svg>
            <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
              <use xlink:href="#spectrum-icon-18-Folder"></use>
            </svg>
            Group 3
          </a>
          <ul class="spectrum-TreeView">
            <li class="spectrum-TreeView-item">
              <a class="spectrum-TreeView-itemLink" href="#">
                <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
                  <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
                </svg>
                <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
                  <use xlink:href="#spectrum-icon-18-Folder"></use>
                </svg>
                Group 4
              </a>
              <ul class="spectrum-TreeView">
                <li class="spectrum-TreeView-item">
                  <a class="spectrum-TreeView-itemLink" href="#">
                    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Layers">
                      <use xlink:href="#spectrum-icon-18-Layers"></use>
                    </svg>
                    Layer 6
                  </a>
                </li>
                <li class="spectrum-TreeView-item">
                  <a class="spectrum-TreeView-itemLink" href="#">
                    <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightMedium spectrum-TreeView-indicator" focusable="false" aria-hidden="true">
                      <use xlink:href="#spectrum-css-icon-ChevronRightMedium" />
                    </svg>
                    <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Folder">
                      <use xlink:href="#spectrum-icon-18-Folder"></use>
                    </svg>
                    Group 5
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ui>
    </li>
  </ul>
directory: treeview
filename: treeview-icons
commentStart:
  line: 20528
  column: 1
commentEnd:
  line: 20654
  column: 2
title: Tree View - Nested with icons
---
A nested Spectrum tree view with icons
