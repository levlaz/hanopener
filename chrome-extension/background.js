
function getStories(storyType, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hacker-news.firebaseio.com/v0/" + storyType + "stories.json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback.call(JSON.parse(xhr.responseText).slice(0,30));
        }
    }
    xhr.send();
}

function getStoryUrl(storyId, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://hacker-news.firebaseio.com/v0/item/"+ storyId + ".json", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            callback.call(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}

function openUrl(url) {
    chrome.tabs.create({ url: url});
}

function openStoryUrl(storyType) {
    getStories(storyType, function() {
        this.forEach(function(storyId) {
            getStoryUrl(storyId, function() {
                if (this.url !== undefined) {
                    openUrl(this.url);
                }
            });
        });
    });
}

chrome.browserAction.onClicked.addListener(function(activeTab) {
    // Get Newest
    openUrl("https://news.ycombinator.com/newest");
    openStoryUrl('new');

    // Get Top
    openUrl("https://news.ycombinator.com/news");
    openStoryUrl('top');
});