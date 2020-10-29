
```ZSH
 heroku create fe-hoop-drills --buildpack https://github/mars/create-react-app-buildpack.git


heroku create fe-hoop-drills --buildpack mars/create-react-app

```

```zsh
Creating ⬢ fe-hoop-drills... done
Setting buildpack to https://github/mars/create-react-app-buildpack.git... done

https://fe-hoop-drills.herokuapp.com/ | https://git.heroku.com/fe-hoop-drills.git
```

```zsh
 git remote -v
```

        heroku  https://git.heroku.com/fe-hoop-drills.git (fetch)
        heroku  https://git.heroku.com/fe-hoop-drills.git (push)
        origin  https://github.com/DevLuDaley/fe-hoop-drills.git (fetch)
        origin  https://github.com/DevLuDaley/fe-hoop-drills.git (push)

```zsh
git add .

git commit -m 'first commit'

git push heroku
#push without build

git push heroku main
# push with build
```

```zsh
git rm yarn.lock
```

```zsh
brew uninstall --force yarn

did not use 
        =>>> npm uninstall -g yarn

yarn -v
zsh: command not found: yarn

which yarn
yarn not found
```

just in case
```
rm -rf /usr/local/bin/yarn
rm -rf /usr/local/bin/yarnpkg

which yarn
```

<!-- git remote add heroku git@heroku.com:hoop-drills-react.git -->


git push heroku fix-delete-fix-router:main

npm i && heroku open

heroku logs --tail


debugging
```zsh
heroku run rails s
```

You can verify that the remote was added to your project by running:
```
git config --list --local | grep heroku
```

```zsh
Access to fetch at 
'https://be-hoop-drills.herokuapp.com/api/v1/routines'
https://be-hoop-drills.herokuapp.com/api/v1/routines
 from origin 
 'https://fe-hoop-drills.herokuapp.com'
  has been blocked by CORS policy: 
  
  No 'Access-Control-Allow-Origin' header is present on the requested resource. 

If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

```
https://be-hoop-drills.herokuapp.com/api/v1/routines' from origin 'https://fe-hoop-drills.herokuapp.com'
```


```rb
$ ruby-install --latest

Then install the newest Ruby version.

$ ruby-install --latest ruby
 Save
$ ruby-install --latest ruby

Add a line to the .zshrc file to set the new Ruby version as a default.

chruby ruby-2.7.0
```