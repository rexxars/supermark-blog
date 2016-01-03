Title: Server-side rendering with React
Excerpt: Rendering a component tree on the server side can be difficult. In this blog post, we'll talk about why, and some possible solutions to the problem.
Author: Espen Hovlandsdal <espen@hovlandsdal.com>
Categories:
 - React
 - Backend
---------------------------------------

It ain't the easiest thing in the world, when you have to load data.

I guess you could down the `react-router` or `redux` routes, but either
of those introduce new complexity. I suppose there is no way of getting
around some sort of waterfall data loading, when you've got conditional
component inclusion and whatnot.

Oh well. A topic for another day, eh?
