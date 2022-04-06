<script>

    import { variables } from '$lib/variables';
    import { onMount } from "svelte";

    
    let address;
    let city;
    let region;
    let postal;
    let country;
    let coordinates;

    onMount(async () => {
    
    ipToCoordinates();

    });
    
    
    async function ipToCoordinates() {
    
    const ip = await fetch("https://serene-journey-42564.herokuapp.com/https://api.ipify.org?format=json&callback=getIP");
    
    const ip_json = await ip.json();
    console.log(ip_json);
    
    const request = await fetch(`https://serene-journey-42564.herokuapp.com/ipinfo.io/${ip_json["ip"]}/geo?token=${variables.ipInfo}`, {
        method: 'GET',
        "Content-Type": "application/json",
        "charset": "utf-8",
        "Access-Control-Allow-Headers": "X-Requested-With",
        "X-Requested-With": "XMLHttpRequest"   
    });
    
    const json = await request.json()
    
    console.log(json);
    
    address = `${json.city}, ${json.region}, ${json.country}, ${json.postal}`;
    city = json.city
    region = json.region;
    postal = json.postal;
    country = json.country;
    coordinates = json.loc.split(',');
    coordinates = {"lat": coordinates[0], "lng": coordinates[1]};
    // Seattle coordinates for testing
    // coordinates = {"lat": 47.6083, "lng": -122.335167};
    //         coordinates = {
    //     "lat": 37.7790262,
    //     "lng": -122.419906
    // }
    }
    
    </script>
    
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    
    <h3>We're not selling this to you.  We're organizing ourselves to make this happen together.</h3>
    
    {address}
    {city}
    {postal}
    {country}
    {JSON.stringify(coordinates)}
    