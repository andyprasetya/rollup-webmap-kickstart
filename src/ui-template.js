var templates = {};

templates.topNavigation = function() {
  let dom = `<nav class='navbar navbar-expand-lg navbar-dark bg-dark'>
    <a class='navbar-brand' href='#'>Rollup Webmap Kickstart</a>
    <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
      <span class='navbar-toggler-icon'></span>
    </button>

    <div class='collapse navbar-collapse' id='navbarSupportedContent'>
      <ul class='navbar-nav mr-auto'>
        <li class='nav-item active'>
          <a id='home' class='nav-link' href='#'><i class='fa fa-home'></i>&nbsp;Home <span class='sr-only'>(current)</span></a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'><i class='fa fa-bar-chart'></i>&nbsp;Menu 1</a>
        </li>
        <li class='nav-item'>
          <a class='nav-link' href='#'><i class='fa fa-map'></i>&nbsp;Menu 2</a>
        </li>
      </ul>
      <ul class='navbar-nav'>
        <li class='nav-item'>
          <a class='nav-link' href='#'><i class='fa fa-power-off'></i>&nbsp;Exit</a>
        </li>
      </ul>
    </div>
  </nav>`;
  return dom;
}

templates.modalBoxes = function() {
  let dom = `<div class='modal fade' id='modalbox' tabindex='-1' role='dialog' aria-labelledby='app_modal_label' aria-hidden='true'>
    <div id='app_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h5 class='modal-title' id='app_modal_label'></h5>
        </div>
        <div id='app_modal_body' class='modal-body'></div>
        <div id='app_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class='modal fade' id='modalform' tabindex='-1' role='dialog' aria-labelledby='form_modal_label' aria-hidden='true'>
    <div id='form_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <form id='dynamicform' name='dynamicform'>
          <div class='modal-header'>
            <h5 class='modal-title' id='form_modal_label'></h5>
          </div>
          <div id='form_modal_body' class='modal-body'></div>
          <div id='form_modal_footer' class='modal-footer'></div>
        </form>
      </div>
    </div>
  </div>

  <div class='modal fade' id='featureModal' tabindex='-1' role='dialog'>
    <div id='feature_modal_size' class='modal-dialog' role='document'>
      <div class='modal-content'>
        <div class='modal-header'>
          <h4 class='modal-title' id='feature-title'></h4>
        </div>
        <div id='feature-info' class='modal-body'></div>
        <div id='feature_modal_footer' class='modal-footer'>
          <button type='button' class='btn btn-secondary btn-sm' data-dismiss='modal'><i class='fa fa-power-off'></i>&nbsp;Close</button>
        </div>
      </div>
    </div>
  </div>

  <div id='dataPropModal' class='dataPropertyModal'>
    <span class='dataPropertyClose'>&times;</span>
    <img class='dataPropertyModal-content' id='imgtoshow'/>
    <div id='dataPropertyCaption'></div>
  </div>`;
  return dom;
}

export default templates;
