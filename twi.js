function postTweet() {
    var tweet = document.getElementById("tweet-input").value;
    var tweetContainer = document.getElementById("tweet-container");
    var tweetDiv = document.createElement("div");
    tweetDiv.innerHTML = tweet;
    tweetDiv.classList.add("tweet");
    tweetContainer.appendChild(tweetDiv);
    document.getElementById("tweet-input").value = "";
  }
  