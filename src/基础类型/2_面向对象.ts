interface User {
    name: string;
    age: number;
    deleteUser?: (user:User)=>void;
    getUser?:()=>User;
}

class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;

    }

    getUser() : User {
        return {name: this.name, age: this.age}
    }

    /**
     * 
     * @param user 
     */
    deleteUser(user: User): void{
        this.name = user.name;
        this.age = user.age;
    }

}

const userAccount: User = new UserAccount("Muniz", 24);
console.log(userAccount.getUser());
userAccount.deleteUser({name: "muniz", age: 24});