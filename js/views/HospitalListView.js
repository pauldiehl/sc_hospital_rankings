app.views.HospitalListView = Backbone.View.extend({

    tagName:'ul',

    attributes: {class: 'topcoat-list list'},

    initialize:function () {
        var self = this;
        this.model.on("reset", this.render, this);
        this.model.on("add", function (hosp) {
            self.$el.append(new app.views.HospitalListItemView({model:hosp}).render().el);
        });
    },

    render:function () {
        this.$el.empty();
        _.each(this.model.models, function (hosp) {
            this.$el.append(new app.views.HospitalListItemView({model:hosp}).render().el);
        }, this);
        return this;
    }
});
app.views.HospitalListItemView = Backbone.View.extend({


    tagName:"li",

    className:"topcoat-list__item",

    initialize:function () {
        this.model.on("change", this.render, this);
        this.model.on("destroy", this.close, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});