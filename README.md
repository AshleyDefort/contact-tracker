# React Router Constact Tracker
This project is from a react-router tutorial that you can find on the official website of [react-router](https://reactrouter.com/en/main/).

For the bundler and web server in the tutorial they use [Vite](https://vitejs.dev/), and I use the same, but you can use whatever you want.

This is just a summary based on the final result of the tutorial. If you want to do this project as wee, I wppuld recommend checking out the [tutorial](https://reactrouter.com/en/main/start/tutorial), specally if you're a beginner. All the information that you find here, you can find it at the official website.

## Adding a router and the routes
A router is a stateful, top-level component that makes all the other components and hooks work. In the 6.4 version of react-router were introduced new routers like `createHashRouter` and `createStaticRouter`. For the tutorial, they use `createBrowserRouter`, that is the recommended router for all react React Router web projects.

To add the router, in the same file where the app is rendered (main.jsx in this case), we declare a constant called `route`, where we define all the routes using `createReactRouter`. Then, we render the app using `RouterProvider` that is a component where all data router objects are passed to render your app and enable the rest of the data APIs.

For configure the routes, there are two options, use JSX or use Objects. There is no functional dference between these two, it's just about stylistc preference. In the tutorial, the routes are configured using objects, but at the end, you can find the JSX routes as well.

The final code of the main file (without the imports) is:
~~~
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [{
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "/contacts/:id",
          element: <Contact />,
          loader: contactLoader,
          action: contactAction,
        },
        {
          path: "/contacts/:id/edit",
          element: <EditContact />,
          loader: contactLoader,
          action: editAction,
        },
        {
          path: "/contacts/:id/destroy",
          action: destroyAction,
          errorElement: <div>Oops! There was an error.</div>,
        },
      ]
    }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
~~~

As you can see, in the tutorial, they implemented nested routes and index routes. 

## Client Side Routing
Client Side Routing enables developers to manipulate the browser history stack without making a document request to the server. For the client side roting, they use `Link To`. There is an example:

~~~
<Link to={`contacts/${contact.id}`}>
    {contact.first || contact.last ? (
        <>
        {contact.first} {contact.last}
        </>
    ) : (
        <i>No Name</i>
    )}{" "}
    {contact.favorite && <span>★</span>}
</Link>
~~~

In wrapping up, this README gives you a basic overview of setting up React Router in your project. However, it's just scratching the surface. The tutorial it references goes into much more detail and is particularly helpful if you're new to this. It covers everything from setting up routes to using client-side routing techniques. Think of it as your guide to mastering React Router. Enjoy exploring!