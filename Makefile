.PHONY: install backend frontend deps clean

install:
	@echo "\nInstalling backend dependencies\n"
	pip install -r src/user/requirements.txt
	@echo "\nInstalling frontend dependencies\n"

frontend:
	@cp .env src/frontend/.env
	@cd src/frontend && npm start

backend:
	@cp .env src/backend/.env
	@python src/backend/manage.py runbackend

deps:
	@pip-compile -v src/user/requirements.in

clean:
	rm -rf venv