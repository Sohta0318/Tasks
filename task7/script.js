/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((char) => {
    if (char.length > 8) {
      return '<span class="hightlight">' + char + "</span>";
    } else {
      return char;
    }
  })
  .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/
const linkTag = document.createElement("a");
linkTag.href = "http://officeipsum.com/";
linkTag.innerText = "Link";
paragraph.appendChild(linkTag);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
paragraph.innerHTML =
  paragraph.innerHTML.split(/\.[^\.|<]/).join(".</p><p>") + "</p>";
/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count after the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const count = paragraph.innerText.trim().split(" ").length;

const heading = document.querySelector("h1");
const countPara = document.createElement("p");
countPara.innerText = count;
heading.insertAdjacentElement("afterend", countPara);

console.log(count);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

paragraph.innerHTML = paragraph.innerText
  .split(" ")
  .map((char) => {
    if (char.includes("?")) {
      return char.replace("?", "🤔");
    } else if (char.includes("!")) {
      return char.replace("!", "😲");
    } else {
      return char;
    }
  })
  .join(" ");
