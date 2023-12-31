# Project Overview
## Task
1. Handle authentication using local storage.
2. Create a ui as shown in the image ,make 2 pages - signup and profile
3. On clicking signup, use local storage to create the state of the user.
4. The state of the user saved in localstorage should contain all the properties of the user, plus should also consist of an access token - let this access token be a random 16-byte string generated by you randomly.
5. Once there is the state of user in the localstorage, redirect the user to a page called /profile. Display user’s details there
6. On clicking of the logout button, set all the states back to null and also get rid of the access token.
7. Using scripts ensure that when a user manually tries to go to /profile, if the local storage does not contain the accesstoken the user is redirected to the signup page.
8. Similarly if the localstorage has an accesstoken and tries to go to the signup page, using scripts ensures that the user can't do so and is redirected to the profile page.
9. Show success and errors as well as shown in the UI. All fields are mandatory for signup and similarly on successfully signing up show the message in green text and then redirect to /profile

## Relevant Links
Figma Link- https://www.figma.com/file/GWUrnugwWlzzxjMJewgoR8/Contest?type=design&node-id=0-1&t=GolX2qVh9DEW8F30-0

## Marking Scheme
1. Handle authentication using Local Storage (10 marks)
2. Proper implementation of authentication functionality using Local Storage
3. Create UI and pages (20 marks)
  Creation of UI components for signup and profile pages
  Proper implementation of the two pages as per the Figma design
4. Store user state in local storage (10 marks)
   Proper implementation of storing the user state in local storage on signup

5. Create user state with access token (10 marks)
   Creation of user state with all user properties and an access token

6. Redirect to profile page and display user details (10 marks)
  Redirecting the user to the /profile page after successful signup
  Proper display of user details on the profile page
7. Logout functionality (10 marks)
  Setting local storage back to null and removing the access token on logout

8. Redirect to signup if no access token, redirect to profile if access token (10 marks)
  i. Using scripts to redirect to the signup page if the local storage does not contain an access token when accessing /profile
  ii.Using scripts to redirect to the profile page if the local storage contains an access token when accessing the signup page

9. Display success and error messages (10 marks)
  Proper implementation of success and error messages as shown in the UI

10. Validation and redirection (5 marks)
  Implementing mandatory field validation
  Redirecting to the profile page after successful signup

11. Deployment(5 marks)
