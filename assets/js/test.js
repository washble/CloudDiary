

function test_oauth() {
    const tenant = document.getElementById('tenant').value;
    const client_id = document.getElementById('clientId').value;
    const redirect_uri = `https://${window.location.hostname}${window.location.pathname}`;
    const scopes = ['Files.ReadWrite', 'FilesReadWrite.All'];
    const scopeParam = encodeURIComponent(scopes.join(' '));

    const url = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`;
    const data = {
        client_id : client_id,
        response_type : 'token',
        redirect_uri : redirect_uri,
        scope: scopeParam,
    };

    console.log(`tenant: ${tenant}`);
    console.log(`client_id: ${client_id}`);
    console.log(`redirect_uri: ${redirect_uri}`);
    console.log(`scope: ${scopeParam}`);

    const result = fetch_connection(url, data);
    console.log(`Result: ${result}`);
}

function fetch_connection(url, data) {
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Constent-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    return response.then(res => {
        if(res.status === 200) return res.json();
        else console.log(res.statusText);
    })
    .catch(err => {
        console.log(err);
    })
}