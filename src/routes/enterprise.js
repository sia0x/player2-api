import EnterpriseController from "../app/controllers/enterprise";

const enterprise = (routes) => {
  routes.get("/", EnterpriseController.index);
};

module.exports = enterprise;
