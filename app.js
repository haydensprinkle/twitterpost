function postTweet() {
  const tweetText = document.getElementById("tweet-text").value;
  var url = "https://twitter.com/intent/tweet";
  window.open(url + "?text=" + tweetText);
}

const postButton = document
  .getElementById("post")
  .addEventListener("click", function () {
    postTweet();
  });

//cannot figure out what's wrong !!!
