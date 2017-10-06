var loadedActive = document.querySelector('li.active');
var newWidth;
var newLeft;
var activeTab;
var lineUnder = document.querySelector('.tab-follower');
var navLinks = document.querySelectorAll('.nav-tabs>li>a');


function setOnLoad(){
    newWidth = `${loadedActive.offsetWidth}px`;
    newLeft = `${loadedActive.offsetLeft}px`;
    lineUnder.style.width = newWidth;
    lineUnder.style.left = newLeft;
}

function setWidth(e){
    activeTab = this.parentElement;
    newWidth = `${activeTab.offsetWidth}px`;
    newLeft = `${activeTab.offsetLeft}px`;
    lineUnder.style.width = newWidth;
    lineUnder.style.left = newLeft;
}


//EVENT LISTENERS
navLinks.forEach(link => link.addEventListener('click', setWidth));

setOnLoad();


//Start collecting data to animate panes
var tabPanes = document.querySelectorAll('.tab-pane');
var paneId = [];
var eachPane;
var linkTarget;


function getLinkTarget(){
    linkTarget = this.getAttribute('href');
    console.log(linkTarget);
}

function getTabPanes(){
    tabPanes.forEach(pane => paneId.push(pane.attributes));
}


navLinks.forEach(link => link.addEventListener('click', getLinkTarget));
navLinks.forEach(link => link.addEventListener('click', getTabPanes));