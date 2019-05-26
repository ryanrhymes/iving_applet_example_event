
.PHONY: all
all: push


.PHONY: push
push:
	git commit -am "coding ..." && \
	git push origin `git branch | grep \* | cut -d ' ' -f2`
