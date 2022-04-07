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
    city = json.city;
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
    
    <!-- {address}
    {city}
    {postal}
    {country}
    {JSON.stringify(coordinates)} -->

    <a href="https://example.com">test link</a>

    <div class="mt-8 max-w-md m-auto">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input type="text" class="mt-1 block w-full" placeholder="">
          </label>
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input type="email" class="mt-1 block w-full" placeholder="john@example.com">
          </label>
          <label class="block">
            <span class="text-gray-700">Phone</span>
            <input type="tel" class="mt-1 block w-full" placeholder="">
          </label>
          <label class="block">
            <span class="text-gray-700">City</span>
            <input type="text" class="mt-1 block w-full" bind:value={city}>
          </label>
          <label class="block">
            <span class="text-gray-700">State/Province</span>
            <input type="text" class="mt-1 block w-full" bind:value={region}>
          </label>
          <label class="block">
            <span class="text-gray-700">Country</span>
            <input type="text" class="mt-1 block w-full" bind:value={country}>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox" checked="">
                  <span class="ml-2">I pledge to join this movement in solidarity.  If I seek advantage over others, or ignore my responsibilities to others, I understand I will be hurting my peers and the worlds we're trying to create.</span>
                </label>
              </div>
            </div>
          </div>
          <button type="button">Submit</button>
        </div>
      </div>
    