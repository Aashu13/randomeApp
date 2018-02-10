var quoteObjects = [{
    Quote: "Dream is not what you see in sleep is the thing which does't let you sleep",
    author: "A.P.j Abdul Kalam",
    imgUrl: "../images/creatinglife.jpg"
  },

  {
    Quote: "All our dreams can come true if we have the courage to pursue them.",
    author: "Walt Disney",
    imgUrl: "../images/dream.jpg"

  },

  {
    Quote: "If you do what you always did, you will get what you always got",
    author: "Anonymous",
    imgUrl: "../images/creatinglife.jpg"
  },

  {
    Quote: "You may have to fight a battle more than once to win it",
    author: "Margaret Thatcher",
    imgUrl: "../images/fear.jpg"
  },
  {
    Quote: "Winners are not those who never fail but who those never quit",
    author: "denny",
    imgUrl: "../images/fight.jpg"
  },
  {
    Quote: "Don't let what you can not do interfere with what you can do.",
    author: "John R. Wooden",
    imgUrl: "../images/interface.jpg"
  },
  {
    Quote: "To live a creative life, we must lose our fear of being wrong",
    author: "Anonymous",
    imgUrl: "../images/neverquit.jpg"
  },
  {
    Quote: "No one can make you feel inferior without your consent.",
    author: "Eleanor Roosevelt",
    imgUrl: "../images/practice.jpg"
  },
  {
    Quote: "Life is not about finding yourself. Life is about creating yourself",
    author: "Lolly Daskal",
    imgUrl: "../images/success.jpg"
  },
  {
    Quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
    imgUrl: "../images/sad.jpg"
  }
];

var imgArray = [
  "../images/dream.jpg",

  "../images/creatinglife.jpg"
]


var i = 0;

function renderQuotesFunction() {
  var para = document.getElementById("para");
  para.textContent = quoteObjects[i].Quote;
  para.style.fontSize = "25px";
  para.style.textAlign = "center";

  var author_Name = document.getElementById('auther_Name');
  author_Name.textContent = quoteObjects[i].author;

  document.body.style.backgroundImage = imagArra


  i++;


  if (i == quoteObjects.length) {

    i = 0;
  }

}


renderQuotesFunction();

document
  .getElementById("newQuote_btn")
  .addEventListener("click", renderQuotesFunction);

document.getElementById('previousQuote_btn').addEventListener("click", function () {

  window.history.back();

});