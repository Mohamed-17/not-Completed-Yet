import "./BestSellersTwo"
export function addClassElementEvent(element,className,event){
  
    let elements = document.querySelectorAll(element);
  
    for(let i = 0; i<elements.length; i++) {
        elements[i].addEventListener(event, function(event) {
            [].forEach.call(elements, function(el) {
                  el.classList.remove(className);
             });
             this.classList.add(className);
        });
    }
  }
  

addClassElementEvent('.ulLinks a','active','click');
console.log("hey")
export default "./sellers";