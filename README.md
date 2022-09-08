# Task 1 - color switcher
Do this task in the 01-color-switcher.html and 01-color-switcher.js files. Check out the demo video of the switcher.

In HTML, there are "Start" and "Stop" buttons.

<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>

Write a script that, after clicking the "Start" button, changes the <body> background color once a second to a random value using the inline style. When clicking on the "Stop" button, background color change must stop.

#  Task 2 - countdown timer
Do this task in the 02-timer.html and 02-timer.js files. Write a timer script that counts down to a specific date. Such a timer can be used in blogs and online stores, event-logging pages, during maintenance, etc. Watch a demo video of the timer.

# Task 3 - promise generator
Do this task in the 03-promises.html and 03-promises.js files.

In HTML, there is form markup; in its fields, the user will enter the first delay in milliseconds, the delay increment for each promise after the first one and the number of promises to be created.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

Write a script that, when submitting the form, calls the createPromise(position, delay) function as many times as you entered in the amount field. On each call, pass it the number of the promise to be created (position) and the delay given the first delay (delay) and step (step) entered by the user.

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
