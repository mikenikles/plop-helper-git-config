const merge = require("lodash/merge");
const get = require("lodash/get");
const getGitConfigPath = require("git-config-path");
const parseGitConfig = require("parse-git-config");

const globalGitConfig = parseGitConfig.sync({
  cwd: "/",
  path: getGitConfigPath({ type: "global" })
});
const localGitConfig = parseGitConfig.sync();
const gitConfig = merge({}, globalGitConfig, localGitConfig);

module.exports = configPath => get(gitConfig, configPath, "");
