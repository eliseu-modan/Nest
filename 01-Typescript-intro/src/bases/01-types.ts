export let name1: string = "Eliseu";
export const name2: string = "modanesi";
export const age: number = 37;

name1 = "Melissa";

export const templateString = `Esse é um nome: ${name1}
    Esse é outro nome ${name2}
    Esse é um numero ${age} 
    Essa é uma soma ${1 + 2} `;

console.log(name1);
console.log(templateString);
