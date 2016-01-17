BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
LIB   = $(shell find lib -name "*.js")
DIST   = $(patsubst lib/%.js,dist/%.js,$(LIB))

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	make build && \
	npm --no-git-tag-version version $(1) -m 'release %s' && \
	git add . && \
	git commit -m 'make build and release' && \
	git tag $$NEXT_VERSION
endef

clean:
	@rm -rf ./dist

lint:
	@ $(BIN)/eslint lib/

dist: $(DIST)
dist/%.js: lib/%.js
	@ mkdir -p $(@D)
	$(BIN)/babel $< -o $@

build: lint clean dist

pre-release: lint

release-patch: pre-release
	$(call release,patch)

release-minor: pre-release
	$(call release,minor)

release-major: pre-release
	$(call release,major)

publish:
	@ npm publish && git push --tags

.PHONY: install release-patch release-minor release-major
