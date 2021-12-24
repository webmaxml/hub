# <<{ main

install: ruby-install node-install

build: jekyll-build owner

owner:
	sudo chown -R ${USER}:${USER} dist

# }>>

# <<{ ruby

ruby-install:
	docker-compose run --rm ruby bash -c "bundle install"

ruby-shell:
	docker-compose run --rm ruby bash

jekyll-watch:
	docker-compose run --rm ruby bash -c "bundle exec jekyll build --config _jekyll.yml --watch"

jekyll-build:
	docker-compose run --rm ruby bash -c "bundle exec jekyll build --config _jekyll.yml"

# }>>

# <<{ node

node-install:
	docker-compose run --rm node bash -c "npm install"

node-shell:
	docker-compose run --rm node bash

sync:
	docker-compose run --rm -p 3000:3000 node bash -c "npx browser-sync start --server dist --files dist --port 3000 --no-open --no-ui --no-notify --no-inject-changes"

# }>>

