apache:
	docker-compose run --rm --use-aliases --service-ports  apache

apache-shell:
	docker-compose run --rm apache sh
