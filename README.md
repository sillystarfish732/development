# Development

### Link to Deployed Website
https://sillystarfish732.github.io/development/

### Goal and Value of the Application
As someone who likes discovering new music and listening to playists 
but does not like taking too much time to curate them, this web app 
is a simple way to sort and filter through albums and add then
quickly to populate a long megaplaylist.

### Usability Principles Considered
To make sure the user can order the playlist with simple button inputs,
the remove from playlist icon is within the playlist aggregator. The 
albums are complex, busy, and colorful, so the rest of the program is
kept simple with clear headings and buttons.

### Organization of Components
The program is organized into an AlbumsItem component that represents
each album display and the cart component that is rendered inside the 
sidebar navigation with the control panel. 

### How Data is Passed Down Through Components
The AlbumsItem component handles rendering each album display, with 
props containing all the information for rendering. The cart component
is the playlist aggregator, and takes in a prop that is the array with
the album name and track amount to aggregate. 

### How the User Triggers State Changes
The state changes when filtering and sorting make the display mapping
updated. The albums show up default sorted by album name alphabetically, 
so after the state is copied over from the data json, it is sorted. 
