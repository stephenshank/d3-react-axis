module.exports = {
  apps : [
    {
      name: "d3-react-axis",
      script: "./src/server.js",
      watch: true,
      instance_var: "INSTANCE_ID",
      env: {
        "PORT": 8007,
      }
    }
  ]
};
