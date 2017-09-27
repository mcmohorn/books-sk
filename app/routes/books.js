import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return $.getJSON('https://skookum-test-api.herokuapp.com/api/v1/books')
  },
});
