export default class AppFooterCtrl {
  // @ngInject
  constructor(CONFIG) {
    this.appName = CONFIG.appName;
    // Get today's date to generate the year
    this.date = new Date();
  }
}

let AppFooter = {
  controller: AppFooterCtrl,
  templateUrl: 'layout/footer.html'
};

export default AppFooter;
