function printWithTabs(): void
{
    let output = "";

    for (let count = 0; count <= 12; count++)
    {
        output += count + "\t";
    }
    
    console.log(output);
}

printWithTabs();