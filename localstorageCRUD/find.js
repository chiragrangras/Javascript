// method to get details person data based on id
function find(id){
    // get data from localstorage and store to contactlist arrary
    // we must to use JSON.pare,because data as string, we need convert to arrary
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function(value){
        if(value.id == id){
            document.getElementById('id').value = value.id
            document.getElementById('name').value = value.name
            document.getElementById('age').value = value.age
            document.getElementById('address').value = value.address
            document.getElementById('phone').value = value.phone
        }
    })
}