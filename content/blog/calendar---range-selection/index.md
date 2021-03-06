---
name: Calendar - Range Selection
id: calendar
markup: |
  <div class="spectrum-Calendar">
     <div class="spectrum-Calendar-header">
        <div class="spectrum-Calendar-title" role="heading" aria-live="assertive" aria-atomic="true">August 2017</div>
        <button aria-label="Previous" title="Previous" class="spectrum-ActionButton spectrum-ActionButton--quiet spectrum-Calendar-prevMonth">
          <svg class="spectrum-Icon spectrum-UIIcon-ChevronLeftLarge" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-css-icon-ChevronLeftLarge" />
          </svg>
        </button>
        <button aria-label="Next" title="Next" class="spectrum-ActionButton spectrum-ActionButton--quiet spectrum-Calendar-nextMonth">
          <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightLarge" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-css-icon-ChevronRightLarge" />
          </svg>
        </button>
     </div>
     <div class="spectrum-Calendar-body" role="grid" tabindex="0" aria-readonly="true" aria-disabled="false">
       <table role="presentation" class="spectrum-Calendar-table">
          <thead role="presentation">
             <tr role="row">
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Sunday">Su</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Monday">Mo</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Tuesday">Tu</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Wednesday">We</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Thursday">Th</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Friday">Fr</abbr></th>
                <th role="columnheader" scope="col" class="spectrum-Calendar-tableCell"><abbr class="spectrum-Calendar-dayOfWeek" title="Saturday">Sa</abbr></th>
             </tr>
          </thead>
          <tbody role="presentation">
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Sunday, July 30, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">30</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Monday, July 31, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">31</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, August 1, 2017"><span role="presentation" class="spectrum-Calendar-date">1</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Today, Wednesday, August 2, 2017 selected"><span role="presentation" class="spectrum-Calendar-date">2</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, August 3, 2017"><span role="presentation" class="spectrum-Calendar-date">3</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, August 4, 2017"><span role="presentation" class="spectrum-Calendar-date">4</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, August 5, 2017"><span role="presentation" class="spectrum-Calendar-date">5</span></td>
             </tr>
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, August 6, 2017"><span role="presentation" class="spectrum-Calendar-date">6</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, August 7, 2017"><span role="presentation" class="spectrum-Calendar-date">7</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, August 8, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection is-selection-start">8</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, August 9, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection">9</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Thursday, August 10, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection">10</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Friday, August 11, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection is-today">11</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Saturday, August 12, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection is-range-end">12</span></td>
             </tr>
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Sunday, August 13, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection is-range-start">13</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="true" aria-invalid="false" title="Monday, August 14, 2017"><span role="presentation" class="spectrum-Calendar-date is-selected is-range-selection is-selection-end">14</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, August 15, 2017"><span role="presentation" class="spectrum-Calendar-date">15</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, August 16, 2017"><span role="presentation" class="spectrum-Calendar-date">16</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, August 17, 2017"><span role="presentation" class="spectrum-Calendar-date">17</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, August 18, 2017"><span role="presentation" class="spectrum-Calendar-date">18</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, August 19, 2017"><span role="presentation" class="spectrum-Calendar-date">19</span></td>
             </tr>
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, August 20, 2017"><span role="presentation" class="spectrum-Calendar-date">20</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, August 21, 2017"><span role="presentation" class="spectrum-Calendar-date">21</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, August 22, 2017"><span role="presentation" class="spectrum-Calendar-date">22</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, August 23, 2017"><span role="presentation" class="spectrum-Calendar-date">23</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, August 24, 2017"><span role="presentation" class="spectrum-Calendar-date">24</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Friday, August 25, 2017"><span role="presentation" class="spectrum-Calendar-date">25</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Saturday, August 26, 2017"><span role="presentation" class="spectrum-Calendar-date">26</span></td>
             </tr>
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Sunday, August 27, 2017"><span role="presentation" class="spectrum-Calendar-date">27</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Monday, August 28, 2017"><span role="presentation" class="spectrum-Calendar-date">28</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Tuesday, August 29, 2017"><span role="presentation" class="spectrum-Calendar-date">29</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Wednesday, August 30, 2017"><span role="presentation" class="spectrum-Calendar-date">30</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" tabindex="-1" aria-disabled="false" aria-selected="false" aria-invalid="false" title="Thursday, August 31, 2017"><span role="presentation" class="spectrum-Calendar-date">31</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Friday, September 1, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">1</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Saturday, September 2, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">2</span></td>
             </tr>
             <tr role="row">
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Sunday, September 3, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">3</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Monday, September 4, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">4</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Tuesday, September 5, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">5</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Wednesday, September 6, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">6</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Thursday, September 7, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">7</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Friday, September 8, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">8</span></td>
                <td role="gridcell" class="spectrum-Calendar-tableCell" aria-disabled="true" aria-selected="false" aria-invalid="false" title="Saturday, September 9, 2017"><span role="presentation" class="spectrum-Calendar-date is-outsideMonth">9</span></td>
             </tr>
          </tbody>
       </table>
     </div>
  </div>
directory: calendar
filename: calendar-range
commentStart:
  line: 17416
  column: 1
commentEnd:
  line: 17514
  column: 2
title: Calendar - Range Selection
---
A calendar with a range selected.
`.is-selection-start` goes on the first day in the selection, and `.is-range-start` goes on the first day of each week or month in the middle of a selection (but not the first day of the selection).
`.is-selection-end` goes on the last day of the selection, and `.is-range-end` goes on the last day of each week or month in the middle of the selection (but not on the last day of the selection).
