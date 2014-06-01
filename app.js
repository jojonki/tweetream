
var util = require('util'),
    twitter  = require('twitter'),
    security = require('./security'),
    lastStream = undefined;

var twit = new twitter({
  consumer_key        : security.twitter.consumer_key, 
  consumer_secret     : security.twitter.consumer_secret,
  access_token_key    : security.twitter.access_token_key,
  access_token_secret : security.twitter.access_token_secret
});

// function tweet(){
//   twit.updateStatus('docomo', function (data) {
//     console.log(data);
//   });
// }
//
// function getHomeTimeline() {
//   twit.getHomeTimeline(function(data) {
//     // console.log(data);
//     var text = '';
//     data.forEach(function(tweet, index) {
//       text += '<p>'; 
//       console.log(tweet.text);
//       console.log(tweet.user.screen_name);
//       text += tweet.user.screen_name + ' : ' + tweet.text;
//       text += '</p>';
//     });
//   });
// }

function showStream(string) {
  console.log('showStream ' + string);
  if (string === undefined) return;
  if (lastStream !== undefined) lastStream.destroy();
  twit.stream('filter', {track:string}, function(stream) {
    lastStream = stream;
    stream.on('data', function(data) {
      // console.log(util.inspect(data.text));
      if(data.text !== undefined) {
      // <span>Junki Ohmura</span><span class="user_screenname"> @jojonki</span>
        var tr = $('<tr>');
        tr.append($('<td>').append($('<img>', {src:data.user.profile_image_url})).after($('<br>')));
        tr.append($('<td>')
                  .append($('<span>', {text:data.user.name})).after('<span>', {class:'user_screenname', text: '@' + data.user_screenname}).append($('<br>'))
                  .append($('<span>', {text:data.text})).append(('<br>'))
                  .append($('<span>', {class: 'date', text: data.user.created_at})));

        $('#tweet_table tbody').prepend(tr);
      }
    });
    stream.on('error', function(error) {
      console.log('----------------');
      console.log(error);
      if(lastStream !== undefined) lastStream.destroy();
      if(stream !== undefined) stream.destroy();
      setTimeout(showStream(string), 10000);
    });
  });
}
