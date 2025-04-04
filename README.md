This is a Plasmic app template which includes the SSR split content support using middleware. 
Read more about split content in our [docs](https://docs.plasmic.app/learn/split-content/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplasmicapp%2Fsplit-content-template)

## Demo

* [Plasmic project](https://studio.plasmic.app/projects/v8ZL9gS8QXkoyAZPWzVHE8/)
* [Deployed website](https://split-content-template.vercel.app/)

## Getting Started

This repo is pre-configured to use the projectId and token from the project listed in the demo section.
In order to get started you'd need to:

1) Press the Deploy with Vercel button to host your app on Vercel and create your repo. Get the public link of your deployment.

2) Choose an existing Plasmic project, or create a new one.

3) Add your `PLASMIC_PROJECT_ID` and `PLASMIC_TOKEN` to the `plasmic-init.ts` file. To find project’s ID and public API token open the project in Plasmic Studio.
  - The project ID is in the URL, like: https://studio.plasmic.app/projects/PROJECTID.
  - The public API token can be found by clicking the Code toolbar button.

4) [Follow this guide](https://docs.plasmic.app/learn/app-hosting/) to connect the app host in Plasmic studio to the host link from step 1

5) (Optional) Configure webhooks to re-build Vercel every time you publish from Plasmic. Follow [this guide](https://vercel.com/docs/deploy-hooks) to get webhook URL on Vercel, and then add the URL in the Plasmic studio in Publish -> Webhooks.

You can start editing your project in Plasmic Studio. The page auto-updates as you edit the project.

For local development just run `npm install` to install the dependencies once, and then launch `npm run dev` if you want to start your server locally.

## Learn More

With Plasmic, you can enable non-developers on your team to publish pages and content into your website or app.

To learn more about Plasmic, take a look at the following resources:

- [Plasmic Website](https://www.plasmic.app/)
- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Plasmic Community Forum](https://forum.plasmic.app/)

You can check out [the Plasmic GitHub repository](https://github.com/plasmicapp/plasmic) - your feedback and contributions are welcome!
