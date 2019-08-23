#SAC 2019

## Building
The App consists of both front-end (React-Native) and back-end(Node.js/express).

### Development
To grab all relevant dependencies before starting, do the following:
- remove `package-lock.json` file
- remove `node_modules` folder
- run `npm install`

Once all dependencies are installed, the main command to start the app and server is:
```
npm start
```
which runs the following scripts: 
- `npm run start:front` for front-end
- `npm run start:back` for back-end

This script simultaneously runs front-end dev server on Expo server and back-end on port 3000. Code in both front-end and back-end are updated live, thanks to Expo hot-reloader (front-end) and Nodemon (back-end)

