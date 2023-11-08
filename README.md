# SDK Configuration Project

Speakeasy generates SDKs based on OpenAPI documents. The deliverable we create for our customers is a GitHub repository containing an OpenAPI document, some configuration, and a GitHub workflow that reads in those two things and outputs an SDK in that repo. Most customers have many SDK languages configured, each of which is generated from the same OpenAPI document but has unique configuration and lives in its own repo.

Setting up and managing these repos and their config files can be a confusing process, so we want to build some UX to make it easier. This UX will serve as both a setup and management page for SDKs. For example, a customer might use it to add a new language or update the configs for an existing SDK language.

**Your task is to design and implement this UX.** Importantly, the “design” bit of this task should be more focused on how the information is structured, displayed, and captured, rather than how pretty it looks (though pretty is good too 🙂).

**The information the UX needs to capture is:**

- An OpenAPI Spec
- Which languages are selected
- For each language:
    - The repo to target
    - Some various configuration (varies per language, all are text fields)
    - Whether or not to publish that language
        - If publishing is enabled, some additional publishing-specific configuration (also varies per language and is text fields)

**Additional details about the task:**

- For the purposes of this task, the supported languages are Go, Typescript, and Python. However, you should assume that many more languages will be added.
- You do not need to produce any formal designs. The end deliverable should just be a React app
- You should implement your designs using React and Typescript.
- You do not need to do anything with the captured information, but it should be captured in a way that would make it easy to work with if we were really building this out

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
