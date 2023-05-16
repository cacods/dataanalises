# Source:
# https://mherman.org/blog/dockerizing-a-react-app/

FROM node:16-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install

# change app/node_modules dir ownership
# this is related with permissions in app/node_modules when
# creating the .CACHE dir by node user.
# app/node_modules are root owned by `npm install` command
RUN chown -R node:node /app/node_modules 

COPY . ./

CMD ["npm", "start"]

