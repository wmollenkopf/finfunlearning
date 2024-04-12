# FinFunLearning

## URL:
### [https://finfunlearning.biri.me](https://finfunlearning.biri.me)

## NOTES:
* There is currently no backend server, so once you close your current browser session or refresh to certain pages that would force a relog, you will lose your user associated details for that session.
* * However, a backend could fairly easily be created and integrated if desired using anything that could deliver a JSON format similar to what's currently hardcoded in place.
* The credentials are: `user1`:`password`, `user2`:`password2`, `user3`:`password3`, 
* * There is no school login pages to view, but imagine that it would involve ways to manage subscriptions, student accounts, etc.
* * There's nothing particularly different between those user accounts other than the names of the users.
* There is currently no mobile viewport enabled, but can potentially be enabled in the future -- especially considering the code base is already using bootstrap for it's layout.

## How To Compile and Run:

You'll need to have nodejs installed, and npm as well.

To setup, you cd into the directory, and run:
```bash
npm install
```

If there are issues, you may need a newer version of nodejs (14.0.0 or later required), or you may need to delete the package-lock.json and try again.
The install can have issues when compiled on different OS.

The below is from the original automated `README.md` file generated when it was bootstrapped...
---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).