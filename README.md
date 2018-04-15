# Hospital-Search-Engine

This is a simple search application over a set of patient records. clone this repo or provision an instant dev environment via http://beta.codenvy.com/f?id=qu9bnf9n1h40whho


## Mission

In src/main/java you'll find the starter backend code and in src/main/webapp find the start UI code.
If you start up the application, you'll see a basic search application. It's a simple ember app that hits
an endpoint in src/main/java/com/qpidhealth/qpid/search/services/PatientService.

Including:
  * Making the PatientService filter the results it returns by a case-insensitive, partial match over the document title and contents.
  * Cleaning up the code using better object-oriented design and improving readability.
  * Adding a couple unit tests around your search code.
  
HTML/JavaScript experience, also work on the following including:
  * Improve the result rendering in the UI with better styling of snippet results.
  * Update the search interface to debounce calls to the backend
  * Perform highlighting of the search term in the text results
  * Come up with and add a new feature to the UI, this can be anything your creativity can dream up.


## Running the application

use the build and run command at the top of the development environment. Otherwise, everything ready-to-run with a simple `maven clean install tomee:run`
