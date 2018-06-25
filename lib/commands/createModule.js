const createModule = ({ name, baseDir }) => {
  // Coax baseDir to default if it doesn't already exist
  if (baseDir == null) {
    baseDir = "./";
  }
  console.log(`name: ${name}, baseDir: ${baseDir}`);
  return true;
};

const questions = [
  {
    type: "input",
    name: "name",
    message: "What's the name of the module?"
  },
  {
    type: "input",
    name: "baseDir",
    message: "Where should we create the module directory?",
    default: "./"
  }
];

module.exports = {
  command: createModule,
  questions: questions
};
