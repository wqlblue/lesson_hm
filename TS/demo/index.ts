interface person {
    introduce: () => void;
}
function Loginfo(n: number) {
    return function (target: Function) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`Hello ${this.name},   ${this.age} years old`);
            }

        }
    }
}

@Loginfo(5)
class person {

    constructor(
        public name: string,
        public age: number,

    ) { }
    speak = () => {
        console.log(`Hello `);
    }
}

const p1 = new person("John", 30);
p1.introduce();