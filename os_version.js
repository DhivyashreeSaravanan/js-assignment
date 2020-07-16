 let str= prompt("enter the os version");
  let n= str.indexOf(" ");
  let txt2=str.substring(0,n);
  let txt3=str.substring(n, str.length);
  console.log(`The OS name is ${txt2} and version is ${txt3}`);