export default class SettingsCtrl {
  // @ngInject
  constructor(User, $state, $rootScope) {
    this._User = User;
    this._$state = $state;
    this.formData = {
       email: User.current.email,
       bio: User.current.bio,
       image: User.current.image,
       username: User.current.username
    };
  }

  submitForm() {
    this.isSubmitting = true;
    this._User.update(this.formData).then(
      (user) => {
        this._$state.go('app.profile.main', {username:user.username});
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
}
