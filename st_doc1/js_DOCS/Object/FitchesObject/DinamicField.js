// Dynamic field name
const fieldName = 'city';
const fieldValue = 'Roma';
const person3 = {
    name: 'Marcus Aurelius',
    [fieldName]: fieldValue,
};

// Expression in field name
const person4 = {
    name: 'Marcus Aurelius',
    ['city' + 'Born']: fieldValue,
};
debugger
// Expression in field name
const person2 = {
    name: 'Marcus Aurelius',
    [(()=>'expression')()]: fieldValue,
};
// person2:
// expression: "Roma"
// name: "Marcus Aurelius"