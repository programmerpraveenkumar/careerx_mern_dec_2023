class Person{
    name:string;
    mobile:number;
    printDetails():void{
            console.log(this.name,this.mobile)
    }
}

let person = new Person();
person.name ="dfgefwe";//string variable
person.mobile = 54545;
//person.mobile= "sdsdws";//error
person.printDetails();