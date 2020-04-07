function idReturn(el, tab = []){            // explore all the el children and their branching out and return their ID if they have one.
  el = el.children;
  for (var i = 0; i < el.length; i++) {
        if (el[i].id != "") {               // if el[i] got an ID, pushes it in tab
        tab.push(el[i].id);

        }
        if (el[i].children != 0) {          // if el[i] has children
            idReturn(el[i], tab);           // lets explore it
      }
    }
    return tab;                             //returns tab to the previous recursion level
}
