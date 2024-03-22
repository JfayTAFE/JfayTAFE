function printWithCommas(): void
{
    let output = "";

    for (let count = 12; count > 0; count--)
    {
        output += count;
        
        if (count > 1)
        {
            output += ",";
        }
    }
    
    console.log(output);
}

printWithCommas();