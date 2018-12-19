---
name: Circle Loader - Over Background - Small
markup: >
  <div style="width: 200px; height: 200px; background-color: rgba(0,0,0,0.4);
  display: flex; align-items: center; justify-content: center;">
    <div class="spectrum-CircleLoader spectrum-CircleLoader--small spectrum-CircleLoader--overBackground">
      <div class="spectrum-CircleLoader-track"></div>
      <div class="spectrum-CircleLoader-fills">
        <div class="spectrum-CircleLoader-fillMask1">
          <div class="spectrum-CircleLoader-fillSubMask1">
            <div class="spectrum-CircleLoader-fill"></div>
          </div>
        </div>
        <div class="spectrum-CircleLoader-fillMask2">
          <div class="spectrum-CircleLoader-fillSubMask2">
            <div class="spectrum-CircleLoader-fill"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <input type="number" min="0" max="100" style="display: block;"
  onchange="changeLoader(this.previousElementSibling.firstElementChild,
  this.value)"/>
directory: circleloader
filename: circleloader-small-over-background
commentStart:
  line: 12886
  column: 1
commentEnd:
  line: 12912
  column: 2
title: Circle Loader - Over Background - Small
---
A Spectrum loader of default type (round) for using over a background color.