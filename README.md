## Pages Plugins

# Static Forms Pages Plugin

Bug fixed that cause all Response objects passed to have a 200 OK status code. Now you can add a redirect!

## Installation

```sh
npm i --save https://github.com/yhorian/pages-plugin-static-forms
```

Copy the _middleware.ts file over to your own /functions folder.

To use multiple middleware handlers, see this documentation on [Chaining middleware](https://developers.cloudflare.com/pages/platform/functions/middleware/).

## Usage

Documentation available on [Cloudflare's Developer Docs](https://developers.cloudflare.com/pages/platform/functions/plugins/static-forms/).
