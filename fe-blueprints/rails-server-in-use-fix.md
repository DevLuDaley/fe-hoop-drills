#fix rails serrvver port running error

```rails s```

returns an error message like below

```zsh
The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run `bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java`.
=> Booting Puma
=> Rails 6.0.3.4 application starting in development 
=> Run `rails server --help` for more startup options

A server is already running. Check /Users/LHD/Documents/react-redux-rails-project/hoop-drills/BE-hoop-drills/tmp/pids/server.pid.
Exiting
```

important part = 
```zsh
Check /Users/LHD/Documents/react-redux-rails-project/hoop-drills/BE-hoop-drills/tmp/pids/server.pid
```

now run cat + the address minus the final 
`.`

```zsh
cat /Users/LHD/Documents/react-redux-rails-project/hoop-drills/BE-hoop-drills/tmp/pids/server.pid
```

take the number returned, in this case `90839`
add ```kill -9`` to the previous numerical response 
```zsh
kill -9 90839
```

```zsh
[1]  + 15780 killed     rails s 
```


run rails s 
```zsh
rails s
```

Done