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

    <main class="p-4">
    
    <div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <h1>We have 30 months to make new worlds, according to <a href="https://example.com">the latest IPCC reports.</a></h1>

    <h1>Let's start living them, together.</h1>

    <h1>Easy.  Accessible.  Today.  Together.</h1>

    <div class="flex">
      <div class="example">
        <h3>Grow our own food</h3>
        <p>Just seeds and water.  (No gardening required.)</p>
        <p>The easiest, cheapest, most nutritious food you can get.</p>
      </div>
      <div class="example">
        <h3>Bikes and Mobility</h3>
      </div>
      <div class="example">
        <h3>Sun Power and Circadian Rhythms</h3>
        <p>Power your laptop with a single solar panel — all you need.</p>
        <p>Turn down the thermostat, put on pajamas.</p>
        <!-- Hot watter bottle -->
        <p>Heat people, not spaces.</p>
        <p>And rediscover darkness as the sun falls and life goes quiet.</p>
        <!-- Reading a book, stars -->
      </div>
  </div>

  <h3>We're not selling anything.  We're organizing ourselves, to start living the change together.</h3>
    
  <h2>Are you ready?</h2>
  <p class="text-center">(This isn't signing up for a mailing list.  This is joining a cooperative.)</p>
    <!-- <h3>We're not selling this to you.  We're organizing ourselves to make this happen together.</h3> -->
    
    <!-- {address}
    {city}
    {postal}
    {country}
    {JSON.stringify(coordinates)} -->

    <!-- <a href="https://example.com">test link</a> -->

    <form class="border rounded p-4 mt-8 max-w-md m-auto">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input type="text" class="mt-1 block w-full" placeholder="">
          </label>
          <label class="block">
            <span class="text-gray-700">Email</span>
            <input type="email" class="mt-1 block w-full" placeholder="john@example.com">
          </label>
          <div class="personal grid grid-cols-1 gap-6">
          <strong>More Information — Optional</strong>
          <p>We'll use this information to who see who is around us and start coordinating together.</p>
          <label class="block">
            <span class="text-gray-700">Phone</span>
            <input type="tel" class="mt-1 block w-full" placeholder="">
          </label>
          <label class="block">
            <span class="text-gray-700">City</span>
            <input type="text" class="mt-1 block w-full" >
          </label>
          <label class="block">
            <span class="text-gray-700">State/Province</span>
            <input type="text" class="mt-1 block w-full" >
          </label>
          <label class="block">
            <span class="text-gray-700">Country</span>
            <input type="text" class="mt-1 block w-full" bind:value={country}>
          </label>
          <label class="block">
            <span class="text-gray-700">Postal Code</span>
            <input type="text" class="mt-1 block w-full" bind:value={postal}>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input type="checkbox" checked="">
                  <span class="ml-2">I pledge to join this movement in solidarity.  If I seek advantage over others, or ignore responsibilities to others, I understand I am hurting peers and the worlds we're trying to create.</span>
                </label>
              </div>
            </div>
          </div>
          </div>
          <button type="button">Submit</button>
        </div>
      </form>

      </main>

      <style>
        main > h1, h2, h3 {
          text-align: center;
        }

        div > p {
          text-align: left;
        }

        form > h4, p {
          margin: 0px;
        }

        /* .personal {
          border: solid 1px lightgrey;
          padding: 0.5em;
          border-radius: 10px;
        } */
      </style>
    