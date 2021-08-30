let a = 5;

function Up () {
    const a2 = a * 2;
    console.log ( '1 ::', a2 ); // 14
    debugger;
}

a = 7;

Up (); // 14

function workUp () {
    const a = 9;
    debugger;

    return function Up () {
        const a2 = a * 2;
        console.log ( '2 ::', a2 ); //18
        debugger;
    };
}

workUp ()();