

function test_oauth() {
    const tenant = document.getElementById("tenant").value;
    const client_id = document.getElementById("clientId").value;
    const redirect_uri = window.location.hostname;
    const scopes = ['Files.ReadWrite', 'FilesReadWrite.All'];
    const scopeParam = encodeURIComponent(scopes.join(' '));

    console.log(`tenant: ${tenant}`);
    console.log(`client_id: ${client_id}`);
    console.log(`redirect_uri: ${redirect_uri}`);
    console.log(`scope: ${scopeParam}`);

    const xhttp = new XMLHttpRequest();
    const data = {
        client_id : client_id,
        response_type : 'token',
        redirect_uri : redirect_uri,
        scope: scopeParam,
    };

    xhttp.onreadystatechange = function() {
        if(this.readyState == this.DONE && this.status == 200) {
            let result = JSON.parse(xhttp.responseText);
            console.log(`Result: ${result}}`);
        }
    };

    xhttp.open('POST', `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`, true);
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}