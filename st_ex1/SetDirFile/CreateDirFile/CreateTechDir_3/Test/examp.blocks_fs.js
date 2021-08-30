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

const Create_arr = [Containers,Content,Src]





