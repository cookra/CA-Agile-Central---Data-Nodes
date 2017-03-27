Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    launch: function () {

        this.add(Ext.create('Ext.panel.Panel', {
            html: '<div id="container" class="megan"><div id="graph-container" class="ashley"></div></div>',
            height: 600,
            cls: 'test',
            listeners: {
                afterrender: function (cmp) {
                    console.log('asdgf');
                    this._build();
                },
                scope: this
            },
        }));

    },
    _build: function () {


        var i,
            s,
            N = 100,
            E = 500,
            g = {
                nodes: [],
                edges: []
            };

        // Generate a random graph:
        for (i = 0; i < N; i++)
            g.nodes.push({
                id: 'n' + i,
                label: 'Node ' + i,
                x: Math.random(),
                y: Math.random(),
                size: Math.random(),
                color: '#666'
            });

        for (i = 0; i < E; i++)
            g.edges.push({
                id: 'e' + i,
                source: 'n' + (Math.random() * N | 0),
                target: 'n' + (Math.random() * N | 0),
                size: Math.random(),
                color: '#ccc'
            });
        // sigma.renderers.def = sigma.renderers.canvas
        // Instantiate sigma:
        s = new sigma({
            graph: g,
            container: 'graph-container'
        });

        // Initialize the dragNodes plugin:
        var dragListener = sigma.plugins.dragNodes(s, s.renderers[0]);

        dragListener.bind('startdrag', function (event) {
            console.log(event);
        });
        dragListener.bind('drag', function (event) {
            console.log(event);
        });
        dragListener.bind('drop', function (event) {
            console.log(event);
        });
        dragListener.bind('dragend', function (event) {
            console.log(event);
        });

    }
});