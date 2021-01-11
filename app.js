const tweetText = document.getElementById("tweet-text").value;
const postButton = document.getElementById("post");
function postTweet(e) {
  e.preventDefault(e);
  console.log(tweetText);
}
postButton.addEventListener("click", postTweet());

//cannot figure out what's wrong !!!
