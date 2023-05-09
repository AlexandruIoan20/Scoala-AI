export default async function fetchData (link) { 
    const res = await fetch(link); 
    const final = await res.json(); 

    return final;
};