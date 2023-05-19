/*07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills". */
//definition and usage
//The lastIndexof() method returns the index (position) of last occurrence of a specified value in a string
//the lastIndexof() method searches the string from the end to the beginning.
//the lastIndexof() method return the index from the beginning (position 0)
//the lastIndexof() METHOD return -1 if the value is not dound.
//the lastIndexof() method is case sensitive.
// syntax
//string.lastIndexof (searchvalue,start)

let arr=["anupama","yadav","pw skills"]
console.log(arr.lastIndexOf("pw skills"));//2
console.log(arr.lastIndexOf("pw skills",0));//-1
console.log(arr.lastIndexOf("pw skills",1));//-1
console.log(arr.lastIndexOf("pw skills",2));//2
console.log(arr.lastIndexOf("pw skills",3));//2
