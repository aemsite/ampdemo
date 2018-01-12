## AMP Binding Exceeds 2000 Limit

Basically in this demo, we are using the `<amp-form>` to fetch data from backend and assign the result into a `amp-state` known as `photosList`. For your information, `photosList` is also known as the `[src]` for another `<amp-list>`.

This concept is very similar to the **Show Data** as in this [ampbyexample.com](https://ampbyexample.com/samples_templates/product_page/preview/)

And as you see, the **2000 bindings exceed the limit** will occur after you click on the master `<amp-list>` in order to fetch the request and update the `[src]` of another `<amp-list>`

 And i notice, whenever we perform `AMP.setState()`, entire `<amp-state>` will be re-render and it will force the `<amp-list>`s HTML to be re-rendered ! I think I get this bug like a month ago. Please refer to [this](https://github.com/ampproject/amphtml/issues/12517#issuecomment-353104030)

 ![2000bindings-with-form](https://ae01.alicdn.com/kf/HTB1vMpfmL2H8KJjy1zk5jXr7pXaK.gif)

## Environment Setting for this DEMO
In order for an `<amp-form>` request to work, we need to configure the `Response Header` from backend, so here are some simple settings on my local environment to ease you. **PLEASE SKIP THIS IF YOU ALREADY HAVE ONE**

1. Please refer to the `nginx.conf` attached on this repository for my local nginx configuration. Currently on my local environment, I am setting domain `https://aliang.com` as the proxy of `https://127.0.0.1:3000`, and configure those required **RESPONSE HEADER** inside my nginx configuration too. Remember to **start** your nginx or **reload** your nginx.
2. Please download the repository, execute `npm install` and paste the `index.html` into the path `node_modules/json-server/lib/server/public/index.html`. Please change the `form action` inside `index.html` if you are not using `https://aliang.com`.
3. Execute `node server.js` and browse `https://aliang.com`

