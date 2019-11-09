var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'Nnv0R7eAdclq071MczSkQl4YB',
    consumer_secret: 'cpJwrYpMvj96fwybEPzr43BqdfYQ2UlpgnwU448xcQ6pm8weSv',
    access_token_key: '982096436-oktCKqAwYImQH7MFkQnkGiygii2fluIOCbrwR3cg',
    access_token_secret: '21s6P7GW0VbuZgpBv5yJmCKrpPfWSGnBPjsqgyCiWyu2m'
});

let url = "https://api.twitter.com/1.1/search/tweets.json"
let keyword = '#ああ言えばこう言うこう言えばどう言う'

var params = {
    'count': 10,
    'exclude_replies': true,
    'q': keyword
}

var text = ""
client.get('statuses/user_timeline', params, function (error, tweets, response) {
    if (!error) {
        text = tweets
        console.log(tweets);
    }
});

var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    //response.write(text);
    response.end('Hello World\n');
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000');