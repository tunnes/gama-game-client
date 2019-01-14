# Challenge Client


### Requirements
- [Node v9.8.0](https://nodejs.org/en/blog/release/v9.8.0/)
- [NPM v9.6.8](https://www.npmjs.com/package/npm/v/5.6.0)

### Usage
assuming you already have the node configured in its correct version and
it is with the API published on port 3000...
````
npm install
npm run webpack:server
````
### Build
````
npm run webpack:build
````
### Developer observations:
Even with the long time to develop the challenge, I leave below some items that
I consider important but have not had time to solve:
- [ ] Uncouple mote the side effects in the sagas.
- [ ] Display controlled API errors with app messages.
- [ ] Create specs with [Jest](https://jestjs.io/).
- [ ] Configure an linter, [ESlint](https://eslint.org/) sure xD!
- [ ] Host the app in heroku with superstatic.
- [ ] Reduce the number of request to update the main state.

If you are interested in evaluating my most proud project is an real time chat,
with react and all this project stack with rails and action cable in server:

- [chat-client](https://github.com/tunnes/chat-client)
- [chat-client](https://github.com/tunnes/chat-server)