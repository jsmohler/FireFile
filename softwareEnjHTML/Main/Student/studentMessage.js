function getUsersInGroup(groupName)
{
    firestore.doc("/Class/Groups/" + groupName + "/Users/").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}