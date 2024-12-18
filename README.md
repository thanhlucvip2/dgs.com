# DGS.com

## Run the following command to automatically download the source and setup above

# Installation app

## `Use nvm`

```console
nvm install
nvm use
npm install -g yarn
yarn install
```

## or

## `Use nodejs app`

https://nodejs.org/en/download/package-manager
download and install node 20x

```console
npm install -g yarn
yarn install
```

# `2. Setup env`

## Create a copy of the file env.example then rename it to .env

### `1. Command create crypto`

```console
  yarn crypto:random-key
```

### `2. Copy the generated codes below to encrypt the password and update .env file`

```console
CIPHER_KEY
CIPHER_IV
JWT_SECRET_KEY
JWT_EXPIRED_TIME_TOKEN
```

`update env database`

```
DB_NAME
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
```

`update env mailer`

```
MAIL_HOST
MAIL_USER
MAIL_PASS
EMAIL_PORT
```

### `3. Create table`

#### `run migration`

```console
 yarn migration:run
```

#### `revert migration`

```console
yarn migration:revert
```

### `4. Create default user data`

```console
yarn create-user:data
```

# `Running the app`

```console
# development
$ yarn run start:dev
```
