import { Projects } from "./project.module.js";
import { Users } from "../users/user.module.js";

const allProjects = async () => {
  const projects = await Projects.find();
  return projects;
};

const addProject = async (parent, args) => {
  let project = new Projects(args.input);
  project = await project.save();
  return project;
};

const project = async (parent, args) => {
  const user = await Projects.findById(args._id);
  return user;
};

const leader = async (parent) => {
  const user = await Users.findById(parent.leader_id);
  return user;
};

export default {
  Query: {
    allProjects,
    project,
  },
  Project: {
    leader,
  },
  Mutation: {
    addProject,
  },
};
