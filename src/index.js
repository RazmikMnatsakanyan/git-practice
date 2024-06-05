console.log('aaaaaarrrggghhhhh');


function reverseWords(text){
  const textArray = text.split();
  let reverseArray
  for(let i = 0; i < textArray.length; i++){
    reverseArray[i] += textArray[textArray.length - (i+1)];
  }
  return reverseArray.join(' ');
}
eshinDgha();
console.log(reverseWords('eshin dgha'));