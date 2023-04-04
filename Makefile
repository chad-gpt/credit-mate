.PHONY: install backend frontend deps clean

install:
	@pip install -r src/user/requirements.txt
	@pip install -r src/gateway/requirements.txt

frontend:
	@cp .env src/frontend/.env
	@cd src/frontend && npm start

backend:
	@cp .env src/backend/.env
	@python src/backend/manage.py runbackend

deps:
	@pip-compile -v src/user/requirements.in
	@pip-compile -v src/gateway/requirements.in

clean:
	rm -rf venv