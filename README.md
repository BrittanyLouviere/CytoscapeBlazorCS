# Cytoscape Example Project in C# Blazor
This project is meant to act as an example of how to use Cytoscape.NET inside a C# Blazor project. It is attempting to replicate the [More Complex Example Graph](https://fslab.org/Cytoscape.NET/example.html) from the [Cytoscape.NET documentation](https://fslab.org/Cytoscape.NET/index.html).

## Setup
You will need to add a reference to Cytoscape.NET in your `.csproj`: `<PackageReference Include="Cytoscape.NET" Version="0.2.0" />`.

You will also need the `cytoscapeInterop.js` script in the `wwwroot` directory. A reference to it should also be added to the `index.html`.

On your home page add a container for the graph. Something like `<div id="cy" style="width: 600px; height: 600px; border: 1px solid #ccc;"></div>` will work.

Create an async function that will call the JavaScript function from earlier. This is what you will call when you need to update and render your graph.