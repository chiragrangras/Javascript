$(document).ready(function (){
    const userDetailsArray = [];
    $('#add').click(function(event){
        event.preventDefault();
        const firstName = $('#first-name').val();
        const lastName = $('#last-name').val();
        const email = $('#email').val();
        const age = $('#age').val();
        
        // const userDetails = {"firstName": firstName, "lastName": lastName, "email": email, "age": age};
        const userDetails = {firstName, lastName, email, age};
        // console.log(userDetails);

        userDetailsArray.push(userDetails);
        console.log(userDetailsArray);
    });
});