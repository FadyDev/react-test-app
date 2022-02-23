# react-test-app

### Motivation:

This front end app is built to assesst in retrieving data from an API and doing some operations on it (i.e. adding, removing, and searching exsisting data).

### App's functionality

- The app is making an API-Call to a fake API and retrieves some Post data.
- The posts retrieved are displayed in a List of components, each contains a title and a body. The body is hidden and is only displayed when the title is clicked.
- Each post contains a delete button inside its body to remove the post from the list.
- A from is implemented with to required fields to add new posts.
- An instant search field is also implemented to filter the retrieved posts instantly when entering letters or complete words.

### Technologies used:

The main stack used consists of React with JavaScript along with some dependencies needed for both the simple UI design and the core functionality. The dependencies are axios for API calls, uuid for generating unique keys for the components rendered from lists, react accordion for posts design and behaviour, and little Bootstrap. A loading spinner is also implemented with the help of an article (linked in the component code).

### Trade offs and Things that could have been done better

The implementation took me 3 long sessions to finish (I am a full-time employee right now), with more time I could have add more features and more error handling. Moreover, I could also used TypeScript as the development language but it is still a learn in progress. Maybe I will concider to re-implement the same app using TypeScript and Angular very soon.
I had to trade off the genarl look of the app in favor of the logic. with more time I would do more styling and my be some extra features too. But sure I will revist the project after practicing some more missing concepts. One more trade off was the components planning, as with more time I could planned to divide a couple of components into smaller reusable components.

### Production
This application cannot be considered production-ready. I needs firstly to be enhanced with logging and monitoring mechanisms. Taking into consideration my current level of experience with such tools along with the time constraint, Production readiness was a bit hard be achieved.