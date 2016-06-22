class AppHeaderCtrl {
  // @ngInject
  constructor(AppConstants, User, $scope) {
    this.appName = AppConstants.appName;
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