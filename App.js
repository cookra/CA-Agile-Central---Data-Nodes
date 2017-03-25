Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {
        //Write app code here
        this.add(Ext.create('Ext.container.Container'),{style:'background:black',html:'<div id="cy"></div>'});
        var cy = cytoscape({
            container: document.getElementById('cy') // container to render in
        });
    }
});