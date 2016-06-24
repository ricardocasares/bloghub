const CONFIG = {
  token: '<%= github.token %>',
  endpoint: 'https://api.github.com/repos/<%= github.user %>/<%= github.repo %>/',
  appName: '<%= app.title %>',
  debug: <%= settings.debug %>
};

export default CONFIG;
