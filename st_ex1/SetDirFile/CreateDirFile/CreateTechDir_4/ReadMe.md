# Clone CreateArray to FileStructure

CreateArray : [name_dir,item.file] => 

    name_dir
        item.file

CreateArray : [name_dir,item.file,[name_dir_ins,item_ins.file]] => 

    name_dir
        item.file
        name_dir_ins
            item_ins.file
            
/* TODO: fix behavior logFs: true => err write in file Log    */

