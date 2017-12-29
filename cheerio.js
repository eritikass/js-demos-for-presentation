const cheerio = require('cheerio');
const chalk = require('chalk');

const $ = cheerio.load(`
<html>
<head>
    <title>test page</title>
</head>
<body>
    <h2 class="title">Hello world</h2>

    <img src="http://example.com/img1.jpg" />
    <img src="http://example.com/img2.jpg" />
    <img src="http://example.com/img3.jpg" />
</body>
</html>
`);

console.warn(chalk.red($('h2.title').text()));
$('img').each(function(i, elem) {
    console.warn(chalk.green($(elem).attr('src')));
});


$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());