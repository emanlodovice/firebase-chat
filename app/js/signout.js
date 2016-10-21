var provider = new firebase.auth.GoogleAuthProvider();

$('#logout').on('click', function(e) {
    var currentUser = firebase.auth().currentUser;
    if (currentUser !== null) {
        firebase.auth().signOut().then(function() {
            window.location = '/';
        }, function(error) {
            console.log(error);
        });
    }
});