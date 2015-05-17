# Overview
Tweetable is a plugin to turn any html element into a twitter link that either uses the native app, or falls back to web.

Tweetable provides an ideal experience for users who want to tweet headlines, quotes, and other highlighted content directly from your blog.

#Setup
Include the following before your `</head>` tag (note that on Wordpress or other blog templates, there’s usually a place to paste custom code like this):

```html
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
 <script src="http://omarish.com/tweetable/tweetable.js"></script>
```

(Note: if you get SSL errors, simply copy the entire code in this repo between your `<head></head>` tabs, your Wordpess/other custom code box, or ask your webdeveloper ;)

#Use
1. Once you have Tweetable setup, find a piece of text that you want to make Tweetable.
2. Wrap the text in `<a></a>` (Tweetable will work on other html elements too, but <a> makes it look like a link which avoids confusion)
3. Set `href = "#"`
4. Set `class = "tweetable"`. If you already have assigned other classes to this element, simply separate them with spaces: `class = "class1 class2 tweetable"`.

#Optional Parameters
* `data-user`: Set the twitter handle that should get credit for the post (you). 
* `data-message`: By default, Tweetable will use the text within the HTML element as the text of the tweet, but you can set alternate tweet text via this parameter. 

#Example
```html
 <a class="specialformatting tweetable" data-user="nootrobox" href="#">Here's the text I want my readers to tweet.</a>
```

For a live example, see [The Nootrobox blog](https://www.nootrobox.com/blog/starcraft) and more information [on this page](http://omarish.com/2015/05/16/tweetable.html).
