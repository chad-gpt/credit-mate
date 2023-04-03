.PHONY: install backend frontend pip-compile 

install:
	@echo "\nInstalling backend dependencies\n"
	@echo "\nInstalling frontend dependencies\n"

frontend:
	@cp .env streetsmart/frontend/.env
	@cd streetsmart/frontend && npm start

backend:
	@cp .env streetsmart/backend/.env
	@python streetsmart/backend/manage.py runbackend

pip-compile:
	@pip-compile -v streetsmart/backend/requirements.in