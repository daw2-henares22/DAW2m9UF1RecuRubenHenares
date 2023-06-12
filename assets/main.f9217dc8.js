(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const styles = "";
const home = {
  template: `
    <div class="container-fluid p-5">
        <div class="h1">Proyectos</div>
        <div class="pt-5 d-flex">
            <div>Todos los proyectos</div>
            <div class="ps-4 text-primary">Mis proyectos</div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="col-xl-12">
            <div class="d-flex text-end col-6 offset-6">
                <button type="button" class="btn btn-primary"><i class="bi bi-search"></i></button>
                <button type="button" class="btn btn-danger"><i class="bi bi-search"></i></button>

                <div class="input-group ms- mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>

            <div class="container-fluid">
                <table class="table text-center">
                <hr class="border border-danger border-2 opacity-50">
                  <thead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Descripci\xF3n</th>
                      <th scope="col">Enlace</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                        <td>Proyecto ejemplo 1</td>
                        <td>Ejemplo de web para centro fp</td>
                        <td><a href="http://www.fpllefia.com">http://www.fpllefia.com</a></td>
                    </tr>
                    <tr>
                        <td>Proyecto ejemplo 1</td>
                        <td>Ejemplo de web para centro fp</td>
                        <td><a href="http://www.fpllefia.com">http://www.fpllefia.com</a></td>
                    </tr>
                    <tr>
                        <td>Proyecto ejemplo 1</td>
                        <td>Ejemplo de web para centro fp</td>
                        <td><a href="http://www.fpllefia.com">http://www.fpllefia.com</a></td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
    `
};
const header = {
  template: `
    <nav class="navbar bg-black">
        <div class="container-fluid">
            <a class="navbar-brand text-light col-xl-1 col-md-3" href="#">Examen UF1 Bootstrap extra</a>
                <div class="col-xl-3 text-center">
                    <a class="navbar-brand text-light" href="#">Home</a>
                    <a class="navbar-brand text-light" href="#">item1</a>
                    <a class="navbar-brand text-light" href="#">Item2</a>
                </div>
                <div class="col-xl-2">
                    <a class="navbar-brand text-light" href="#">PROYECTOS</a>
                    <button type="navbar-brand button" class="btn btn-warning">Iniciar sesi\xF3n</button>
                </div>
        </div>
    </nav>
    `
};
const footer = {
  template: `
    
    `
};
document.querySelector("header").innerHTML = header.template;
document.querySelector("main").innerHTML = home.template;
document.querySelector("footer").innerHTML = footer.template;
