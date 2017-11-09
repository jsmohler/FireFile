/*
    Attributes
        contents: a sorted (?) array of files and directories
            (this was originally 2 attributes
                files (File)
                directory (Directories))
        name (String)
        path (String)
        size (bytes)
        group (Group) Also we could make this a group name, like a string?
*/

function Directory(contents, name, path, size, group)
{
    this.contents = contents;
    this.name = name;
    this.path = path;
    this.size = size;
    this.group = group;

    //FUNCTIONS

    //open
    
    //close

    //rename

    //newFile

    //getPath

    //deleteFile

    //checkGroup
}



