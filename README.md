# Adminis (Under Construction) Changelog

### https://www.adminis.tech

Website deployed on Amazon S3 and Cloudfront, domain from Google Domains, routed with Amazon Route 53 and SSL secure with Amazon Certificate Manager

## Changelog

**11/30/2023 v0.03**:

- Fine grained Github API key is now a const in main
  - INCREDIBLY dangerous if not for the fact that it's a readonly key and necessary for static deployment on AWS S3
  - when Amplify Gen2 hosting feature is up and running will transition to that for hosting with environment secrets

- Landing Page stylings changed slightly, Navbar stylings changed slightly


- _Future Steps_:
  - Animations and design overhaul on website even prior to React Three conversion
    - Framer Motion library
    - Continue to improve temp site design and user flow
    - Improve accessibility options, include different colorblind modes
  
  - Grab

**11/28/2023 v0.02**:

- Jest unit tests set up and isolated from Playwright tests
  - They pass but currently a bug in Vite with import.meta and Jest causes two failures in main.tsx testing so not worth pushing up coverage or using in pipeline... yet
- Added Github Repo api, fine-grained api key included to fetch public repos so the site automatically updates itself with my work
- Entire architecture overhauled to fit microfrontend paradigm
- Redux Saga added, Landing page redux sector added for Github repo fetch
- Apollo Client used for graphQL added

- _Future Steps_:
  - Write out Playwright E2E tests
  - Continuous work on React ThreeJS for the eventual overhaul of design and interactivity
    - Accessbility and SEO are still accounted for during these changes
  - Continue to improve temp site design and user flower
  - Amplify Gen2 has no custom domain functionality yet:
    - .env file pushed up temporarily, bad practice but the api key used is fine-grained and readonly for public repos only
    - S3 bucket with Cloudfront distribution for now, will later move to Amplify hosting as a simple backend will be needed
  - Animations using Framer Motion and loading UI as well as error routing and handling
  - May switch to Vitest if Jest bug with import.meta is solved in optimal time as testing is important for production

**09/25/2023 v0.01**:

- _First official iteration and inclusion of changelog_:

  - React, Vite, and Typescript are all configured
  - Husky, ESLint, and Prettier are all configured
  - Jest Testing for Unit Tests and Integration Tests are configured
  - Global themes with styled-components are configured
  - React Redux and Redux Saga configured (no Sagas yet)

- Future Steps:
  - Include changelog onto website as a new navbar option
  - Continuous work on React ThreeJS for the eventual overhaul of design and interactivity
    - Accessbility and SEO are still accounted for during these changes
  - Continuous work on different projects to showcase on this site
  - Design change for users to more easily contact me/the company
