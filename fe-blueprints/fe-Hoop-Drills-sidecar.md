
change NPM start default port to `3001`
```zsh
 PORT=3001 npm run start
```

```json
//package.json   
"scripts": {
    "start": "PORT=3001 react-scripts start",
    ...
}
```