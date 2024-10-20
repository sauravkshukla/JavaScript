{
    try {
        console.log(myVar); // ReferenceError due to TDZ
    } catch (e) {
        console.log(e); // Outputs: ReferenceError: Cannot access 'myVar' before initialization
    }

    let myVar = 10;
    console.log(myVar); // Outputs: 10
}
