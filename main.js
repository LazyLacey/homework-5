
    var dragElement = document.getElementsByClassName('dragElement')[0];

    dragElement.onmousedown = function(e) {

      dragElement.style.position = 'absolute';
      moveAt(e);

      document.body.appendChild(dragElement);

      dragElement.style.zIndex = 1000; // показывать мяч над другими элементами

      function moveAt(e) {
        dragElement.style.left = e.pageX - dragElement.offsetWidth / 2 + 'px';
        dragElement.style.top = e.pageY - dragElement.offsetHeight / 2 + 'px';
      }

      document.onmousemove = function(e) {
        moveAt(e);
      };

      dragElement.onmouseup = function() {
        document.onmousemove = null;
        dragElement.onmouseup = null;
      };
    }


    dragElement.ondragstart = function() {
      return false;
    };
  