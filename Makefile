lint-fix:
	./node_modules/.bin/eslint --fix index.js test/test.js

lint-check:
	./node_modules/.bin/eslint index.js test/test.js

jenkins-build:
	./jenkins-build.sh

rebase:
	git fetch origin develop
	git rebase origin/develop

commit:
	@node ./node_modules/ac-semantic-release/lib/commit.js

release:
	@node ./node_modules/ac-semantic-release/lib/release.js


.PHONY: check
