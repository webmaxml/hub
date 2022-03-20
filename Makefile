apache_cmd := docker-compose run --rm --use-aliases --service-ports apache

apache:
	${apache_cmd}

apache-shell:
	${apache_cmd} sh
