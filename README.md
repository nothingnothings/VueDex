## Run project

- Build image
  docker build -t hugline-front-img . --no-cache

- Run container
  docker run --rm --name hugline-frontend -p 80:80 hugline-front-img
