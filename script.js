//your JS code here. If required.
// Function to set a cookie with the user's font preferences
function setFontPreferences() {
  const form = document.getElementById("fontForm");
  const fontSizeInput = form.elements["fontsize"];
  const fontColorInput = form.elements["fontcolor"];

  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Set cookies to store the preferences
  document.cookie = `fontsize=${fontSize}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
  document.cookie = `fontcolor=${fontColor}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

// Function to apply the user's font preferences when the page loads
function applyFontPreferences() {
  const fontSize = getCookie("fontsize");
  const fontColor = getCookie("fontcolor");

  if (fontSize) {
    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
  }
  if (fontColor) {
    document.documentElement.style.setProperty("--fontcolor", fontColor);
  }
}

// Event listener to apply font preferences when the page loads
document.addEventListener("DOMContentLoaded", applyFontPreferences);

// Event listener to handle form submission
const fontForm = document.getElementById("fontForm");
fontForm.addEventListener("submit", function (event) {
  event.preventDefault();
  setFontPreferences();
});
