

function test_oauth() {
    const tenant = document.getElementById('tenant').value;
    const client_id = document.getElementById('clientId').value;
    const redirect_uri = `https://${window.location.hostname}${window.location.pathname}`;
    // const scopes = ['Files.ReadWrite', 'FilesReadWrite.All'];
    // const scopeParam = encodeURIComponent(scopes.join(' '));
    const scope = 'https://graph.microsoft.com/.default';

    const url = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`;
    const data = {
        client_id : client_id,
        response_type : 'code',
        redirect_uri : redirect_uri,
        response_mode : 'query',
        scope: scope,
        state: 12345
    };

    console.log(`tenant: ${tenant}`);
    console.log(`client_id: ${client_id}`);
    console.log(`redirect_uri: ${redirect_uri}`);
    console.log(`scope: ${scope}`);

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