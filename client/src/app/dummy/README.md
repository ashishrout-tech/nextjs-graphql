# Authentication

This folder shows how authentication and it's routes can be handled and redirected back to the homepage after successful authentication.
If user is not successfully authenticated, `error.tsx` will load, where user will have a chance to get authenticated again.
After the user is successfully authenticated, user will have access to other children components, thereby blocking the access to auth components/routes. Refer `layout.tsx` for the implementation.

## Use case

This is just a mock of how authentication routes can be handled/deactivated, whenever required.
The content inside this folder can be replicated in root of app folder, which will make much more sense.

### Folder Overview

@auth -> Handles authentication
@component1 -> can be rendered parallelly, along with @children // refer Parallel routes in next13.

// refer `layout.tsx` for a possible implementation

### @auth Folder overview

login folder -> This folder shows how server and client components are clearly separated. `page.tsx` handles the server side logic. `redirect.tsx` handles the client side for redirection.

signup folder -> This folder mocks an error during an API call for the authentication.
