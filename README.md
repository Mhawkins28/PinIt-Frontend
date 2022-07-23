Places - Project 3

### Your group members

Jose Rafael Kaibigan
Zachary Miller
Megan Hawkins
Myndra Aaron Jr.

### Your project idea

> Brief 2-3 sentence description of your app

Social app where users can see a map of people’s favorite places. These places are pins of locations that users can select and add to their profile. Pins are categorized by cities, so users will have profile pages that list their pins. We will use Google Maps API to be able to search for locations as well as render a map.

### List of models and their properties

\*\* Models for MVP

User {

    Name: String,
    Password: String,
    Email: String,

}

Pins {

Name: String,
Address: String,
City: String,
Coordinates: [ Number, Number ],
Images: [ String ],
Description: String
Owner: {
Type: Schema.Types.ObjectId,
Ref: “User”
}
}

### Scrum manager/project manager's name

Scrum Manager - Jose Rafael Kaibigan
Git Manager - Zachary Miller

### User stories

    MVP:

As a user, I want to be able to add pins of my favorite locations.
As a user, I would like the pins I create to be categorized by cities.
As a user, my pins should have CRUD functionality.
As a user, I want to be able to see my pins on the map.
As a user, I would like to see other pins that people have posted.
As a user, I want to be able to sign up (OAuth) or create a new account (Tokens).
As a user, I would like to have a profile page that has a list of my pins.

    Stretch Goals:

As a user, when adding a new pin, I would like the search bar to auto-populate the location name.
As a user, I would like to add comments on other people’s pins.
As a user, I want my password to be encrypted (bcrypt).
As a user, I would like to have suggestions based on current pins.
As a user, I would like to be able to add images to my pins.

### Wireframes
