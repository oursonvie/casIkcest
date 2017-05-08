FlowRouter.route('/', {
   name: 'landingPage',
    action() {
        BlazeLayout.render('MainLayout', {main: 'landingPage'});
    }
});
