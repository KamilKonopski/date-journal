# Date Journal App

This is a mobile app built with React Native and Expo to create a journal of memorable dates. The app allows users to add, view, and edit cards representing special moments with images, descriptions, and locations. It also includes task management features for each date, with modal interactions to mark tasks as completed or not.

## Features

Card Viewer: Swipe through horizontally scrollable cards, each representing a memorable date.

Image Editing: Add or change images for each date.

Location Editing: Edit the location of the date directly on the card.

Task Management: Mark tasks as completed, not done, or not started using a modal.

Cover Screen: The home screen where users can edit the title and start the journal.

## Components

AnimatedCard: A card component with scaling animation based on the current page index.

DateCard: A detailed card that displays the title, description, image, and location for each date.

TaskModal: A modal that allows the user to update the task status associated with each date card.

CardScreen: Displays a list of DateCard components in a horizontally scrolling layout.

CoverScreen: The entry screen of the app where the title can be edited and the user can navigate to the CardScreen.

Installation
Prerequisites

Node.js: Install Node.js if you haven't already.

Expo CLI: Install Expo CLI using the following command:

```
npm install -g expo-cli

Steps to Run the Project

Clone the repository:

git clone <repository-url>


Navigate into the project folder:

cd <project-folder>


Install dependencies:

npm install


Run the app with Expo:

expo start

```

Open the app in an emulator or on your physical device using the Expo Go app.

## Technologies Used

React Native: A framework for building mobile apps using JavaScript and React.

Expo: A set of tools and libraries for building React Native apps.

React Navigation: For navigating between screens.

React Native Reanimated: For smooth animations.

ImagePicker: For selecting images from the gallery.

## Screenshots

Cover Screen:

Card Screen:

Date Card:
