const Src = [ '_src' ];

// const Common_this = [ 'Common_this', 'Common_this.md','ReadMe.md',
//     _src ];
// 'Common_this.md','ReadMe.md' - create automatically

const Common_this = [ 'Common_this',
    Src ];
const Docs_this = [ 'Docs_this',
    Src ];
const www_this = [ 'www_this',
    Src ];

const _util_unit = [ '_util_unit',
    '_.md',
    '_angcors.md',
    '_docs.md',
    '_install.md',
    '_setcomand.md',
    '_usage.md'
];

const Live_learn = [ 'Live_learn',
    Common_this,
    Docs_this,
    www_this,
    Src];

const the_part_of_this = [ 'the_part_of_this',
    Common_this,
    Docs_this,
    www_this ,
    Src];

const Point_learn = [ 'Point_learn',
    the_part_of_this,
    Src];

const Intro = [ 'Intro_to_this',
    Common_this,
    Docs_this,
    www_this ,
    Src];

const Use = [ 'Use_this',
    [ 'First_steps',
        Src ],
    [ 'Hints',
        Src ] ];

const Workout = [ 'Workout_this',
    Src ];

const Containers = [ 'Containers',
    Live_learn,
    Point_learn,
    Intro,
    Use,
    Workout,
    Src ];

const Content = ['Content',
    ['Docs',
        ['www.com',
            ['Cheat_Sheets'], Live_learn, Point_learn]]]

// Create_arr finish

const CreateArrLikeGit_2 = [
    ['Addl',
        ['_stash'],
        _util_unit
    ],
    Containers,
    Content,
    Src
]







CreateArrLikeGit_2.help = `ModuleFunc = () => {}`;

CreateArrLikeGit_2.call = () => console.log ( CreateArrLikeGit_2 );

CreateArrLikeGit_2.mode = 'production';

module.exports = CreateArrLikeGit_2;
