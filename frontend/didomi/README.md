# DIDOMI Frontend technical challenge
_A technical test project_  
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

1. Install via `npm i` or `yarn install`
2. Start server `npm start` or `yarn start`
3. Access the server via http://localhost:4200

## My approach
I started with looking at the specification to determine the requirements especially for the points I needed to read up on.
I then build the UI and the page flow. Then configured a simple server and finished by writing my tests and documentation.

I didn't develop in TDD, as I built the components with some trial and error of what would work best, which is why the tests were written after.

### Steps to determine solution
1. Read the specification through and information I needed to read up on
2. I had not been using Material UI before, so I had to read up on that. See how
   it works and what components to use.
3. The specifications didn't mention any specific way persistence should be
   implemented on the server, so I went with a simple in memory solution.
4. I roughly planned out how front end should be structured (Following Atom design Pattern).
6. Chose what tools to use.
  - I wanted to write the code in TypeScript, so that was easy enough.
  - To ease front end build setup I opted to use create-react-app, so I could
    just get to work.
  - Express was the simplest way to set up a server, so I want with that.
7. Get to work.

# Obstacles encountered
- Went down a rabbit hole trying to make redux testing work. In the end I found
  an alternative way to test unit it.

## How the time was spent
| Task | Time (in hours) |
|------|:---------------:|
| Reading up on Material UI | 2 |
| Various other research \* | 2 |
| Set up environment (TypeScript (for server) + create-react-app) | 2 |
| Setting up express server | 0.5 |
| Building UI | 4 |
| Writing tests | 4 |
| Writing explanation | 1 |
| **Total** | **15.5** |

\* _CRA, Typescript, \@testing-library, Redux Testing, etc._

## What to improve on the solution
- Adding consent data to the list could be done better. Right now is searches the array to see if the email already exists. This is only feasible because the list is so small. In theory to make the override work it would be better to index the emails in a sort of directory (Map or plain object) as `email => list index`, to have a more direct pointer to the entry to update.
- In theory the consent registrations list pagination could be done server side, but that really depends on how large these lists ends up being.
- The folder `components` might not have the best name, but I couldn't really decide on a better name, but the solution tries to follow an Atomic Design Pattern, hence the reason to split it up.
- Add integration tests for Router flow and Redux store.
- Add polyfills for IE support. Solution is only tested in newer browsers.
