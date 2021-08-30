const Position = (row, col , str) => console.log(`\x1b[${row};${col}H${str}`);
Position.help = `ModuleFunc = () => {}`;

Position.call = () => console.log ( Position );

module.exports = Position;