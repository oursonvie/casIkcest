
Template.landingPage.helpers({
  loginProvoke: function casLogin() {
    console.log('provoked')
    const callback = function loginCallback(error) {
      if (error) {
        console.log(error);
      }
    };
    Meteor.loginWithCas(callback);
  }
});
