
export const getImagen = async() => {

    try {

        const apiKey = 'DTLP9GPpgJZYZkZJhGoTV5a6rmYFSkTQ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        
        return url;
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );

    } catch (error) {
        // manejo del error
        return "no existe"
    }
    
    
    
}



