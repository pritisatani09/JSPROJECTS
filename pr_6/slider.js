let quotesData = [
    {
      "quote": "Be yourself; everyone else is already taken.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": ["Inspirational", "Advice", "Humor"]
    },
    {
      "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": ["Philosophy", "Humor"]
    },
    {
      "quote": "True friends stab you in the front.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": ["Philosophy", "People"]
    },
    {
      "quote": "Women are made to be Loved, not understood.",
      "author": "Oscar Wilde",
      "profession": "Irish poet",
      "topics": ["Philosophy", "Humor"]
    },
    {
      "quote": "Be the change that you wish to see in the world.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": ["Inspirational", "Philosophy", "Advice"]
    },
    {
      "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "author": "Mahatma Gandhi",
      "profession": "Indian leader",
      "topics": ["Inspirational", "Life", "Advice"]
    },
    {
      "quote": "No one can make you feel inferior without your consent.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": ["Wisdom"]
    },
    {
      "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": ["Wisdom", "People"]
    },
    {
      "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": ["Wisdom", "Advice"]
    },
    {
      "quote": "Do one thing every day that scares you.",
      "author": "Eleanor Roosevelt",
      "profession": "Former First Lady of the United States",
      "topics": ["Wisdom", "Life"]
    },
    {
      "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
      "author": "Martin Luther King",
      "profession": "American minister",
      "topics": ["Inspirational", "Wisdom", "Love"]
    }
  ];
  
  let index = 0;
  
  function generateQuotes(index) {
    document.getElementById("quote").innerHTML = `"${quotesData[index].quote}"`;
    document.getElementById("authorName").innerHTML = `- ${quotesData[index].author}`;
  }
  
  function prevIndex() {
    index = (index === 0) ? quotesData.length - 1 : index - 1;
    generateQuotes(index);
  }
  
  function nextIndex() {
    index = (index === quotesData.length - 1) ? 0 : index + 1;
    generateQuotes(index);
  }
  
  generateQuotes(index);
  