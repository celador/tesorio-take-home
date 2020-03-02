Saturday

This is supposed to take 3-4 hours. Production quality code takes longer than that. Therefore, I'm assuming I should be doing this as quickly as possible and some shortcuts will probably be taken.

I am officially starting at 10:00 AM. I've already done some pre-work to update `npm` and bootstrap the app with Create-React-App. I'm picking this bootstrapper because it's the most popular, I've used it before, and it satisfies the take-home Guidelines up front.

The task is to build two pages, an "all" and a "detail" page.

10:00 - 10:05 Scan through the project requirements and formulate a first step...
10:05 Start Routing for two different pages.

1.  Go look at React Router documentation. Why client-side routing? It's the simplest way to make two "pages" for a demoable app.
2.  `yarn add react-router-dom` Why Yarn? CRA uses it and I like it. It's faster too.
3.  Update the App code with sample React Router code.
4.  Remove the bits we don't need and fixup the code.
5.  Now we have the foundation built. Lets start showing some components on the page.

10:15 Get JSON for All page to inspect the structure

1.  Open [Paw](https://paw.cloud/) and get `https://www.reddit.com/r/all.json`
2.  I noticed https://api.reddit.com/r/all https://api.reddit.com/r/all.json and https://www.reddit.com/r/all all return the same JSON. Which is pretty neat...
3.  This JSON looks super consumable for converting into DOM nodes (components)

10:30 Lets add some code to get the JSON and start shaping some initial components

1.  Okay.. So CRA has changed since I last created an app. Looks like function components and Hooks are used now, so lets learn a little about that...
2.  useEffect caused an infinite loop, which took a minute to figure out.

10:45 Create a master component that can be a Listing or a Post (t3) since components appear to be switched on "kind"

11:15 Provider component, Listing component, and Post component are scaffolded.

Time to take a 5 minute break

11:20 Lets create our Post (t3) component.

11:23 Looks like we need some styling, so lets bring in styled-components with `yarn add styled-components`

11:25 Interrupted by family

11:30 Back at it.

12:00 Working with the posts contents, have to find a way to calculate the "time since posted" value. JavaScript and time is a pain, time to add moment with `yarn add moment`

12:10 Working with number formatting for score, lets bring in numeral with `yarn add numeral`

12:15 The "spec" provided for the take-home has a couple screenshots of the Reddit homepage, or at least the way it used to be. The current page bears little resemblance to the spec. Not having an actual design file or even a higher resolution screenshot is slowing me down, because I have to guess as sizes, colors, fonts, weights, etc...

12:20 I'm realizing that I should probably use CSS Grid instead of flexbox for the posts/links. Going to take a break to think about it.

12:25 I'm going to forge ahead with flexbox, assuming this probably isn't ideal, but we're 2 1/2 hours into a 3-4 hour task and I'm not half way done.

1:00 Still doing CSS to get font size, padding, etc.. to look right

1:30 Start work on a Thumbnail component that provides fallbacks for self, default, or nsfw thumbnails, along with the

1:45 more CSS work to do some cleanup some flexbox wonkiness

2:00 Basic home design done, going to work on voting buttons

2:25 Button styling done.

2:45 Cleanup code and Add links for Author and Subreddit. Taking a break.

3:05 Start client side up/down vote. Needed to add a font I grabbed from Reddit to make the arrows.
Having design assets would help, along with having colors. I think implementing something out of Abstract would be more realistic

4:05 Finish client side up/down vote

Monday

One thing I've thought about was the part of the challenge that said not to worry about CSS. As a frontend engineer, I concern myself with HTML, CSS, and JavaScript. Each language provides its own ability to control the page and a good frontend engineer knows which language to use and when to use it. CSS is no less a frontend concern than JavaScript. Regardless... lets move on.

8:15 Start on Detail (comments) page

8:30 Working on fixing routing so I can accept a permalink and show the comments for it.

8:45 Created Comment (t1) component and it shows Hello World properly

9:25 Got recursive comments displaying.  Working on scoring and styling.

9:35 Scoring works.  Starting work on replying to comments.

11:25 QA and finishing up.

11:50 Fixed some issues with score propagation and cleanup of project.