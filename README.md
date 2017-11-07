# humanitec-test

To run the offline version we need to first build our app
```bash
ng build --prod
```

Then we can generate our service worker
```bash
npm run sw
```

Finally we run the build on a server 
```bash
npm run static-serve
```
now we can visit [http://localhost:4200](http://localhost:4200) to have the application loading and caching data for us.


if we close the server we still can access [http://localhost:4200](http://localhost:4200)