let dizi: string[] = ["b", "c", "a", "b"];
let dizi2: string[];

// dizi.map((item) => console.log(item));

// let p3: number = dizi.push("d");
// console.log(p3); // 5

dizi.splice(2, 2, "e");

let p: string = dizi.join("-");
console.log(p); // "b,c,a,b"
