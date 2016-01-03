Title: The magic of createObjectURL()
Date: 01-12-2014
Author: Espen Hovlandsdal <espen@hovlandsdal.com>
Excerpt: Learn how a simple function can create rich, powerful user interactions and interfaces.
---

The web platform is maturing faster and faster, and we’re seeing the work normally done by native desktop applications now often shifting towards web-based applications instead. Features that may appear to have little importance can be really powerful when combined together.

A good example of this is URL.createObjectURL(). On it’s own, it really doesn’t do much. Paired with the HTML5 video and audio element, or even the good old image element, it gets to be really powerful.

URL.createObjectURL() is part of the URL-interface, which can be used to construct and parse URLs. URL.createObjectURL() specifically, can be used to create a reference to a File or a Blob. As opposed to a base64-encoded data URL, it doesn’t contain the actual data of the object – instead it holds a reference.

Let’s say you have a page that prompts the user to upload an image. The file input element is, as we all know, very simple and far from user friendly. When a user has selected an image, it would make sense (in a lot of cases) to show a preview of the image. We are now finally able to solve this problem in a simple and intuitive way.
