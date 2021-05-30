# Farm Simulator
## Node.js coding challenge

Task was done using node.js with express.js. It was written using TypeScript.
Sequelize was used to communicate with database, and give database was PostgreSQL.

# INSTALLATION
Docker image was created and pushed to Docker Hub
```
vlatkovicb/farm-simulator:1.6
```

To create a cointainer run
```sh
docker compose up
```

In case image is not being pulled from docker hub use:
```sh
docker build -t vlatkovicb/farm-simulator:1.6 .
```


# Usage
In order to use API you need to create couple of buildings and assign units to them.

### Available routes are forwarded to http://localhost:8080/
| Methpd | Route |
| ------ | ------ |
| GET | /unit |
| GET | /building |
| POST | /unit |
| POST | /building |
| PUT | /unit/feed/{id} |

## GET /unit
Retrives all units.
## POST /unit
Create a unit.
Send json in format of: 
```json
{
    "name": "Unit name",
    "buildingId": 1
}
```


## GET /building
Retrives all buildings.
## POST /building
Create a building.
Send json in format of: 
```json
{
    "name": "Building name",
}
```

## PUT /unit/feed/{unitId}
Feed a single unit with a given id (unitId).


