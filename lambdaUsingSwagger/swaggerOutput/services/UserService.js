/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Adds A User
*
* userRequestSchema UserRequestSchema  (optional)
* returns User_Response_Schema
* */
const userAddPOST = ({ userRequestSchema }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userRequestSchema,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Returns All Users
*
* returns User_Response_Schema_1
* */
const userAllPOST = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
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
  userAddPOST,
  userAllPOST,
};
