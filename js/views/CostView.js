app.views.CostView = Backbone.View.extend({

    initialize:function () {
        this.store = this.options.store;
    },

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },

    events: {
        "click .back-button": "back"
    },

    back: function() {
        window.history.back();
        return false;
    }

});
