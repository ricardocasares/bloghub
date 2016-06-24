class AppHeaderCtrl {
  // @ngInject
  constructor(CONFIG, User, $scope) {
    this.appName = CONFIG.appName;
    this.currentUser = User.current;

    $scope.$watch('User.current', (newUser) => {
      this.currentUser = newUser;
    });
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
