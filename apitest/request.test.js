const { test, expect, request } = require('@playwright/test');

let userid;

test("GET: Users List", async ({ request }) => {
  try {
    const response = await request.get('https://reqres.in/api/users?page=2');
    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
  } catch (error) {
    console.error("Error fetching users list:", error);
    throw error;
  }
});

test("POST: Create user", async ({ request }) => {
  try {
    const response = await request.post('https://reqres.in/api/users', {
      data: {
        "name": "Milan",
        "job": "QA"
      },
      headers: {
        "Accept": "application/json"
      }
    });

    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(201);
    userid = responseBody.id;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
});

test("PUT: Update user", async ({ request }) => {
  if (!userid) {
    throw new Error("User ID is not set. Make sure to run the POST test first.");
  }

  try {
    const response = await request.put(`https://reqres.in/api/users/${userid}`, {
      data: {
        "name": "Milan",
        "job": "Software QA Engineer"
      },
      headers: {
        "Accept": "application/json"
      }
    });

    const responseBody = await response.json();
    console.log(responseBody);
    expect(response.status()).toBe(200);
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
});

test("DELETE: Delete User", async ({ request }) => {
  if (!userid) {
    throw new Error("User ID is not set. Make sure to run the POST test first.");
  }

  try {
    const response = await request.delete(`https://reqres.in/api/users/${userid}`);
    expect(response.status()).toBe(204);
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
});
