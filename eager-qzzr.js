(function(){
  if (!document.addEventListener)
    return;

  var options = INSTALL_OPTIONS;

  var rendered = false;
  render = function(){
    if (rendered)
      return;
    rendered = true;

    if (!options.quizzes && options.id){
      options.quizzes = [
        {
          id: options.id,
          container: options.container
        }
      ];
    }

    for (var i=0; i < options.quizzes.length; i++){
      var quiz = options.quizzes[i];

      if (!quiz.id)
        continue;

      var container = Eager.createElement(quiz.container);
      if (!container || !container.parentNode)
        continue;

      container.innerHTML = '<iframe id="quizWidget-' + quiz.id + '" width="100%" height="700px" frameborder="0" border="none" src="https://app.qzzr.com/quiz/' + quiz.id + '/widget"></iframe>';
    }
  }

  document.addEventListener('DOMContentLoaded', render);
})();
