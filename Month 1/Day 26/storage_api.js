// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

// Session Storage
// sessionStorage is tab-scoped and origin-isolated.

// It is not shared across tabs or different origins.

// It's shared with same-origin iframes in the same tab.

// It is automatically cleared when the tab/window is closed.

// localStorage is partitioned by origin only. All documents with the same origin have access to the same localStorage area, and it persists even when the browser is closed and reopened.



// Let’s say you are embedding third-party code from analytics.com into your site news.com
//  Case 1: Third-Party Code via <script> Tag

// <!-- On https://news.com -->
//<script src="https://analytics.com/tracker.js"></script>
// tracker.js is fetched from analytics.com, but it runs in the browsing context of news.com.

// sessionStorage.setItem("key", "value");

// Implication:
// The third-party code has first-party privileges.

// It can read/write to news.com's local/session storage.

// From the browser’s POV, it’s just like native script.





// 📌 Case 2: Third-Party Code via <iframe>
// <iframe src="https://analytics.com/widget.html"></iframe>

// The iframe creates a new browsing context.

// The content inside (widget.html) runs with its own origin: analytics.com.
// Inside iframe code (https://analytics.com)
// sessionStorage.setItem("key", "value");


//  This writes to analytics.com’s storage, not news.com.

// ✅ Implication:
// The third-party code is sandboxed to its origin.

// Cannot access news.com's cookies, localStorage, or sessionStorage (due to the Same-Origin Policy).

