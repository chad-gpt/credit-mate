.PHONY: install backend frontend deps clean deploy

install:
	@pip install -r src/user/requirements.txt
	@pip install -r src/ingester/requirements.txt
	@pip install -r src/gateway/requirements.txt

frontend:
	@cp .env src/frontend/.env
	@cd src/frontend && npm start

backend:
	@cp .env src/backend/.env
	@python src/backend/manage.py runbackend

deps:
	@pip-compile -v src/user/requirements.in
	@pip-compile -v src/ingester/requirements.in
	@pip-compile -v src/gateway/requirements.in

deploy:
	@cp .env .env.bk
	@okteto context use "https://cloud.okteto.com"
	@okteto deploy -n amal-thundiyil
	@cp .env.bk .env

clean:
	rm -rf venv
	docker rm -vf $(docker ps -aq)