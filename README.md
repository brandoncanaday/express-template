# express-template

Template for a TypeScript/Express server. It is configured to be run in an HTTP-triggered Firebase Cloud Function and to be integrated into Gitlab CI/CD and Firebase Hosting.

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

### Testing the app as a local server:

1. Run `npm i`, and then `npm run start:dev`.

2. The server should now be running at `http://localhost:5000`.

3. If you want to add environment variables which are accessible in the app, add them to `.env`.

### Testing the app as a Firebase Cloud Function:

1. Run `npm i`, and then `npm run start:prod`.

2. If you haven't changed the rewrite section of `firebase.json`, the cloud function should now be serving the app at `http://localhost:5000/api/`.

### Preparing for deployment:

1. Give the project a custom name by replacing all instances of 'express-template' (and the name of the root folder), and then run `npm i`.

2. Create 2 Firebase projects- one for the development version and one for the production version (Note: you can create more versions if you'd like, but the default Gitlab and Firebase configuration of this repo only handles those two versions).

3. In `firebase.json`, set the value of the `development` key to the corresponding firebase project name, and then do the same for the `production` key (plus any additonal keys corresponding to the extra Firebase projects you created in step 2).

4. Create a Gitlab repo with 2 branches- `dev` for the development version and `master` for the production version (plus any additional branches corresponding to the extra Firebase projects you created in step 2).

5. Follow the instructions in `.env.example` for setting up the minimal necessary environment variables required for the project to integrate with Gitlab CI/CD (Note: if you want to add environment variables which are accessible in the app once deployed as a Firebase Cloud Function, they must be added in two places- first in the Gitlab project dashboard under settings:ci/cd:variables, and then in the `predeploy` npm script in `package.json`, using the indicated format).

6. For any extra Firebase projects you created in step 2, create an additional deploy stage in `.gitlab-ci.yml`, making sure each one targets the appropriate environment, branch, and Firebase project.

7. Run `git checkout -b <branch-name>` for each branch you created in step 4, and then add the remote Gitlab repository as an origin by running `git remote add origin <repo-url>`.

8. There should now be a `1:1:1:1:1` match between your Firebase projects, your `firebase.json` keys, your Gitlab repo branches, your local repo branches, and your `.gitlab-ci.yml` deploy stages.

9. Check over your project one last time and make sure you've done everything in steps 1-8!

10. Run `git checkout dev && git add . && npm run commit`. After you're taken through the interactive commit, run `git push -u origin dev`.

**Congrats!** You should now be able to view the running pipeline in your Gitlab project. If the pipeline finishes successfully, your deployed HTTP-triggered Firebase Cloud Function Express app should be running at `https://<development-firebase-project-name>.firebaseapp.com/api/`
