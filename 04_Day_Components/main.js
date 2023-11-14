// const getUserInfo = (firstName,lastName,country,title, skills) =>{
//     return `${firstName} ${lastName}, a ${title} developer based in ${country}, He knows ${skills} `
// }

// const skills = ['HTML','css','Js','React']
// console.log(getUserInfo('Asabeneh', 'Yetayeh','Finland','FullStack Developer', skills))

class Parent {
    constructor(firstName, lastName, country, title){
        this.firstName = firstName
        this.lastname = lastName
        this.country = country
        this.title = title
    }
    getPersonInfo(){
        return `${this.firstName} ${this.lastname}, a ${this.title} developer base in ${this.country}`
    }
    parentMethod(){

    }
}

const p1 = new Parent('Asabeneh','Yetayeh','Finland','FullStack Developer')

class Child extends Parent{
    constructor(firstName,lastName,country,title,skills){
        super(firstName,lastName,country,title)
        this.skill=skills
    }
    getSkills(){
        let len = this.skills.length
        return len>0 ? this.skills.join(' '): 'No skills found'
    }
    childMethod(){

    }
}

const skills = ['HTML','CSS','JS','React']
const child = new Child(
    'Asabeneh',
    'Yetayeh',
    'Finland',
    'FullStack Developer',
    skills
)