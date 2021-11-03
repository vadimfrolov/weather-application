# weather-application
A simple `weather-application` capable of fetching and visualising forecast 5 days weather forecast data with 3-hour step

<img alt="Awesome GitHub Profile Readme" src="https://im7.ezgif.com/tmp/ezgif-7-ba03ca661f08.gif"> </img>

## Tech stack

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Webpack](https://webpack.js.org/)
- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)
- [Axios](https://github.com/axios/axios)
- [lint-staged](https://github.com/okonet/lint-staged/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Open Weather Map API](https://openweathermap.org/forecast5)

## How to run

Verify if you use Node.js 6.x or higher (Node.js ^10 is recommended) and Docker before start.

1. Clone the stable branch

```git
git clone -b git@github.com:vadimfrolov/weather-application.git
weather-application
```

2. Create .env in root folder file with your key

```typescript
APP_ID='your app key'
```


3. Run Docker

```docker
docker-compose up --build
```


## Project structure
```bash
weather-application

├── .husky                      # pre-commit config
├── node_modules                # Global Node.js modules
├── src                    	# Available packages
│   ├── assets                  # images, fonts and styles
│   ├── axios                   # axios config
│   ├── components              # app components
│   ├── nginx                  	# nginx config and Dockerfile
│   ├── pages                  	# app pages
│   ├── services                # services for data fetch
│   ├── utils                  	# utils
│   └── store                   # redux store
├── webpack                     # webpack settings
├── tsconfig.json               # Typescript settings

```

## Road map
- [ ] add city input
- [ ] create demo on Heroku
- [ ] create Gitlab CI/CD pipeline to Github actions and dockerhub registry.
- [ ] use Teleport API for city names fetching

