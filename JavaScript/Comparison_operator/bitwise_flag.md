# Bitwise Flags Explained in JavaScript

## What is a Bit Field?

A **bit field** uses individual bits in a number to represent multiple boolean states efficiently. Each bit acts like an on/off switch (1 = ON, 0 = OFF).

JavaScript supports bitwise operations on 32-bit integers.

---

## Example: Flags and Permissions

Let's say we have 4 permissions:

| Permission | Bit Position | Binary Value | Decimal |
| ---------- | ------------ | ------------ | ------- |
| READ       | 0            | 00000001     | 1       |
| WRITE      | 1            | 00000010     | 2       |
| EXECUTE    | 2            | 00000100     | 4       |
| DELETE     | 3            | 00001000     | 8       |

### Constants in JavaScript:

```js
const PERM_READ = 1 << 0;    // 00000001 => 1
const PERM_WRITE = 1 << 1;   // 00000010 => 2
const PERM_EXECUTE = 1 << 2; // 00000100 => 4
const PERM_DELETE = 1 << 3;  // 00001000 => 8
```

### Combine Multiple Permissions:

```js
let userPermissions = PERM_READ | PERM_WRITE; // 00000011 => 3
```

---

## Bit Breakdown of `3`

Binary of 3 is:

```
00000011
```

| Bit Position | Value | Meaning      |
| ------------ | ----- | ------------ |
| 7            | 0     | OFF ❌        |
| 6            | 0     | OFF ❌        |
| 5            | 0     | OFF ❌        |
| 4            | 0     | OFF ❌        |
| 3            | 0     | OFF ❌        |
| 2            | 0     | OFF ❌        |
| 1            | 1     | ON ✅ (WRITE) |
| 0            | 1     | ON ✅ (READ)  |

---

## Checking Permissions:

```js
if (userPermissions & PERM_WRITE) {
  console.log("User has write permission");
}

if (userPermissions & PERM_DELETE) {
  console.log("User has delete permission");
} else {
  console.log("Delete NOT allowed");
}
```

---

## Add or Remove a Permission:

```js
// Add EXECUTE permission
userPermissions |= PERM_EXECUTE;  // Bit 2 becomes 1

// Remove WRITE permission
userPermissions &= ~PERM_WRITE;   // Bit 1 becomes 0
```

---

## Loop to Check Each Bit:

```js
let value = 3;
for (let i = 7; i >= 0; i--) {
  console.log(`Bit ${i}:`, (value & (1 << i)) ? 'ON ✅' : 'OFF ❌');
}
```

---

## Summary

* Use bitwise flags for efficient state management.
* `|` to **set/add** flags
* `&` to **check** if a flag is ON
* `& ~` to **clear/remove** a flag

Great for permissions, features, and compact state handling!
