const text = `
Il lonfo non vaterca né gluisce
e molto raramente barigatta,
ma quando soffia il bego a bisce bisce
sdilenca un poco, e gnagio s’archipatta.

È frusco il lonfo! È pieno di lupigna
arrafferia malversa e sofolenta!
Se cionfi ti sbiduglia e t’arrupigna
se lugri ti botalla e ti criventa.

Eppure il vecchio lonfo ammargelluto
che bete e zugghia e fonca nei trombazzi
fa lègica busìa, fa gisbuto;

e quasi quasi in segno di sberdazzi
gli affarferesti un gniffo. Ma lui zuto
t’alloppa, ti sbernecchia; e tu l’accazzi.
`;

const result = lonfo(text);
console.log(result);

function lonfo(text) {
    const noPunctuation = text.replace(/[^\w\s]/g, '').toLowerCase();
  
    const words = [...new Set(noPunctuation.split(/\s+/))];
  
    const sortedWords = words.sort();
  
    const result = sortedWords.join(' ');
  
    return result;
}