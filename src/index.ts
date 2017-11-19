namespace Sample {

  function printToConsole(text: string) {
    console.info(text);
  }

  export function sayHello() {
    printToConsole(`Hello, ${process.env.USER}`);
  }

}

Sample.sayHello();
