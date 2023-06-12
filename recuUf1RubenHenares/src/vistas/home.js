export const home = {
    template:`
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
                      <th scope="col">Descripción</th>
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
}