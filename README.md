# Static Forms Pages Plugin for Cloudflare

Bug fixed that cause all Response objects passed to have a 200 OK status code. Now you can add a redirect!

## Installation

```sh
npm i --save https://github.com/yhorian/pages-plugin-static-forms
```

Copy the **functions/_middleware.ts** file from this repository over to your own /functions folder. Cloudflare will then compile

To use multiple middleware handlers or change the routes used, see this documentation on [Chaining middleware](https://developers.cloudflare.com/pages/platform/functions/middleware/).

## Usage

Edit the **_middleware.ts** to do whatever you'd like with the form submission data. Every time a form submits, it'll capture and run the code you insert.

Documentation available on [Cloudflare's Developer Docs](https://developers.cloudflare.com/pages/platform/functions/plugins/static-forms/).
