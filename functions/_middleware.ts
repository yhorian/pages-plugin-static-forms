// Documentation for this plugin - https://developers.cloudflare.com/pages/platform/functions/plugins/static-forms/

import staticFormsPlugin from "@cardiff.marketing/pages-plugin-static-forms";

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: ({ formData, name }) => {
    const email = formData.get('email')
    return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`)
  }
});
