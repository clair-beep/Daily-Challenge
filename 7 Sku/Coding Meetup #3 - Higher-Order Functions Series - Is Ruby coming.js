//solution 
function isRubyComing(list) {
return list.map(Element => Element.language).includes('Ruby')}

// alternative 
function isRubyComing(list) {
    return list.some(e => e.language === 'Ruby');
  }