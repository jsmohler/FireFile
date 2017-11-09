/*
Attributes:
    Content (binary data)
    name (String)
    isWriteable (boolean)
    isReadable (boolean)
    isDownloadable (boolean)
    comments (Comment)
    rubric (Rubric)
    size (bytes)
    path (String)
*/

function File(content, name, isWriteable, isReadable, isDownloadable, comments, rubric, size, path)
{
    //Adding attributes to object
    this.name = name;
    this.isWriteable = isWriteable;
    this.isReadable = isReadable;
    this.isDownloadable = isDownloadable;
    this.comments = comments;
    this.rubric = rubric;
    this.size = size;
    this.path = path;

    //OBJECT FUNCTIONS
    //Open finds and returns the filepath

    //Closes the file

    //Edits the file

    //Downloads the file

    //Returns the Filename (this.name)
    this.getName = function()
    {
        return this.name;
    }

    //Returns the Filepath (this.path)
    this.getPath = function()
    {
        return this.path;
    }

    //Deletes this file
    //does this just send a request to the server and remove the file?? help pls

    //Checks to see if the file has a rubric
    this.hasRubric = function()
    {
        if(this.rubric == null)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}