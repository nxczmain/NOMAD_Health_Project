'use strict';

globalThis.HamLanguage = (() => {
  const reflexive = /\b(my|your|him|her|it|our|them)[\t -]+(self|slef|sellf|sef|sefl|selves)\b(?![\t -]+(?:esteem|care|control|worth|image|respect|confidence|discipline|defen[cs]e|awareness)\b)/gi;
  const selfWord = 'myself';
  const selfTypos = new Set();
  for (let index = 0; index < selfWord.length; index++) {
    const left = selfWord.slice(0,index);
    const right = selfWord.slice(index+1);
    const letter = selfWord[index];
    selfTypos.add(left+right);
    selfTypos.add(left+letter+letter+right);
    if (right) selfTypos.add(left+right[0]+letter+right.slice(1));
  }
  const spelling = [
    [/\b(?:hutr|hrut|huurt|hurrt)(ing)?\b/gi,'hurt$1'],
    [/\b(?:klil|kiil)\b/gi,'kill'],
    [/\b(?:hram|hamr)\b/gi,'harm'],
    [/\bstalb[\t ]+eand\b/gi,'stable and'],
    [/\b(?:stalbe|stabel)\b/gi,'stable'],
    [/\b(?:dizy|dizzi|dizzzy)\b/gi,'dizzy'],
    [/\bhead[\t -]+ache\b/gi,'headache'],
    [/\bnauseus\b/gi,'nauseous'],
    [/\bradiaton\b/gi,'radiation'],
    [/\bmejo[r]{2,}\b/gi,'mejor']
  ];

  function interpret(text) {
    let value = String(text ?? '').normalize('NFKC').replace(/[\u200B\u200C\u200D\uFEFF]/g,'')
      .replace(reflexive,(_,owner,ending) => owner+(ending.toLowerCase() === 'selves' ? 'selves' : 'self'))
      .replace(/\b[a-z]{5,7}\b/gi,word => selfTypos.has(word.toLowerCase()) ? selfWord : word);
    for (const [pattern,replacement] of spelling) value = value.replace(pattern,replacement);
    return value;
  }

  function fold(text) {
    return interpret(text).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f’']/g,'');
  }

  return {interpret,fold};
})();
