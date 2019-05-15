// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement,headingValue , date ,paragraph,) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement ; 
    this.headingValue = headingValue;
    this.date = date;
    this.paragraph = paragraph;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent ='expand';
  
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',()=> this.expandArticle())
    //this.createArticle();
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    // Using our reference to the domElement, toggle a class to expand or hide the article.
  }
  // createArticle(){
    // const heading = document.createElement('h2');
    // heading.innerText = this.heading;
    // this.domElement.append(heading)
    // for(let i=0 ;i< 3; i++){
      // this.domElement.append( document.createElement('p'))
    // }
    // const par = this.domElement.querySelectorAll('p');
  //  par[0].innerText =this.date.bind(this);
    // par[1].innerText = this.paragraph(this);
  // }
 
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/


let articles = document.querySelectorAll('.article')

articles.forEach(article => {
  return new Article(article);
})