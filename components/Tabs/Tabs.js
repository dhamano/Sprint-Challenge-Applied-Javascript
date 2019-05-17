class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = tabElement.dataset.tab; 
    (this.tabData === "all") ? this.cards = document.querySelectorAll('.card') : this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
    console.log('this.cards',this.cards);
    this.cards = Array.from(this.cards).map( cardInfo => { return new TabCard(cardInfo); });
    console.log('this.cardsArr Array',this.cards);
    this.tabElement.addEventListener('click', () => { this.selectTab(); });
  }

  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach( item => {
      if(item.classList.contains('active-tab')) { item.classList.remove('active-tab'); }
    })
    const cards = document.querySelectorAll('.card');
    cards.forEach( cardEl => {
      if(cardEl.classList.contains('flex')) { cardEl.classList.remove('flex'); }
      cardEl.classList.add('hidden');
    })
    this.tabElement.classList.add('active-tab');
    // Notice we are looping through the this.cards array and invoking selectCard()
    // from the TabCard class. Just un-comment the code and study what is happening here.
    console.log('this.cards',this.cards);
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.classList.add('flex');
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab[data-tab]');
tabs.forEach( item => {
  const tabLink = new TabLink(item);
})