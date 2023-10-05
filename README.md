This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- Root Folder -->

In app folder we create pages and our main root page of web is page.tsx that is in app folder not in sub folder.
All components inside the app folder and server component by default

<!-- Create Pages -->

To create more other pages we create folder with the name of that pagename like create folder name like about then in about folder we add new file name like page.tsx same goes for every page.

<!-- Nested Routes -->

For nested routes We create folderlike users then in user we create another folder for example new and in new folder we create file page.tsx and add content of the new user in new folder.

<!-- Link  -->

We use link intead of anchor a tag because of redownloaded extrafiles like layout file and js files only that link shows in network when we click on that link or navigation.

<!-- For Specific client Side Rendering  -->

For Specific client Side Rendering We create folder for components name like components and this folder is not publically accessible. create folder and add your component files like ProductCard.tsx etc

<!-- Client/Server Component -->

Server Component cannot have interactivity browser events like onclick change etc. so if we add in our components folder files events then we face runtime error for example: <button onClick={() => console.log('Click')}>Add to Cart</button>

To Avoid the error we add 'use client'; at the top of our component.

With this we tell the next.js compiler to include this file or this component in our js bundle and that means if this component dependent on other components those components will automatically client components and will be included in our JS bundle so we dont have to repeat this directve on every cliet component.

<!-- But Another Better option For Faster your Application -->

Add another file and the specific code where you used event handlers like you use onclick event on add to cart button create file name like AddToCart.tsx then add button code there then import this component in your product where you want use this button. And no need to add use client in product file but you need to add use client on add to cart file.

So this is how we can use Client and Server Components

<!-- Data Fetching -->

Two ways to fetch data Client and Server.
Use async await:

import React from 'react'

interface User {
id: number;
name: string;
}

const UsersPage = async () => {
const res = await fetch ('https://jsonplaceholder.typicode.com/users')
const users: User[] = await res.json();

return (
<>

<h1>Users</h1>
<ul className='text-indigo-700 bg-slate-300 p-5'>
{users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
</>
)
}

export default UsersPage

In Typescript we have interface to pass object properties

In react or whereever we use client side rendering browser initially gets a blank document then it will call the backend to fetch the data and then render the content so there is always an extra round trip to the backend and our application is not search engine friendly so to fetch data whenever possible we should fetch it in server components.

<!-- Caching -->

Storing data somewhere that is faster to access. Next.js builtin data cache for faster network.

const UsersPage = async () => {
const res = await fetch ('https://jsonplaceholder.typicode.com/users',
{ next: { revalidate: 10 } });
const users: User[] = await res.json();

revalidate: 10 means next.js is going to run a background job and get fresh data from the backend every 10 seconds. In next that's how caching works. One thing you need to know is that this caching behaviour is only implemented in the fetch function so if use a third-party library like axios you are not going to get this and the data cache.

<!-- Static And Dynamic Rendering -->

Static rendering means render at build time meanwhile Dynamic Rendering render at request time.

<p>{new Date().toLocaleTimeString()}</p> 
This is render on page and change time when we refresh page.
we run command npm run dev means in development mode now we exit dev mode and run on build npm run build and see the result. Then start with npm start after this our time is not update on refreshing the page because this page was rendered statically at build time now disable the caching of this page and rebuild the application for production.

const UsersPage = async () => {
const res = await fetch ('https://jsonplaceholder.typicode.com/users',
{ cache: 'no-store' });
const users: User[] = await res.json();

Now back to the terminal and stop the process and rebuild application npm run build now we see the in the route our folder like /users before this instead of circle lamda icon shows that means rendering on the server at run time. now npm start and time changes on every refresh

<!-- Global Styles  -->

Now run npm run dev to see changes everytime you change

<!-- CSS Modules -->

Like component base styling and safe to override classes. add nnew file im=n components folder name like ProductCard.module.css this .module.css extension mandatory. after this import that css file where you want to use like this.

import styles from './ProductCard.module.css'

to get this styles or class property:
className={styles.card}

Remember that you cannot use hyphen in css module name class like card-container this is not valid name for JS property so this file always used camelCase notation like .cardContainer and when you inspect this class class will auto generate name like this class="ProductCard_card\_\_KLyHh"

<!-- Daisy UI -->

Popular library for tailwind
