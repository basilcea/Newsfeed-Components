// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement,headingValue , date ,paragraph,) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement ; 
    this.headingValue = headingValue;
    this.textarea = textarea;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent ='Click to Expand';
  
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',()=> {
      this.expandArticle()
      console.log(this.expandButton.textContent)
      this.expandButton.textContent ==='Click to Expand' ? this.expandButton.textContent='Click to Close': this.expandButton.textContent='Click to Expand'
    })
    this.createCloseButton();
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    // Using our reference to the domElement, toggle a class to expand or hide the article.
  }
  createCloseButton(){
    const button = document.createElement('button');
    button.style.float='right'
    button.style.color='black';
    button.textContent ='Close'
    button.onclick =()=>{
      TweenMax.to(this.domElement, 3, {x:-1400, onStart:changeState(), onComplete:()=>this.domElement.remove()})
    }
    const changeState =()=>{
      button.textContent = 'deleting ...'
    }

    this.domElement.insertBefore(button, this.domElement.querySelector('p'));
  }
  createArticle(){
    const heading = document.createElement('h2');
    heading.innerText = this.headingValue;
    this.domElement.prepend( document.createElement('textarea'))
    // this.domElement.prepen(heading)
    
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