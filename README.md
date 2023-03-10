# authentication-nestjs
A project for classes.

## Description
[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Using Docker

```bash
$ docker build -f .devops/Dockerfile -t authentication:v1.0.0 .
```

Run Kubernetes container:

```bash
$ kubectl apply -f .devops/deploy.yml
```

## License

Nest is [MIT licensed](LICENSE).