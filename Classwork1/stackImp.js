class Stack {
    constructor(){
        this.items = [];
        this.head = 0;
    }
    push(element) {
      this.items[this.head] = element;
      this.head = this.head + 1;
    }
   length() {
      return this.head;
   }
   peek() {
      return this.items[this.head-1];
   }
   isEmpty() {
     return this.head == 0;
   }
   pop() {
    if( this.isEmpty() == false ) {
       this.head = this.head -1;
       return this.items.pop(); 
     }
   }
}
