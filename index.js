const { TwitterApi } = require("twitter-api-v2");
const dotenv = require("dotenv").config();

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.API_ACCESS_TOKEN,
  accessSecret: process.env.API_ACCESS_SECRET,
});
async function makeTweet() {
  const tweet = await client.v1.tweet(
    "Hello, world I'm tweeting from my node.js! app #twitter api"
  );
  console.log(tweet);
}
makeTweet();
