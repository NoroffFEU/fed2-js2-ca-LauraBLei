import { API_AUTH_REGISTER } from "../constants";
import { headers } from "../headers";

/**
 * Function that will register a user
 * @param {object} userInfo - userinfo object, that container name, email and password.
 * @param {string} userInfo.name - user name
 * @param {string} userInfo.email - user email
 * @param {string} userInfo.password - user password
 * @example
 * ```js
 * register({name: "Thor", email: "email@stud.noroff.no", password: "password123"})
 * ```
 */

export async function register({ name, email, password }) {
  const body = {
    name: name,
    email: email,
    password: password,
  };

  try {
    const response = await fetch(API_AUTH_REGISTER, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(body),
    });
    if (response.ok) {
      alert(`Successfully created user "${name}"`);
      window.location.href = "/auth/login/";
    }
  } catch (error) {
    alert("Something went wrong trying to register an account");
  }
}
