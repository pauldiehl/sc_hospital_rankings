app.routers.AppRouter = Backbone.Router.extend({

    routes: {
        "":                         "home",
		"coq/:id":				 	"coq",
		"cost/:id":				 	"cost",
		"quality/:id":				 	"quality",
        "hospitals/:id":           "hospitalDetails",
        "hospitals/:id/map":        "map"
    },

    initialize: function () {
        app.slider = new PageSlider($('body'));

    },

    home: function () {
        // Since the home view never changes, we instantiate it and render it only once
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            console.log('reusing home view');
            app.homeView.delegateEvents(); // delegate events when the view is recycled
        }
        app.slider.slidePage(app.homeView.$el);
    },

	coq: function (id) {
        var hospital = new app.models.Hospital({id: id});
        hospital.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.CoQView({model: data}).render().$el);
            }
        });
	},
		cost: function (id) {
        var hospital = new app.models.Hospital({id: id});
        hospital.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.CostView({model: data}).render().$el);
            }
        });
	},
		quality: function (id) {
        var hospital = new app.models.Hospital({id: id});
        hospital.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.QualityView({model: data}).render().$el);
            }
        });
	},
	
    hospitalDetails: function (id) {
        var hospital = new app.models.Hospital({id: id});
        hospital.fetch({
            success: function (data) {
                // Note that we could also 'recycle' the same instance of EmployeeFullView
                // instead of creating new instances
                app.slider.slidePage(new app.views.HospitalView({model: data}).render().$el);
            }
        });
    },

    map: function (id) {
        app.slider.slidePage(new app.views.MapView().render().$el);
    }

});