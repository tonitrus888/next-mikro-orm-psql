This is a [Next.js](https://nextjs.org) project template that integrates [NextUI](https://nextui.org) for UI components and [MikroORM](https://mikro-orm.io) for ORM with PostgreSQL.

## Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm, yarn, ... (for package management)
- Docker (for setting up a database) OR an existing PostgreSQL database

## Getting Started

### Installation

1. To install all the dependencies of the template, simply run the install command using your preferred package manager:

```bash
npm install
# or
yarn install
```

2. To set up the environment variables, copy the contents of the `sample.env` file to a new file in the root of the project called `.env`. You can do this manually or simply run the following command:

```bash
cp sample.env .env
```

3. If you need to connect to a specific PostgreSQL database you need to update the credentials in the newly created `.env` file. In this case the installation process completed at this step.
If you are planning to run a separate PostgreSQL database in a docker container for development purposes you can leave the values as-is and continue with the installation.

4. To set up a development PostgreSQL database you can use the `docker-compose.yaml` [[source]](https://medium.com/@jewelski/quickly-set-up-a-local-postgres-database-using-docker-5098052a4726) to create two containers. One running PostgreSQL and another hosting pgAdmin, a free, open-source graphical tool for managing and administering your database.
To do this, simply start the services defined in the file in "detached mode" using this command:

```bash
docker compose up -d
# or if that fails
docker-compose up -d
```

### Database initialization

For simplicity, this section will only dive into the initialization of the self-hosted dev database. If you are connecting to an existing PostgreSQL database, please consult the [MikroORM documentation](https://mikro-orm.io/docs), especially the [Schema Generator](https://mikro-orm.io/docs/schema-generator) and [Entity Generator](https://mikro-orm.io/docs/entity-generator) sections. Please be aware of potential data loss when working on your existing database with the MikroORM CLI.

With this out of the way, here are the instructions to create the test schema included in this template and an initial migration (it is recommended to read up on [Schema Creation](https://mikro-orm.io/docs/schema-generator) and [Migrations](https://mikro-orm.io/docs/migrations) first).

1. Make sure you completed the [Installation](#installation) all the way to step 4

2. To complete the database setup:
   1. Open a browser and navigate to http://localhost:5050/ as this will open pgAdmin
   2. Once there, log in using the default credentials user: `admin@admin.com` and password: `root`
   3. On the landing page, click the "Add New Server" option in the "Quick Links" section
   4. As "Name" put `postgres`
   5. In the "Connection" tab as "Host name/address" put `postgres`
   6. As "Password" put `root`
   7. Click "Save"

3. Create the database schema from the entities defined in the entities array of the MikroORM config `mikro-orm.config.ts` using this command:

```bash
npx mikro-orm schema:create --run
```

4. Now create an initial migration:

```bash
npx mikro-orm migration:create --initial
```

WORK IN PROGRESS
----------------

### Run the development server

### Usage

### MikroORM Configuration
