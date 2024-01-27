

async function test_oauth() {
    const tenant = document.getElementById('tenant').value;
    const client_id = document.getElementById('clientId').value;
    const redirect_uri = encodeURIComponent(`https://${window.location.hostname}${window.location.pathname}`);
    //const scopes = ['openid', 'Files.ReadWrite', 'FilesReadWrite.All'];
    //const scopeParam = encodeURIComponent(scopes.join(' '));
    //const scope = encodeURIComponent('https://management.core.windows.net//.default openid Files.ReadWrite FilesReadWrite.All');
    const scope = encodeURIComponent('openid');

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

    //const result = await fetch_connection(url, data);
    const result = await fetch_connection_get(data);
    console.log(`Result: ${result}`);
}

function fetch_connection(url, data) {
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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

function fetch_connection_get(data) {
    const response = fetch(`https://login.microsoftonline.com/${data.tenant}/oauth2/v2.0/authorize?client_id=${data.client_id}&response_type=code&redirect_uri=${data.redirect_uri}&response_mode=query&scope=${data.scope}&state=12345`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
    return response.then(res => {
        if(res.status === 200) return res.json();
        else console.log(res.statusText);
    })
    .catch(err => {
        console.log(err);
    })
}