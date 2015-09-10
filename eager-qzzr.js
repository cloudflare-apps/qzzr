(function(){
  var options, container;

  options = INSTALL_OPTIONS;

  document.addEventListener('DOMContentLoaded', function(){
    container = Eager.createElement(options.container);

    if (!options.id || !container || !container.parentNode) {
      return;
    }

    container.innerHTML = '<iframe id="quizWidget-' + options.id + '" width="100%" height="700px" frameborder="0" border="none" src="https://app.qzzr.com/quiz/' + options.id + '/widget"></iframe>';
  });
})();
