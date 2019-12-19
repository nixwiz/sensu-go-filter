# Continuous Integration and Deployment

This template repository includes a sample JS filter function, including a sample test setup using karma and the files necessary to run tests and deploy with [Travis CI](1).

To see the two test cases found in spec/sample_filter.js ran successfully against the filter in lib/sample_filter.js, run the following:

```
$ npm install
[lots of output from npm deleted for brevity]

$ node_modules/karma/bin/karma start karma.conf.js --single-run
[deleted output for brevity]
HeadlessChrome 79.0.3945 (Mac OS X 10.14.6): Executed 2 of 2 SUCCESS (0.001 secs / 0.002 secs)
TOTAL: 2 SUCCESS
```

Once you have created your own JS filter in lib/ and removed the lib/sample_filter.js file, you will then need to update the package.json file, updating the "main" setting with your filename, as well as updating all of the other relevant settings.

You will also want to use spec/sample_filter as a guide for creating your test cases.  These test cases use stub events (just enough to test your functionality) as the test cases for your functions and whether or not your filter should return true or false based on the event.  You will want to create as many of these test cases as necessary based on your filter's expected use cases.  See example test specs [here](4) and [here](5).  You can remove the spec/sample_filter.js after you have created your own test specs.

Once you have done this, you can run your tests, similar to above but with some debugging output:

```
$ npm install

$ node_modules/karma/bin/karma start karma.conf.js --log-level debug --single-run
```

The remaining files to be aware of are .travis.yml, karma.conf.js, and the build and github-release-upload shell scripts in bin/.  Other than the possible changes made below to .travis.yml, you should not need to change any of these files.

If you would like to have Travis CI handle uploading your release assets, you will need to have a [GitHub personal access token](2) and the [Travis Client CLI tool](3).  It is a good practice to create an access token specifically for Travis CI to use.  You can encrypt your token as the GITHUB_TOKEN environment variable for Travis CI to use with the following command:

```
$ travis encrypt GITHUB_TOKEN=abcdefghijklm12345
```

**NOTE:** The above will only work once you have added your repository to Travis.  This will require granting Travis CI access to your GitHub repository.

After the command above completes successfully, it will add the secure env variable to your .travis.yml file.  You should now be good to go with automated testing and deploys of your filter with Travis CI.

[1]: https://travis-ci.org
[2]: https://github.com/settings/tokens
[3]: https://github.com/travis-ci/travis.rb
[4]: https://github.com/nixwiz/sensu-go-fatigue-check-filter/blob/master/spec/fatigue_check.js
[5]: https://github.com/portertech/sensu-severity-filter/blob/master/spec/has_severity.js
