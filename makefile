dev-up:
	docker-compose -f docker-compose.dev.yml up --build -d
dev-down:
	docker-compose -f docker-compose.dev.yml down
up:
	docker-compose up --build -d
down:
	docker-compose down