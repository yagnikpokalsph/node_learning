# Variables
COMPOSE_FILE = podman-compose.yaml

# Targets
all: up

up:
	@echo "Starting MySQL Podman Compose setup..."
	#podman pull mysql:8.2
	podman run --rm -e MYSQL_ROOT_PASSWORD=secret docker.io/mysql:8.2
	#podman run --name test-mysql -e MYSQL_ROOT_PASSWORD=strong_password -d mysql
	#podman run --rm -e POSTGRES_PASSWORD=secret docker.io/postgres:14
	#podman exec -it test-mysql bash
	mysql -u root -p strong_password
	@echo "MySQL service is up and running."
check:
	podman exec -it test-mysql bash
down:
	@echo "Stopping MySQL Podman Compose setup..."
	podman-compose -f $(COMPOSE_FILE) down
	@echo "MySQL service is stopped."

restart: down up

logs:
	@echo "Displaying logs for MySQL service..."
	podman-compose -f $(COMPOSE_FILE) logs

clean:
	@echo "Stopping and removing all MySQL data..."
	podman-compose -f $(COMPOSE_FILE) down -v
	@echo "Clean up completed."

ps:
	@echo "Checking running containers..."
	podman ps
