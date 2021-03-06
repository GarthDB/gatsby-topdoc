---
name: Dialog
components:
  dialog-alert-confirmation:
    name: Dialog - Alert Confirmation
    status: Verified
    description: >-
      An confirmation alert dialog has specific button styles that should be
      used.
    demoClassName: cssdocs-Overlay-example
    markup: >
      <button class="spectrum-Button spectrum-Button--overBackground
      cssdocs-Overlay-showButton"
      onclick="openDialog(this.nextElementSibling)">Open Configuration
      Dialog</button>


      <!-- cssdocs-Dialog class is included for demo purposes only -->

      <div class="spectrum-Dialog spectrum-Dialog--alert is-open
      cssdocs-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Enable Smart Filters?</h2>
        </div>
        <div class="spectrum-Dialog-content">
          Smart filters are nondestructive and will preserve your original images.
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Cancel</button>
          <button class="spectrum-Button spectrum-Button--cta" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Enable</button>
        </div>
      </div>
  dialog-alert-information:
    name: Dialog - Alert Information
    status: Verified
    description: >-
      An information alert dialog has specific button styles that should be
      used.
    demoClassName: cssdocs-Overlay-example
    markup: >
      <button class="spectrum-Button spectrum-Button--overBackground
      cssdocs-Overlay-showButton"
      onclick="openDialog(this.nextElementSibling)">Open Information
      Dialog</button>


      <!-- cssdocs-Dialog class is included for demo purposes only -->

      <div class="spectrum-Dialog spectrum-Dialog--alert is-open
      cssdocs-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Connect to WiFi</h2>
        </div>
        <div class="spectrum-Dialog-content">
          Please connect to WiFi to sync your projects or go to Settings to change your preferences.
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Cancel</button>
          <button class="spectrum-Button spectrum-Button--primary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Continue</button>
        </div>
      </div>
  dialog-alert-destructive:
    name: Dialog - Alert Destructive
    status: Verified
    description: >-
      An destructive alert dialog has specific button styles that should be
      used.
    demoClassName: cssdocs-Overlay-example
    markup: >
      <button class="spectrum-Button spectrum-Button--overBackground
      cssdocs-Overlay-showButton"
      onclick="openDialog(this.nextElementSibling)">Open Destructive
      Dialog</button>


      <!-- cssdocs-Dialog class is included for demo purposes only -->

      <div class="spectrum-Dialog spectrum-Dialog--alert is-open
      cssdocs-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Delete 3 Documents</h2>
        </div>
        <div class="spectrum-Dialog-content">
          Are you sure you want to delete the 3 selected documents?
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Cancel</button>
          <button class="spectrum-Button spectrum-Button--warning" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Delete</button>
        </div>
      </div>
  dialog-alert-error:
    name: Dialog - Alert Error
    status: Verified
    description: An error alert dialog has an error icon in the header.
    demoClassName: cssdocs-Overlay-example
    markup: >
      <button class="spectrum-Button spectrum-Button--overBackground
      cssdocs-Overlay-showButton"
      onclick="openDialog(this.nextElementSibling)">Open Error Dialog</button>


      <!-- cssdocs-Dialog class is included for demo purposes only -->

      <div class="spectrum-Dialog spectrum-Dialog--error spectrum-Dialog--alert
      is-open cssdocs-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Unable to Share</h2>
          <svg class="spectrum-Icon spectrum-UIIcon-AlertMedium spectrum-Dialog-typeIcon" focusable="false" aria-hidden="true">
            <use xlink:href="#spectrum-css-icon-AlertMedium" />
          </svg>
        </div>
        <div class="spectrum-Dialog-content">
          An error occurred while sharing your project. Please verify the email address and try again.
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--primary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">OK</button>
        </div>
      </div>
  dialog-alert-3buttons:
    name: Dialog - Alert 3 buttons
    status: Verified
    description: An alert dialog can have up to 3 buttons.
    demoClassName: cssdocs-Overlay-example
    markup: >
      <button class="spectrum-Button spectrum-Button--overBackground
      cssdocs-Overlay-showButton"
      onclick="openDialog(this.nextElementSibling)">Open 3 Button
      Dialog</button>


      <!-- cssdocs-Dialog class is included for demo purposes only -->

      <div class="spectrum-Dialog spectrum-Dialog--alert is-open
      cssdocs-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Rate This App</h2>
        </div>
        <div class="spectrum-Dialog-content">
          If you enjoy our app, would you mind taking a moment to rate it?
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">No, Thanks</button>
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Remind Me Later</button>
          <button class="spectrum-Button spectrum-Button--primary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Rate Now</button>
        </div>
      </div>
  dialog-scrolling:
    name: Dialog - Scrolling
    ignoreDNA: true
    dnaStatus: Precursor
    status: Unverified
    description: >-
      A dialog without `.spectrum-Dialog--alert` can expand to a larger size to
      house larger contents.
    markup: >
      <button class="spectrum-Button spectrum-Button--primary"
      onclick="openDialog(this.nextElementSibling)">Open Scrolling
      Dialog</button>


      <div class="spectrum-Dialog">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">EULA</h2>
        </div>
        <div class="spectrum-Dialog-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div class="spectrum-Dialog-footer">
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Decline</button>
          <button class="spectrum-Button spectrum-Button--primary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Accept</button>
        </div>
      </div>
  dialog-fullscreen:
    name: Dialog - Fullscreen
    status: Unverified
    description: >-
      A fullscreen dialog will automatically fill almost all of the available
      screen space.
    markup: >
      <button variant="primary" class="spectrum-Button spectrum-Button--primary"
      onclick="openDialog(this.nextElementSibling)">Open Fullscreen
      Dialog</button>


      <div class="spectrum-Dialog spectrum-Dialog--fullscreen">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Default Dialog - Fullscreen</h2>
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Cancel</button>
          <button class="spectrum-Button spectrum-Button--cta" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Save</button>
        </div>
        <div class="spectrum-Dialog-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
        </div>
        <div class="spectrum-Dialog-footer">
          Anything in the footer is sticky and aligned right.
        </div>
      </div>
  dialog-fullscreentakeover:
    name: Dialog - Fullscreen Takeover
    status: Unverified
    description: A fullscreen takeover dialog will fill all of the available screen space.
    markup: >
      <button class="spectrum-Button spectrum-Button--primary"
      onclick="openDialog(this.nextElementSibling, false)">Open Fullscreen
      Takeover Dialog</button>


      <div class="spectrum-Dialog spectrum-Dialog--fullscreenTakeover">
        <div class="spectrum-Dialog-header">
          <h2 class="spectrum-Dialog-title">Fullscreen Takeover</h2>
          <button class="spectrum-Button spectrum-Button--secondary" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Cancel</button>
          <button class="spectrum-Button spectrum-Button--cta" onclick="closeDialog(this.closest('.spectrum-Dialog'))">Save</button>
        </div>
        <div class="spectrum-Dialog-content">
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
          This is a fullscreen takeover dialog.<br>
        </div>
        <div class="spectrum-Dialog-footer">
          Anything in the footer is sticky and aligned right.
        </div>
      </div>
directory: dialog
filename: dialog
commentStart:
  line: 13364
  column: 1
commentEnd:
  line: 13680
  column: 2
title: Dialog
---
No description