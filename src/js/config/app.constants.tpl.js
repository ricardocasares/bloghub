const AppConstants = {
  token: '<%= github.token %>',
  endpoint: 'https://api.github.com/repos/<%= github.user %>/<%= github.repo %>/',
  appName: '<%= app.title %>',
};

export default AppConstants;
