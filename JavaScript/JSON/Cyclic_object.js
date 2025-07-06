/*
    - A cyclic object is one that contains a reference to itself — directly or indirectly.
    - Because JSON has no concept of references or memory pointers like JS does. It tries to infinitely walk down self → self → self... until it crashes.
    - Example - DOM Tree, Tree-like Data, Linked Lists, Graphs
*/

const node = {
  id: 1,
  children: [],
};
node.children.push({ id: 2, parent: node });

//Methods 1. Manually remove cycles before serialization
const safeCopy = { ...node };
delete safeCopy.children[0].parent;

JSON.stringify(safeCopy); //  Works fine


//Method 2. Use a Library like flatted or circular-json
import { stringify, parse } from 'flatted';

const str = stringify(node);  // handles circular refs
const restored = parse(str);  // brings back full structure



//Method 3. Custom Replacer to Ignore Circular Keys
function censorCircular() {
  const seen = new WeakSet();
  return function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return undefined;
      seen.add(value);
    }
    return value;
  };
}

const str1 = JSON.stringify(node, censorCircular()); //  No error
