
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

chrome.browserAction.onClicked.addListener(function(activeTab) {
    // Get Newest
    openUrl("https://news.ycombinator.com/newest");
    getStories('new', function() {
        this.forEach(function(storyId) {
            getStoryUrl(storyId, function() {
                if (this.url !== undefined) {
                    openUrl(this.url);
                }
            });
        });
    });

    // Get Top
    openUrl("https://news.ycombinator.com/news");
    getStories('top', function() {
        this.forEach(function(storyId) {
            getStoryUrl(storyId, function() {
                if (this.url !== undefined) {
                    openUrl(this.url);
                }
            });
        });
    });
})