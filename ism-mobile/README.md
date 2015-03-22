Setup
-----
1. install nodejs. Follow instructions [here](follow%20instruction%20to%20install)
2. Install Android sdk. Follow instructorions [here](http://developer.android.com/sdk/index.html).  Make sure to open Android Studio and install all the sdks. Read [here](http://cordova.apache.org/docs/en/3.3.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) for more details. 
3. Install [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
4. open `terminal`
5. add the following to ~/.bash_profile 
	`export PATH=${PATH}:/Users/{user-name}/Library/Android/sdk/platform-tools:/Users/{user-name}/Library/Android/sdk/tools`
6. close and reopen `terminal`. 
7.  clone repo by executing: 
	   `git clone https://github.com/xsurge83/infrasonic`
8. go to following directory `cd infrasonic/ism-mobile`
9. execute `npm install -g cordova ionic bower gulp` may have to `sudo` or admin permissions
10.  execute `npm install `
11. execute `bower install`
12. execute `ionic build android` 
13. plug phone or use emulator 
14. `ionic run android` 



ionic build android 
ionic run android 

Todo: 
- add coretrak logo
reference 

http://gizmodo.com/under-armour-armour39-review-beast-mode-unlocked-506284006

deploy 
cp -r www/* ~/dev/projects/deploy/infrasonic/node-js-getting-started/public/ism-mobile/
