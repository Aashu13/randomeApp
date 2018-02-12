var quoteObjects = [
  {
    Quote:
      "Dream is not what you see in sleep is the thing which does't let you sleep",
    author: "A.P.j Abdul Kalam",
    Image: 'url("./images/dream.jpg")'
  },

  {
    Quote:
      "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
    Image: 'url("./images/practice.jpg")'
  },

  {
    Quote: "If you do what you always did, you will get what you always got",
    author: "Anonymous",
    Image: 'url("./images/sucess.jpg")'
  },

  {
    Quote: "You may have to fight a battle more than once to win it",
    author: "Margaret Thatcher",
    Image: 'url("./images/fight.jpg")'
  },
  {
    Quote: "Winners are not those who never fail but who those never quit",
    author: "denny",
    Image: 'url("./images/neverquit.jpg")'
  },
  {
    Quote: "Don't let what you can not do interfere with what you can do.",
    author: "John R. Wooden",
    Image: 'url("./images/inter.jpg")'
  },
  {
    Quote: "To live a creative life, we must lose our fear of being wrong",
    author: "Anonymous",
    Image: 'url("./images/fear.jpg")'
  },
  {
    Quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    Image: 'url("./images/sad.jpg")'
  },
  {
    Quote:
      "Life is not about finding yourself. Life is about creating yourself",
    author: "Lolly Daskal",
    Image: 'url("./images/creatinglife.jpg")'
  },
  {
    Quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    Image: 'url("./images/luck.jpg")'
  }
];

var i = 0;

function renderQuotesFunction() {
  var para = document.getElementById("para");
  para.textContent = quoteObjects[i].Quote;
  para.style.fontSize = "27px";
  para.style.textAlign = "center";
  para.style.transition = "all 2s";

  var author_Name = document.getElementById("auther_Name");
  author_Name.textContent = quoteObjects[i].author;
  author_Name.style.transition = "all 2s";

  document.body.style.backgroundImage = quoteObjects[i].Image;
  document.body.style.transition = "all 2s";

  i++;

  if (i == quoteObjects.length) {
    i = 0;
  }
}

renderQuotesFunction();

document
  .getElementById("newQuote_btn")
  .addEventListener("click", renderQuotesFunction);

document.getElementById("tweetBtn").addEventListener("click", function() {
  window.open("https://www.twitter.com");
});

document.getElementById("tumblrBtn").addEventListener("click", function() {
  window.open("https://www.tumblr.com");
});
