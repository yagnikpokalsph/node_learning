Go to tsconfig file
For any reason we have a file called app.dev.ts which is only needed for testing in dev
But not not needed in prod then we can ignor to compile

Under tsconfig.json use below
```
"exclude": [
    "**/app.dev.ts"
  ]
```

For include we have to use the all file or we can include whole folder

