# Appiness_Test

A React-native project for Employee Directory

## Architecture

The architecture of this project includes:

- **Presentational components are separated from screens** .

  Presentational components are small components that are concerned with _how things look_. Containers usually define whole application screens and are concerned with _how things work_: they include presentational components and wire everything together.

  You can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

  When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.

  With Redux, state is shared using global _stores_, and changes are predictable: _actions_ are applied by _reducers_ to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.

  You can [read more about it here](https://redux.js.org/introduction/motivation).

## Requirements

Node 8 or greater is required(recommended v10). Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `npm install` to install the dependencies

## Development Guide

you can run the application in development state by running:

- `npx react-native run-android` - for android
- `npx react-native run-ios` - for ios

## Third party packages used

- `@reduxjs/toolkit`
- `react-redux`
- `react-native-linear-gradient`
- `react-native-communications`
