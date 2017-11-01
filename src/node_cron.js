
const cron = require('node-cron');

/*

 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *

*/

// Using step values => "every two minutes” => just use */2.
cron.schedule('*/5 * * * * *', function(){
  console.log('running a task every 5 second !!');
});

// cron.schedule('* * * * *', function(){
//   console.log('running a task every minute !!');
// });

// multiple values
// cron.schedule('1,2,4,5 * * * * *', function(){
//   console.log('running every minute 1, 2, 4 and 5');
// });

// Using names
cron.schedule('* * * January,September Sunday', function(){
  console.log('running on Sundays of January and September');
});

cron.schedule('* * * Jan,Sep Sun', function(){
  console.log('running on Sundays of January and September');
});