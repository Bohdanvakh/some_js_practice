async function getTada() {
    const url = "http://olx.ua/uk/transport/legkovye-avtomobili/";

    try {
        const response = await fetch(url);
        if (response.ok) {
            const result = await response.text();
            console.log(result);
        } else {
            throw new Error(`Response status: ${response.status}`);
        }
    
    } catch (error) {
        console.error(error.message);
    }
}

getTada();