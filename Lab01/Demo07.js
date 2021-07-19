console.clear();

class Parents{    // khai bao class cha parents 
constructor(value = 'anonymouse')
{
    this.name = value;
}
// cac method khong co che do private
    get Name()  {return this.name;} //lay gia tri Name
    set Name(value) {this.name = value;} // gan gia tri Name

    toString() {return "string" + this.name;} // doi thanh chuoi
    static getType() { return 'Parent';} //tra ra chuoi Parent
}

class Child extends Parents{    //dinh nghia 1 class con ke thua tu class cha Perents
    constructor(name = 'anonymouse', hight = 0) {
        super(name);    // ke thua constructor cua cha
        this.hight = hight;
    }
    toString() {return `${this.name} is tall ${this.hight}`;}
    static getType() {return 'child';}
}

let parents = new Parents();
console.log(Parents.getType(parents)); // in ra chuoi tren ham getType la Parent
console.log(parents);

parents = 'Perter';
console.log(parents); // in ra Perter

let child = new Child('Marry', 100);
console.log(child);  // tra ra (name: 'Marry', hight: 100)
console.log(Child.getType(child)); // tra ra (child)
// dua len github
// git add -A (terminal)