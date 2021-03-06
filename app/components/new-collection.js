import Ember from 'ember';

export default Ember.Component.extend({
  confirmatonAlert: false,

  actions: {
    saveCollection() {
      var params = {
        artist: this.get('artist'),
        description: this.get('description'),
        name: this.get('name'),
        prints: []
      };
      this.sendAction('saveCollection', params);
      this.set('confirmatonAlert', true);
    }
  }
});
