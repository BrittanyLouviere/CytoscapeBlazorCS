window.renderCytoscapeGraph = (graphData) => {
    graphData = JSON.parse(graphData);
    cytoscape({
        container: eval(graphData.container.Value),
        elements: graphData.elements,
        style: graphData.style,
        layout: graphData.layout,
    });
};
