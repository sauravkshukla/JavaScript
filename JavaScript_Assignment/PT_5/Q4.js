{
    try {
        console.log(x); // Outputs: undefined (due to hoisting of `var`)
    } catch (e) {
        console.log(e);
    }

    try {
        console.log(y); // ReferenceError (no hoisting of `let`)
    } catch (e) {
        console.log(e); // Outputs: ReferenceError: Cannot access 'y' before initialization
    }

    try {
        console.log(z); // ReferenceError (no hoisting of `const`)
    } catch (e) {
        console.log(e); // Outputs: ReferenceError: Cannot access 'z' before initialization
    }

    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x); // Outputs: 10
    console.log(y); // Outputs: 20
    console.log(z); // Outputs: 30
}
