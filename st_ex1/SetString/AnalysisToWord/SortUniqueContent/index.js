
const SortUniqueContent = s => [ ...new Set ( s
                                                  .toLowerCase ()
                                                  .replace ( /\W+/g, ' ' )
                                                  .trim ()
                                                  .split ( /\s/ )
) ];
SortUniqueContent.help = `ModuleFunc = () => {}`;

SortUniqueContent.call = () => console.log ( SortUniqueContent );

module.exports = SortUniqueContent;