var num = 0; // To test if is program first tiem running
var tagArray = ["guitar", "games", "beach", "xbox", "party", "football", "groupwork", "restaurant", "fundraiser", "soupkitchen", "newhouse", "comicbooks", "boardgame", "yoga", "cook"];
function addTag(id) {
    var newTag = document.getElementById(id).value;
    for (var i = 0; i < tagArray.length; i++) {
        if (newTag.toUpperCase() == tagArray[i].toUpperCase()) {
            return;
        }
        
    }
    tagArray.push(newTag);
}
function updateTagField() {
    for (var i = 0; i < tagArray.length; i++) {
        $(".tagChoiceField").append('<label class="tags btn btn-secondary">'
    + '<input type="checkbox" onclick="addTagsToCollection(' + i + ');" autocomplete="off" id="tag' + i + '">' + tagArray[i] + '</label>');
    }
}
function showFilter() {
    var e = document.getElementById('popUpFilter');
    if (e.style.display == 'block') {
        e.style.display = 'none';
    }
    else {
        e.style.display = 'block';
        updateTagField();
        console.log("I am here");
    }
}
var pingTags;
var temp = [];
function addTagsToCollection(num) {
    temp.push(tagArray[num]);
}
function addTagsToPing() {
    pingTags = temp;
    temp = [];
    for (var i = 0; i < pingTags.length; i++) {
        $(".addedToPing").append(pingTags[i]);
        console.log(pingTags[i]);
    }
    pingTags = [];
}
// clear tags in pop up window when submit or x button is clicked
function clearTags() {
    $(".tagChoiceField").empty();
}
function contains(text1, text2) {
    if (text1.indexOf(text2) != -1) {
        return true;
    } else return false;
}
$(function() { 
    $("#newTag").keyup(function() {
        console.log("key is up");
        var searchText = $("#newTag").val().toUpperCase();
        if (searchText == "") {
            $(".tagChoiceField .tags").each(function() {
                $(this).show();
            });
        }
        $(".tagChoiceField .tags").each(function() {
                if (contains($(this).text().toUpperCase(), searchText)) {
                    console.log($(this).text());
                    $(this).show();
    
                } 
                else {
                    $(this).hide();
                    console.log($(this).text());
                }
        });
    });
});