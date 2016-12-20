
function generateBasicInformation() {

    var parent = document.getElementById('info');

    var info = blankSheet.info;
    for(attribute in info) {

        var type = typeof(info[attribute]);

        var inputField = basicInputField(type, String(attribute),String(attribute), String(attribute));

        parent.appendChild(inputField);

    }

}


function basicInputField(type, placeHolder, text, id) {

    var container = document.createElement('div');
    container.classList.add('input-group');

    var inputSpan = document.createElement('span');
    inputSpan.id = "basic-addon1";
    inputSpan.classList.add('input-group-addon');
    inputSpan.innerHTML = text;

    var input = document.createElement('input');
    input.classList.add('form-control');
    input.id = id;
    input.type = type;
    input.setAttribute('placeHolder',placeHolder);
    input.setAttribute('aria-describdedby','basic-addon1');

    container.appendChild(inputSpan);
    container.appendChild(input);

    return container;
}
