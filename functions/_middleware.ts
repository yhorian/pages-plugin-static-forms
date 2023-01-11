// Documentation for this plugin - https://developers.cloudflare.com/pages/platform/functions/plugins/static-forms/

import staticFormsPlugin from "@cardiff.marketing/pages-plugin-static-forms";


export const onRequest: PagesFunction = staticFormsPlugin({
  turnstile: false,
  respondWith: ({ formData, name }) => {
    // Play with the form data here.
    // Name: Refers to the name of the form set by the "data-static-form-name" attribute.
    // Use they input fields name as a key to retrieve values from formData
    const email = formData.get('email')
    return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`)
  }
});
