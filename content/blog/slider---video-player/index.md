---
name: Slider - Video Player
markup: |
  <div class="spectrum-Slider">
    <div class="spectrum-Slider-labelContainer">
      <label class="spectrum-Slider-label" id="spectrum-Slider-label-16" for="spectrum-Slider-input-16">My Video</label>
      <div class="spectrum-Slider-value">3:48</div>
    </div>
    <div class="spectrum-Slider-controls">
      <div class="spectrum-Slider-track"></div>
      <div class="spectrum-Slider-buffer" style="width: 20%;" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-labelledby="spectrum-Slider-label-16"></div>
      <div class="spectrum-Slider-handle" style="left: 20%;">
        <input type="range" class="spectrum-Slider-input" aria-valuetext="3:48" value="228" min="0" max="760" id="spectrum-Slider-input-16">
      </div>
      <div class="spectrum-Slider-buffer" style="left: 20%; width: 30%;"></div>
      <div class="spectrum-Slider-track"></div>
    </div>
  </div>

  <div class="spectrum-Slider is-disabled">
    <div class="spectrum-Slider-labelContainer">
      <label class="spectrum-Slider-label" id="spectrum-Slider-label-17" for="spectrum-Slider-input-17">My Video</label>
      <div class="spectrum-Slider-value">3:48</div>
    </div>
    <div class="spectrum-Slider-controls">
      <div class="spectrum-Slider-track"></div>
      <div class="spectrum-Slider-buffer" style="width: 20%;" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-labelledby="spectrum-Slider-label-16"></div>
      <div class="spectrum-Slider-handle" tabindex="0" style="left: 20%;">
        <input type="range" class="spectrum-Slider-input" aria-valuetext="3:48" value="228" min="0" max="760" disabled id="spectrum-Slider-input-17">
      </div>
      <div class="spectrum-Slider-buffer" style="left: 20%; right: 50%;"></div>
      <div class="spectrum-Slider-track"></div>
    </div>
  </div>
directory: slider
filename: slider-player
commentStart:
  line: 27695
  column: 1
commentEnd:
  line: 27734
  column: 2
title: Slider - Video Player
---
Displays a buffer for video players.