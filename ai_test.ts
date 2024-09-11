Feature('ai');

// Scenario('test something', ({ I }) => {
// I.amOnPage('https://www.google.com');
//     I.amOnPage('https://en.wikipedia.org/wiki/History_of_music');
//   I.amOnPage('https://www.facebook.com');
//     pause();
// });




Scenario('Verify user is able to login with valid credentials', async ({ I }) => {
    I.amOnPage('https://www.facebook.com/');
    
    // Wait for email field and fill in credentials
    I.waitForElement('[name="email"]', 10);  // Wait for email field to be visible
    I.fillField('[name="email"]', 'gue39852@nowni.com');
    I.fillField('[name="pass"]', 'minhwan210403');
    
    // Wait for and click login button
    I.waitForElement('[name="login"]', 10);  // Wait for login button to be visible
    I.click('[name="login"]');
    
    // Wait for successful login to load (adjust selector and text)
    I.waitForElement('//div[contains(text(), "Home")]', 10);  // Wait for home indicator
    I.see('https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2F%3Fsk%3Dwelcome');  // Adjust to what you see after successful login
    I.wait(10);  // Optional wait to observe the behavior
});


Scenario('Verify user is not able to login with invalid credentials', async ({ I }) => {
    I.amOnPage('https://www.facebook.com/');
    I.waitForElement('[name="email"]', 10);  // Wait for email field
    I.fillField('[name="email"]', 'invalidemail@example.com');
    I.fillField('[name="pass"]', 'invalidpassword');
    I.waitForElement('[name="login"]', 10);  // Wait for the login button
    I.click('[name="login"]');
    I.waitForElement('//div[contains(text(), "The email address or mobile number you entered isn’t connected to an account")]', 10); // Adjust the XPath as necessary
    I.see('The email address or mobile number you entered isn’t connected to an account');
    I.wait(10);  // Optional wait to observe the behavior
});


// Feature('Generate Page Object');

// Scenario('Generate Object on Web Page', async ({ I }) => {
//   const url = 'https://en.wikipedia.org/wiki/History_of_music';
//   let pageObject = I.askForPageObject(url);
//   console.log(pageObject);
// });

// Feature('Self-healing');

// Scenario("Github login", ({ I }) => {
//     I.amOnPage("https://github.com");
//     I.click("Sign in");
//     I.fillField("Username or email address", "davert"); // Updated field label
//     I.fillField("Password", "123345");
//     I.click("anh"); // Corrected the button text
//     I.see("Incorrect username or password."); // Make sure it matches the exact error message
// });