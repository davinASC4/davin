var refTag = firebase.database().ref('tags');
refTag.on('value', gotDataTags, errData);
var num = 1;
var tagArray = [];
function gotDataTags(data) {
    var tags = data.val();
    var keys = Object.keys(tags);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var tag = tags[k].name;
        if (num == 1) {  // first time open page, load all tags into local array
            tagArray.push(tag);
        }
    }
    num++;
}
function errData(err) {
    console.log(err);
}
function storeTag() {
    var newTag = document.getElementById("newTag").value;
    for (var i = 0; i < tagArray.length; i++) {
        if (newTag.toUpperCase() == tagArray[i].toUpperCase()) {
            return;
        }
        
    }
    tagArray.push(newTag);
    var data = {
        name: newTag
    }
    refTag.push(data);    
}
