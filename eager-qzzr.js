(function(){
  window.EagerQzzr = {
    init: function(container, id) {
      if (!id || !container || !container.parentNode) {
        return;
      }

      container.innerHTML = '<iframe id="quizWidget-' + id + '" width="100%" height="700px" frameborder="0" border="none" src="https://app.qzzr.com/quiz/' + id + '/widget"></iframe>';
    }
  };
});
