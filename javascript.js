var quotes = [
'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
'The way to get started is to quit talking and begin doing. -Walt Disney',
'Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma, which is living with the results of other peoples thinking. -Steve Jobs',
'If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt',
'If you look at what you have in life, you will always have more. If you look at what you dont have in life, you will never have enough. -Oprah Winfrey',
'If you set your goals ridiculously high and it is a failure, you will fail above everyone else success. -James Cameron',
'Life is what happens when you are busy making other plans. -John Lennon',
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}