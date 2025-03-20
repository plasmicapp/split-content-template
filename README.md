This is a Plasmic app template which includes the SSR split content support using middleware. 
Read more about split content in our [docs](https://docs.plasmic.app/learn/split-content/).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fplasmicapp%2Fsplit-content-template&env=PLASMIC_PROJECT_ID,PLASMIC_TOKEN&envDescription=You%20need%20to%20initialize%20Plasmic%20with%20the%20project%20ID%20and%20public%20API%20token.&envLink=https%3A%2F%2Fdocs.plasmic.app%2Flearn%2Fnextjs-quickstart%2F%23initialization)

## Demo

* [Plasmic project](https://studio.plasmic.app/projects/v8ZL9gS8QXkoyAZPWzVHE8/)
* [Deployed website](https://split-content-template.vercel.app/)

## Getting Started

This repo is pre-configured to use the projectId and token from the project listed in the demo section.
In order to get started you'd need to:

1) Fork this repository 

2) Choose an existing Plasmic project, or create a new one.

3) Add your `PLASMIC_PROJECT_ID` and `PLASMIC_TOKEN` to the `plasmic-init.ts` file. To find project’s ID and public API token open the project in Plasmic Studio.
  - The project ID is in the URL, like: https://studio.plasmic.app/projects/PROJECTID.
  - The public API token can be found by clicking the Code toolbar button.

4) Next, run the development server: `npm run dev`

5) Open your browser to see the result.

6) Press the Deploy with Vercel button to host your app on Vercel. Get the public link of your deployment.

7) [Follow this guide](https://docs.plasmic.app/learn/app-hosting/) to connect the app host in Plasmic studio

8) (Optional) Configure webhooks to re-build Vercel every time you publish from Plasmic. Follow [this guide](https://vercel.com/docs/deploy-hooks) to get webhook URL on Vercel, and then add the URL in the Plasmic studio in Publish -> Webhooks.


You can start editing your project in Plasmic Studio. The page auto-updates as you edit the project.

## Learn More

With Plasmic, you can enable non-developers on your team to publish pages and content into your website or app.

To learn more about Plasmic, take a look at the following resources:

- [Plasmic Website](https://www.plasmic.app/)
- [Plasmic Documentation](https://docs.plasmic.app/learn/)
- [Plasmic Community Forum](https://forum.plasmic.app/)

You can check out [the Plasmic GitHub repository](https://github.com/plasmicapp/plasmic) - your feedback and contributions are welcome!
