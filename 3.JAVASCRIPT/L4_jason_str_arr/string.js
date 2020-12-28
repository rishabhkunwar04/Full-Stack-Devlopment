//string
let str='this is rishabh\'s laptop'//  by backward slash we can even print apostrophe
console.log(str);
let p='laptop'
let str1=`this is  my HP ${p} not dell`  //by backtick the p string get substitute here in this string
console.log(str1);

//searching
let s="gate CSE is scheduled for february and released its applcn for form submsn"
console.log(s.indexOf('CSE'));
console.log(s.lastIndexOf('for'))


//string meathod
let s1="gate CSE is scheduled for february and released its applcn for form submsn"
let s2=s1.slice(3,6)
console.log(s2);
let s3=s1.slice(-3,-4)//negative indexing is allowed in slice
console.log(s3);
let s4=s1.substr(3,6)//in this 6 is not end point its only for keen
console.log(s4);


