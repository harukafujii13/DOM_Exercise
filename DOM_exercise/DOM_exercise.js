/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.textContent.split(" ").map(word => {
  if(word.length > 8){
    return `<mark>${word}</mark>`
  }
  return word
}).join(" ")

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const link =  document.createElement("a");
link.href = "http://officeipsum.com/"
link.innerHTML = "Link to office ipsm"
document.body.appendChild(link)

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
paragraph.innerHTML = paragraph.innerHTML.split(".").join(".</p><p>")


/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const wordCount = paragraph.innerText.split(" ").length
const wordCountEl = document.createElement("div")
wordCountEl.innerHTML = `${wordCount} words`
document.body.insertBefore(wordCountEl, paragraph)

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
paragraph.innerHTML = paragraph.innerHTML.replace("?", "🤔").
replace("!", "😯")