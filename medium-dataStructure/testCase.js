/**
 * Data Structure:
 * 
 * An object, starting off with each alphabet (a-z) being its 1st level key
 * 
 * each n level key that gets added are the i letter of the word that gets added by addWord, i being the position of the letter of the word being added
 * 
 * 
 */


const dataStructure = {
  "b": {
    "a": {
      "d": {}
    }
  },
  "d": {
    "a": {
      "d": {}
    }
  },
  "m": {
    "a": {
      "d": {}
    }
  }
};

const DS = {};

const addWord = word => {
  const splitWord = word.split('');
  if (!DS[splitWord[0]]) {
    DS[splitWord[0]] = {};
    for(let i = 0; i < splitWord.length; i++)
  }
  // splitWord.forEach(letter => {
  //   if (!DS[letter]) {
  //     Object.defineProperty(DS, letter, {value: letter});
  //   }
  // });
};

const search = word => {

};

describe('searchWord', () => {
  addWord("bad");
  addWord("dad");
  addWord("mad");

  it('return false when searching for an non existed word', () => {
    const result = search("pad");
    expect(result).toBeFalsy();
  });

  it('return true when searching for an existed word', () => {
    const result = search("bad");
    expect(result).toBeTruthy();
  });

  it('can handle searches with regular expression string "."', () => {
    const result1 = search(".ad");
    const result2 = search("b..");
    expect(result1).toBeTruthy();
    expect(result2).toBeTruthy();
  });
});