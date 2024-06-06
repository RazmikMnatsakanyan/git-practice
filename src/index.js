function jrhor(text){
  if(text.length() >= 18){
    return 'Ary anasun, radd qashi togh gorc anem'
  }
  const textArray = text.split();
  let reverseArray
  for(let i = 0; i < textArray.length; i++){
    reverseArray[i] += textArray[textArray.length - (i+1)];
  }
  return reverseArray.join(' ');
}
eshinDgha();
console.log(jrhor('eshin dgha'));
console.log(jrhor('dgha eshin'));
console.log(jrhor('eshin dgha, dgha eshin'));