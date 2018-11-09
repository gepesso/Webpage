function alphabetPosition(text) {
  let alphabet = [0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let FinalTest = "";
  text = text.toLowerCase();
  console.log(text.length,alphabet.length);
  for (i=0;i<=text.length;i++){
      for (j=1;j<alphabet.length;j++){
        if (text[i] == alphabet[j]) {
          FinalTest = FinalTest + j;

      }
     if(i < text.length) {
     FinalTest = FinalTest + " ";
     console.log(FinalTest);
     }
  }
  return FinalTest;

}

}

alphabetPosition("o azul do mar");