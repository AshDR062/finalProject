import React from 'react'

const testFunction = (url) => {
    if (!url) 
        return false
    else {
        const pattern = new RegExp('https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$','i');
        return pattern.test(url);
    }
};

