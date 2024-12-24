Use same code for 1_compile_older_version_js_from_ts and 2_compile_new_version_js_from_ts
                             
For 1_compile_older_version_js_from_ts used `"target": "es2016",` under tsconfig.json file
For 2_compile_new_version_js_from_ts   used `"target": "esnext",` under tsconfig.json file

Since Destructure of object was allowed in older JS it will find a another way for 1_compile_older_version_js_from_ts
``` 
"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Creating the new object
let myObject = { name1: "1", y: 2, z: 3 };
// Copying the object using destructuring
let { name1 } = myObject, z = __rest(myObject, ["name1"]);
console.log(name1, z);

```

Since Destructure of object available in esnext JS it will use simple syntax
``` 
"use strict";
// Creating the new object
let myObject = { name1: "1", y: 2, z: 3 };
// Copying the object using destructuring
let { name1, ...z } = myObject;
console.log(name1, z);

```

Both above codes are same