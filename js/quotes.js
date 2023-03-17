const quotes = [
    {
        quote : "You will face many defeats in life, but never let yourself be defeated.",
        author : "Maya Angelou"
    },
    {
        quote : "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author : "Nelson Mandela"
    },
    {
        quote : "Love, free as air at sight of human ties, Spreads his light wings, and in a moment flies.",
        author : "Alexander Pope"
    },
    {
        quote : "To love and win is the best thing. To love and lose, is the next best thing.",
        author : "William Thackeray"
    },
    {
        quote : "The supreme happiness in life is the conviction that we are loved.",
        author : "Victor Hugo"
    },
    {
        quote : "Success is going from failure to failure without a loss of enthusiasm.",
        author : "Winston Churchill"
    },
    {
        quote : "Always bear in mind that your own resolution to succeed is more important than any other.",
        author : "Abraham Lincoln"
    },
    {
        quote : "Try not to become a man of success but rather try to become a man of value.",
        author : "Albert Einstein"
    },
    {
        quote : "If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.",
        author : "Martin Luther King Jr."
    },
    {
        quote : "The fastest way to change yourself is to hang out with people who are already the way you want to be.",
        author : "Reid Hoffman"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;