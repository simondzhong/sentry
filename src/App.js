import React from "react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";


Sentry.init({
  dsn: "https://XXXXXXX@sentry.io/123",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function throwError() {
  var userDefinedError = document.getElementById("userDefinedError").value;
  
  if (userDefinedError === "") {
    alert ("Please enter a value in the textbox");
  } else {
    alert("Throwing Error: " + userDefinedError);
    throw new Error(userDefinedError);
  }
}

export default function App() {
  return (
    <div>
	  Set error to throw in JavaScript by entering a value in the following textbox:
	  <br />
	  <code>throw new Error(<input type="text" id="userDefinedError" />);</code>
	  <br />
	  <br />
	  <button id="btn1" onClick={throwError}>Click me to throw the error defined above</button>  
    </div>
  );
}
