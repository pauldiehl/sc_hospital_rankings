app.models.Hospital = Backbone.Model.extend({

    initialize:function () {
        this.reports = new app.models.HospitalCollection();
        this.reports.parent = this;
    },

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.hospital.findById(parseInt(this.id)).done(function (data) {
                options.success(data);
            });
        }
    }

});

app.models.HospitalCollection = Backbone.Collection.extend({

    model: app.models.Hospital,

    sync: function(method, model, options) {
        if (method === "read") {
            app.adapters.hospital.findByName(options.data.name).done(function (data) {
                options.success(data);
            });
        }
    }

});
