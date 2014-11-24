all: silly

silly:
	git add -A
	git commit -am 'ALL THE UPDATES!'
	npm version patch
	git push
