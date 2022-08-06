PinIt by JMMZ

### Your group members

Jose Rafael Kaibigan
<br>
Zachary Miller
<br>
Megan Hawkins
<br>
Myndra Aaron Jr.

### Your project idea

> Brief 2-3 sentence description of your app

Social app where users can see a map of people’s favorite places. These places are pins of locations that users can select and add to their profile. Pins are categorized by cities, so users will have profile pages that list their pins. We will use Google Maps API to be able to search for locations as well as render a map.

### List of models and their properties

\*\* Models for MVP

User {

    Username: String,
    Password: String,

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
<br>
Git Manager - Zachary Miller

### User stories

MVP:

As a user, I want to be able to add pins of specified locations.
<br>
As a user, I would like the pins I create to be categorized by cities.
<br>
As a user, my pins should have CRUD functionality.
<br>
As a user, I want to be able to see my pins on the map.
<br>
As a user, I would like to see other pins that people have posted.
<br>
As a user, I want to be able to sign in and create a new account (Token Authorization).
<br>
As a user, I would like to have a profile page that has a list of my pins.
<br>

Stretch Goals:

As a user, when adding a new pin, I would like the search bar to auto-populate the location name.
<br>
As a user, I would like to add comments on other people’s pins.
<br>
As a user, I want my password to be encrypted (bcrypt).
<br>
As a user, I would like to have suggestions based on current pins.
<br>
As a user, I would like to be able to add images to my pins.

### Icebox features

- OAuth with Google, Twitter, Facebook, and GitHUB
- User profiles should have a list view of the their pins with drop downs of different cities and their pins.
- Search bar doesn't load on first load. User should refresh but will lose the coordinates if clicked on specific spot on map.
- Users should be able to upload more than just 1 photo.
- Profile map page and global map page should have distinctions between them.
- Users should not be able to sign up with a username that is already taken.
- Pins should have a different icon depending on if its the users or someone else’s.
- When redirecting back to the home map after editing pin, the info window with the old information is still populated.
- Users should be able to add their hometown and let the map center to that location on their profile.
- Users should be able to see what photo they uploaded. (Configure Cloudinary)
- Users should be able to view other people's profiles and pins.

### Wireframes

![alt text](Project-3-UI/public/placesWireframe.png)

<br>

For more info, check out the Backend README file.