//ek baar Freeze kr diya to koi value change nahi kar sakta
//only shallow hota h...nested object freeze nahi hote
const user = {
  name: 'Tez',
  role: 'dev'
};

Object.freeze(user);

user.name = 'Bhai';   //  No effect
user.city = 'Delhi';  //  No effect
delete user.role;     //  No effect

console.log(user); // { name: 'Tez', role: 'dev' }

//Freeze is Shallow
const config = {
  theme: {
    dark: true
  }
};

Object.freeze(config);

config.theme.dark = false; // Allowed — nested object not frozen

console.log(config.theme.dark); // false

