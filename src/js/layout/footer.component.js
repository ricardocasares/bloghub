export default class AppFooterCtrl {
  // @ngInject
  constructor(AppConstants) {
    this.appName = AppConstants.appName;
    // Get today's date to generate the year
    this.date = new Date();
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: 'layout/footer.html'
};

export default AppFooter;
