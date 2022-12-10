import './App.css';

function App() {
  return (
    <body>
      <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href=" ">PM2.5 Dashboard</a>
        <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target=" sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div class="position-sticky pt-3 sidebar-sticky">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href=" ">
                    <span data-feather="home" class="align-text-bottom"></span>
                    PM2.5
                  </a>
                </li>
              </ul>

              <ul class="nav flex-column mb-2">
                <li class="nav-item">
                  <a class="nav-link" href=" ">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Today
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Month
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Year
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">
                    <span data-feather="file-text" class="align-text-bottom"></span>
                    Real-time
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 class="h2">Dashboard</h1>
              <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                  <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar" class="align-text-bottom"></span>
                  This week
                </button>
              </div>
            </div>

            <div class="embed-responsive embed-responsive-16by9 ">
              <iframe width="1200" height="480" src="https://charts.mongodb.com/charts-project-0-fjety/embed/charts?id=6394c338-5727-42b3-840a-1cb5e35415f3&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
            </div>

            <h2>Data</h2>
            <div class="d-flex justify-content-center">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe width="400" height="600" src="https://charts.mongodb.com/charts-project-0-fjety/embed/charts?id=6319a626-7ab8-4579-813b-9f0ffe3c8d0a&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
              </div>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe width="400" height="600" src="https://charts.mongodb.com/charts-project-0-fjety/embed/charts?id=6394d616-8b4b-4c3f-8fa4-ec008be35a24&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
              </div>
              <div class="embed-responsive embed-responsive-16by9">
                <iframe width="400" height="600" src="https://charts.mongodb.com/charts-project-0-fjety/embed/charts?id=6394d656-8b4b-40c0-80bd-ec008be3998c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
              </div>
            </div>

          </main>
        </div>
      </div>
      <script src="./assets/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
      <script src="./dashboard2.js"></script>
    </body>
  );
}

export default App;
