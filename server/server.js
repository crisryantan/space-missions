'use strict';

const Hapi = require('hapi');

const launches = require('./resources/launches.json');
const launchpads = require('./resources/launchpads.json');


const getLaunchesHandler = (req, resp) => {
  console.log('GET /launches');
  return resp(launches);
  
};

const getLaunchPadsHandler = (req, resp) => {
  console.log('GET /launchpads');
  return resp(launchpads);
};

const server = new Hapi.Server({
  connections: {
    routes: {
      cors: true,
    }
  }
});

server.connection({
  host: 'localhost',
  port: 8001,
});

server.route({
  method: 'GET',
  path: '/launches', 
  handler: getLaunchesHandler
});

server.route({
  method: 'GET',
  path: '/launchpads', 
  handler: getLaunchPadsHandler
});

server.start((err) => {
  if (err) { throw err; }
  console.log(`Server running at: ${server.info.uri} 😎`)
});