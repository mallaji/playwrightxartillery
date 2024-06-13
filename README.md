Playwright is a testing framework that allows developers to automate interactions with web browsers. It enables the creation of browser tests that simulate user actions like clicking, typing, and navigating through web pages.
To install playwright go to Vs Code >> Ctrl+` >> Paste:  npm init playwright@latest -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha --template=javascript
To run : npx playwright test ./tests/login.test.js --headed
To record test : npx playwright codegen
To run test in env: $env:NODE_ENV="test"
npx playwright test ./gibl/logins.test.js --headed

Artillery x Playwright is an intriguing combination! It could imply a collaboration or fusion between two seemingly contrasting fields: artillery, which pertains to heavy military weapons, and playwright, who is a writer of plays.

One interpretation could be the creation of dramatic narratives or performances that incorporate elements of conflict, power dynamics, or historical events involving artillery or warfare. It might explore themes of violence, strategy, or the impact of war on individuals and societies.

Alternatively, it could also metaphorically suggest a powerful or explosive style of storytelling or theatrical production. Perhaps it involves intense dialogue, dramatic tension, or plotlines that metaphorically mirror the dynamics of armed conflict.

In essence, "Artillery x Playwright" could inspire a blend of artistic expression and historical or thematic exploration, offering a unique perspective on human experiences through the lens of both war and dramatic narrative.
To generate results in JSON files: artillery run artillery.yml --output result.json
To generate HTML reports: artillery report result.json 
To run on github: artillery run artillery.yml --record --key a9_M9glNXlQXFHvzOUU42CI76281Yvnic2U
