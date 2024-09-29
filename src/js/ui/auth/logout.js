/**
 * Log the user out - removes the info from local storage
 * @example
 * ```js
 * button.addEventListener("click", onLogout);
 * ```
 */

export function onLogout() {
  localStorage.removeItem("userinfo");
  localStorage.removeItem("token");
  window.location.href = "/auth/login/";
}
