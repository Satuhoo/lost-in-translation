# Lost in Translation

The application which translates entered English words and short sentences to sign language. It is a single page application and it uses local storage to save information about user and latest translations. It is developed by using React.

## Pages

Navigating between the pages is developed by using react-router. The application requires the username to navigate to translator or profile pages, otherwise it redirects user back to the login page.

### Login page

The login page is displayed to the users who are not logged in the application. After clicking the log in button, the application handles the logging in and checks if the entered username it valid. In this case valid username means something else than empty value. After logging in, the application navigates to the translation page.

### Translation page

The translation page provides to user the opportunity to translate any english words or sentences to sign language. Result is shown in the "translated" box with using sign images. The translator recognize only english letters and if there is numbers or special characters in the input word/sentence, the warning text it shown above the result box. All letters are translated on that word/sentence. 

### Profile page

The translator saves the latest ten translations to local storage and they are shown in the profile page. The page contains also log out button, which clears all data from the local storage and redirects the user back to the login page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.