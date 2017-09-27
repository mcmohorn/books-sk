import Ember from 'ember';

export default Ember.Controller.extend({
    columns: [
    {
        "propertyName": "title",
        "title": "Title"
    },
    {
        "propertyName": "author",
        "title": "Author"
    },
    {
        "propertyName": "year",
        "title": "Year"
    },
    {
        "propertyName": "isbn",
        "title": "ISBN"
    }
  ]
});
