const tweetText = document.getElementById("tweet-text").value;
const postButton = document.getElementById("post");
let postTweet = (event) => {
  event.preventDefault();
  console.log(tweetText);
};
