/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Returns A Greeting
*
* greetRequestSchema GreetRequestSchema  (optional)
* returns Greet_Response_Schema
* */
const fooGreetPOST = ({ greetRequestSchema }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        greetRequestSchema,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  fooGreetPOST,
};
